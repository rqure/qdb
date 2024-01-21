package qmq

import (
	"context"
	"log"
	"os"
	"strconv"
)

type QMQApplication struct {
	conn      *QMQConnection
	producers map[string]*QMQProducer
	consumers map[string]*QMQConsumer
	logger    *QMQLogger
}

func NewQMQApplication(ctx context.Context, name string) *QMQApplication {
	addr := os.Getenv("QMQ_ADDR")
	if addr == "" {
		addr = "redis:6379"
	}

	password := os.Getenv("QMQ_PASSWORD")

	conn := NewQMQConnection(addr, password)

	return &QMQApplication{
		conn:   conn,
		logger: NewQMQLogger(name, conn),
		producers: make(map[string]*QMQProducer),
		consumers: make(map[string]*QMQConsumer),
	}
}

func (a *QMQApplication) Initialize(ctx context.Context) {
	err := a.conn.Connect(ctx)
	if err != nil {
		log.Fatalf("Failed to connect to the database: %v", err)
	}

	logLength, err := strconv.Atoi(os.Getenv("QMQ_LOG_LENGTH"))
	if err != nil {
		logLength = 100
	}

	a.logger.Initialize(ctx, int64(logLength))
	a.logger.Advise(ctx, "Application has started")
}

func (a *QMQApplication) Deinitialize(ctx context.Context) {
	a.logger.Advise(ctx, "Application has stopped")
	a.conn.Disconnect()
}

func (a *QMQApplication) Producer(key string) *QMQProducer {
	return a.producers[key]
}

func (a *QMQApplication) Consumer(key string) *QMQConsumer {
	return a.consumers[key]
}

func (a *QMQApplication) AddProducer(key string) *QMQProducer {
	a.producers[key] = NewQMQProducer(key, a.conn)
	return a.producers[key]
}

func (a *QMQApplication) AddConsumer(key string) *QMQConsumer {
	a.consumers[key] = NewQMQConsumer(key, a.conn)
	return a.consumers[key]
}
