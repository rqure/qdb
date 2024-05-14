package qmq

import (
	"context"
	"encoding/base64"
	"fmt"
	"strings"
	"sync"
	"time"

	"github.com/redis/go-redis/v9"
	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/reflect/protoreflect"
	"google.golang.org/protobuf/types/known/anypb"
	"google.golang.org/protobuf/types/known/timestamppb"
)

type RedisConnectionError int

const (
	CONNECTION_FAILED RedisConnectionError = iota
	MARSHAL_FAILED
	UNMARSHAL_FAILED
	SET_FAILED
	TEMPSET_FAILED
	GET_FAILED
	STREAM_ADD_FAILED
	STREAM_READ_FAILED
	DECODE_FAILED
	CAST_FAILED
	STREAM_CONTEXT_FAILED
	STREAM_EMPTY
	UNSET_FAILED
)

func (e RedisConnectionError) Error() string {
	return fmt.Sprintf("RedisConnectionError: %d", e)
}

type RedisConnection struct {
	addr     string
	password string
	redis    *redis.Client
	lock     sync.Mutex
	wg       sync.WaitGroup
}

func NewReadRequest() *SchemaData {
	return &SchemaData{
		Data: &anypb.Any{},
	}
}

func NewWriteRequest(m protoreflect.ProtoMessage) *SchemaData {
	writeRequest := &SchemaData{
		Data: &anypb.Any{},
	}
	writeRequest.Data.MarshalFrom(m)
	return writeRequest
}

func NewRedisConnection(connectionDetailsProvider RedisConnectionDetailsProvider) *RedisConnection {
	return &RedisConnection{
		addr:     connectionDetailsProvider.Address(),
		password: connectionDetailsProvider.Password(),
	}
}

func (q *RedisConnection) Connect() error {
	q.Disconnect()

	q.lock.Lock()
	defer q.lock.Unlock()

	opt := &redis.Options{
		Addr:     q.addr,
		Password: q.password,
		DB:       0, // use default DB
	}
	q.redis = redis.NewClient(opt)

	if q.redis.Ping(context.Background()).Err() != nil {
		return CONNECTION_FAILED
	}

	return nil
}

func (q *RedisConnection) Disconnect() {
	q.wg.Wait()

	q.lock.Lock()
	defer q.lock.Unlock()

	if q.redis != nil {
		q.redis.Close()
		q.redis = nil
	}
}

func (q *RedisConnection) WgAdd() {
	q.lock.Lock()
	defer q.lock.Unlock()

	q.wg.Add(1)
}

func (q *RedisConnection) WgDone() {
	q.lock.Lock()
	defer q.lock.Unlock()

	q.wg.Done()
}

func (q *RedisConnection) Copy(s, d string) {
	q.lock.Lock()
	defer q.lock.Unlock()

	q.redis.Copy(context.Background(), s, d, 0, true)
}

func (q *RedisConnection) Set(k string, d *SchemaData) error {
	q.lock.Lock()
	defer q.lock.Unlock()

	if d.Writetime == nil {
		d.Writetime = timestamppb.Now()
	}

	writeRequests := make(map[string]interface{})
	v, err := proto.Marshal(d)
	if err != nil {
		return MARSHAL_FAILED
	}
	writeRequests[k] = base64.StdEncoding.EncodeToString(v)

	if q.redis.MSet(context.Background(), writeRequests).Err() != nil {
		return SET_FAILED
	}

	return nil
}

func (q *RedisConnection) TempSet(k string, d *SchemaData, t time.Duration) (bool, error) {
	q.lock.Lock()
	defer q.lock.Unlock()

	if d.Writetime == nil {
		d.Writetime = timestamppb.Now()
	}

	v, err := proto.Marshal(d)
	if err != nil {
		return false, MARSHAL_FAILED
	}

	result, err := q.redis.SetNX(context.Background(),
		k, base64.StdEncoding.EncodeToString(v), t).Result()
	if err != nil {
		return false, TEMPSET_FAILED
	}

	if !result {
		return false, nil
	}

	return true, nil
}

func (q *RedisConnection) TempUpdateExpiry(k string, d time.Duration) error {
	q.lock.Lock()
	defer q.lock.Unlock()

	_, err := q.redis.Expire(context.Background(),
		k, d).Result()

	if err != nil {
		return TEMPSET_FAILED
	}

	return nil
}

func (q *RedisConnection) Unset(k string) error {
	q.lock.Lock()
	defer q.lock.Unlock()

	if q.redis.Del(context.Background(), k).Err() != nil {
		return UNSET_FAILED
	}

	return nil
}

