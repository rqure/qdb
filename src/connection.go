package qmq

import (
	"context"
	"log"
	"strconv"
	"sync"
	"time"

	"github.com/redis/go-redis/v9"
	"google.golang.org/protobuf/proto"
)

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

	return q.redis.Ping(ctx).Err()
}

func (q *QMQConnection) Disconnect(ctx context.Context) {
	q.lock.Lock()
	defer q.lock.Unlock()

	if q.redis != nil {
		q.redis.Close()
		q.redis = nil
	}
}

func (q *QMQConnection) Set(ctx context.Context, k string, v *QMQData) error {
	q.lock.Lock()
	defer q.lock.Unlock()

	writeRequests := make(map[string]interface{})
	writeRequests[k] = v.String()

	return q.redis.MSet(ctx, writeRequests).Err()
}

func (q *QMQConnection) TempSet(ctx context.Context, k string, v *QMQData, timeoutMs int64) (bool, error) {
	q.lock.Lock()
	defer q.lock.Unlock()

	result, err := q.redis.SetNX(ctx, k, v.String(), time.Duration(timeoutMs)*time.Millisecond).Result()
	if err != nil {
		return false, err
	}

	if !result {
		return false, nil
	}

	return true, nil
}

func (q *QMQConnection) Get(ctx context.Context, k ...string) map[string]*QMQData {
	q.lock.Lock()
	defer q.lock.Unlock()

	results := make(map[string]*QMQData)

	values := q.redis.MGet(ctx, k...)
	if values.Err() != nil {
		log.Printf("Failed to get data from Redis: %v", values.Err())
	}

	for i, v := range values.Args()[1:] {
		switch r := v.(type) {
		case []byte:
			results[k[i]] = &QMQData{}
			err := proto.Unmarshal(r, results[k[i]])
			if err != nil {
				log.Printf("Failed to unmarshal data from Redis: %v", err)
			}
			break
		default:
			log.Printf("Failed to find correct type for data from Redis: (%T - %v)", v, v)
		}
	}

	return results
}
