package qmq

import (
	"context"
	"log"
	"strconv"
	"sync"
	"time"

	"github.com/redis/go-redis/v9"
)

type QMQData interface {
	GetWriteRequests() map[string]interface{}
	GetReadRequests() []string
	UpdateFromRead(readResults map[string]string)
}

type QMQStream interface {
	GetKey() string
	GetLength() int64
	GetLastConsumedID() QMQData
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

func (q *QMQConnection) Set(ctx context.Context, data []QMQData) error {
	q.lock.Lock()
	defer q.lock.Unlock()

	writeRequests := make(map[string]interface{})
	for _, d := range data {
		for k, v := range d.GetWriteRequests() {
			writeRequests[k] = v
		}
	}

	return q.redis.MSet(ctx, writeRequests).Err()
}

func (q *QMQConnection) TempSet(ctx context.Context, data QMQData, timeoutMs int64) (bool, error) {
	q.lock.Lock()
	defer q.lock.Unlock()

	results := make([]bool, 0)
	for k, v := range data.GetWriteRequests() {
		result, err := q.redis.SetNX(ctx, k, v, time.Duration(timeoutMs)*time.Millisecond).Result()
		if err != nil {
			return false, err
		}
		results = append(results, result)
	}

	for _, result := range results {
		if !result {
			return false, nil
		}
	}
	return true, nil
}

func (q *QMQConnection) Get(ctx context.Context, data []string) {
	q.lock.Lock()
	defer q.lock.Unlock()

	requests := make([]string, 0)
	for _, d := range data {
		// for _, r := range d.GetReadRequests() {
		requests = append(requests, d)
		// }
	}

	results := q.redis.MGet(ctx, requests...)
	if results.Err() != nil {
		log.Printf("Failed to get data from Redis: %v", results.Err())
		return
	}

	for _, result := range results.Args()[1:] {
		log.Printf("Result: (%T, %v)", result, result)
	}
}