func (q *RedisConnection) Get(k string) (*SchemaData, error) {
	q.lock.Lock()
	defer q.lock.Unlock()

	result := NewReadRequest()

	val, err := q.redis.Get(context.Background(), k).Result()
	if err != nil {
		return nil, GET_FAILED
	}
	protobytes, err := base64.StdEncoding.DecodeString(val)
	if err != nil {
		return nil, DECODE_FAILED
	}
	err = proto.Unmarshal(protobytes, result)
	if err != nil {
		return nil, UNMARSHAL_FAILED
	}

	return result, nil
}

func (q *RedisConnection) GetValue(k string, v proto.Message) error {
	readRequest, err := q.Get(k)
	if err != nil {
		return err
	}

	err = readRequest.Data.UnmarshalTo(v)
	if err != nil {
		return err
	}

	return nil
}

func (q *RedisConnection) SetValue(k string, v proto.Message) error {
	writeRequest := NewWriteRequest(v)
	return q.Set(k, writeRequest)
}

func (q *RedisConnection) StreamScan(k string) map[string]bool {
	result := map[string]bool{}

	q.lock.Lock()
	defer q.lock.Unlock()

	iter := q.redis.Scan(context.Background(), 0, k, 0).Iterator()
	for iter.Next(context.Background()) {
		if strings.HasSuffix(iter.Val(), ":context") || strings.HasSuffix(iter.Val(), ":lock") {
			continue
		}

		result[iter.Val()] = true
	}

	return result
}

func (q *RedisConnection) StreamAdd(s *RedisStream, m proto.Message) error {
	q.lock.Lock()
	defer q.lock.Unlock()

	b, err := proto.Marshal(m)
	if err != nil {
		return MARSHAL_FAILED
	}

	_, err = q.redis.XAdd(context.Background(), &redis.XAddArgs{
		Stream: s.Key(),
		Values: []string{"data", base64.StdEncoding.EncodeToString(b)},
		MaxLen: s.Length,
		Approx: true,
	}).Result()

	if err != nil {
		return STREAM_ADD_FAILED
	}

	return nil
}

func (q *RedisConnection) StreamAddRaw(s *RedisStream, d string) error {
	q.lock.Lock()
	defer q.lock.Unlock()

	_, err := q.redis.XAdd(context.Background(), &redis.XAddArgs{
		Stream: s.Key(),
		Values: []string{"data", d},
		MaxLen: s.Length,
		Approx: true,
	}).Result()

	if err != nil {
		return STREAM_ADD_FAILED
	}

	return nil
}

func (q *RedisConnection) StreamRead(s *RedisStream, m protoreflect.ProtoMessage) error {
	gResult, err := q.Get(s.ContextKey())
	if err == nil {
		gResult.Data.UnmarshalTo(&s.Context)
	} else {
		writeRequest := NewWriteRequest(&s.Context)
		q.Set(s.ContextKey(), writeRequest)
	}

	q.lock.Lock()
	defer q.lock.Unlock()

	xResult, err := q.redis.XRead(context.Background(), &redis.XReadArgs{
		Streams: []string{s.Key(), s.Context.LastConsumedId},
		Block:   -1,
	}).Result()

	if err != nil {
		return STREAM_READ_FAILED
	}

	for _, xMessage := range xResult {
		for _, message := range xMessage.Messages {
			s.Context.LastConsumedId = message.ID
			decodedMessage := make(map[string]string)

			for key, value := range message.Values {
				if castedValue, ok := value.(string); ok {
					decodedMessage[key] = castedValue
				} else {
					return CAST_FAILED
				}
			}

			if data, ok := decodedMessage["data"]; ok {
				protobytes, err := base64.StdEncoding.DecodeString(data)
				if err != nil {
					return DECODE_FAILED
				}
				err = proto.Unmarshal(protobytes, m)
				if err != nil {
					return UNMARSHAL_FAILED
				}
				return nil
			}
		}
	}

	return STREAM_EMPTY
}

func (q *RedisConnection) StreamReadRaw(s *RedisStream) (string, error) {
	gResult, err := q.Get(s.ContextKey())
	if err == nil {
		gResult.Data.UnmarshalTo(&s.Context)
	} else {
		writeRequest := NewWriteRequest(&s.Context)
		q.Set(s.ContextKey(), writeRequest)
	}

	q.lock.Lock()
	defer q.lock.Unlock()

	xResult, err := q.redis.XRead(context.Background(), &redis.XReadArgs{
		Streams: []string{s.Key(), s.Context.LastConsumedId},
		Block:   -1,
	}).Result()

	if err != nil {
		return "", STREAM_READ_FAILED
	}

	for _, xMessage := range xResult {
		for _, message := range xMessage.Messages {
			decodedMessage := make(map[string]string)

			for key, value := range message.Values {
				if castedValue, ok := value.(string); ok {
					decodedMessage[key] = castedValue
				} else {
					return "", CAST_FAILED
				}
			}

			if data, ok := decodedMessage["data"]; ok {
				s.Context.LastConsumedId = message.ID
				return data, nil
			}
		}
	}

	return "", STREAM_EMPTY
}
