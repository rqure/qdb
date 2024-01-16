package qmq

import (
	"context"
	"encoding/base64"
	"fmt"
	"strconv"
	"sync"
	"time"

	"github.com/redis/go-redis/v9"
	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/reflect/protoreflect"
	"google.golang.org/protobuf/types/known/timestamppb"
)

type QMQStream struct {
	key string

	Context QMQStreamContext
}

func (s *QMQStream) Key() string {
	return s.key
}

func (s *QMQStream) ContextKey() string {
	return s.key + ":context"
}

type QMQConnectionError int

const (
	CONNECTION_FAILED QMQConnectionError = iota
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
)

func (e QMQConnectionError) Error() string {
	return fmt.Sprintf("QMQConnectionError: %d", e)
}

type QMQConnection struct {
	host     string
	port     int
	password string
	redis    *redis.Client
	lock     sync.Mutex
}

func NewQMQConnection(host string, port int, password string) *QMQConnection {
	return &QMQConnection{
		host:     host,
		port:     port,
		password: password,
	}
}

func (q *QMQConnection) Connect(ctx context.Context) error {
	q.Disconnect(ctx)

	q.lock.Lock()
	defer q.lock.Unlock()

	opt := &redis.Options{
		Addr:     q.host + ":" + strconv.Itoa(q.port),
		Password: q.password,
		DB:       0, // use default DB
	}
	q.redis = redis.NewClient(opt)

	if q.redis.Ping(ctx).Err() != nil {
		return CONNECTION_FAILED
	}

	return nil
}

func (q *QMQConnection) Disconnect(ctx context.Context) {
	q.lock.Lock()
	defer q.lock.Unlock()

	if q.redis != nil {
		q.redis.Close()
		q.redis = nil
	}
}

func (q *QMQConnection) Set(ctx context.Context, k string, d *QMQData) error {
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
	writeRequests[k] = v

	if q.redis.MSet(ctx, writeRequests).Err() != nil {
		return SET_FAILED
	}

	return nil
}

func (q *QMQConnection) TempSet(ctx context.Context, k string, d *QMQData, timeoutMs int64) (bool, error) {
	q.lock.Lock()
	defer q.lock.Unlock()

	if d.Writetime == nil {
		d.Writetime = timestamppb.Now()
	}

	v, err := proto.Marshal(d)
	if err != nil {
		return false, MARSHAL_FAILED
	}

	result, err := q.redis.SetNX(ctx, k, v, time.Duration(timeoutMs)*time.Millisecond).Result()
	if err != nil {
		return false, TEMPSET_FAILED
	}

	if !result {
		return false, nil
	}

	return true, nil
}

func (q *QMQConnection) Get(ctx context.Context, k ...string) (map[string]*QMQData, error) {
	q.lock.Lock()
	defer q.lock.Unlock()

	results := make(map[string]*QMQData)

	values := q.redis.MGet(ctx, k...)
	if values.Err() != nil {
		return results, GET_FAILED
	}

	for i, v := range values.Args()[1:] {
		switch r := v.(type) {
		case []byte:
			results[k[i]] = &QMQData{}
			err := proto.Unmarshal(r, results[k[i]])
			if err != nil {
				return results, UNMARSHAL_FAILED
			}
			break
		default:
			return results, UNMARSHAL_FAILED
		}
	}

	return results, nil
}

func (q *QMQConnection) StreamAdd(ctx context.Context, s *QMQStream, m proto.Message) error {
	q.lock.Lock()
	defer q.lock.Unlock()

	b, err := proto.Marshal(m)
	if err != nil {
		return MARSHAL_FAILED
	}

	_, err = q.redis.XAdd(ctx, &redis.XAddArgs{
		Stream: s.Key(),
		Values: []string{"data", base64.StdEncoding.EncodeToString(b)},
		MaxLen: s.Context.Length,
		Approx: true,
	}).Result()

	if err != nil {
		return STREAM_ADD_FAILED
	}

	return nil
}

func (q *QMQConnection) StreamRead(ctx context.Context, s *QMQStream, m protoreflect.ProtoMessage) error {
	gResult, err := q.Get(ctx, s.ContextKey())
	if err != nil {
		return STREAM_CONTEXT_FAILED
	}
	_, ok := gResult[s.ContextKey()]
	if !ok {
		return STREAM_CONTEXT_FAILED
	}

	err = gResult[s.ContextKey()].Data.UnmarshalTo(&s.Context)
	if err != nil {
		return UNMARSHAL_FAILED
	}

	q.lock.Lock()
	defer q.lock.Unlock()

	xResult, err := q.redis.XRead(ctx, &redis.XReadArgs{
		Streams: []string{s.Key(), s.Context.LastConsumedId},
		Block:   0,
	}).Result()

	if err != nil {
		return STREAM_READ_FAILED
	}

	for _, xMessage := range xResult {
		for _, message := range xMessage.Messages {
			decodedMessage := make(map[string]string)

			for key, value := range message.Values {
				if value_casted, ok := value.(string); ok {
					decodedMessage[key] = value_casted
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
