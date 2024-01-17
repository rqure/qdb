package qmq

import (
	"context"
	"time"

	"google.golang.org/protobuf/reflect/protoreflect"
)

type QMQProducer struct {
	conn   *QMQConnection
	stream *QMQStream
}

func NewQMQProducer(ctx context.Context, key string, conn *QMQConnection, length int64) *QMQProducer {
	producer := &QMQProducer{
		conn:   conn,
		stream: NewQMQStream(key, conn),
	}

	readRequest, err := conn.Get(ctx, producer.stream.ContextKey())
	if err == nil {
		readRequest.Data.UnmarshalTo(&producer.stream.Context)
	}

	producer.stream.Length = length

	return producer
}

func (p *QMQProducer) push(ctx context.Context, m protoreflect.ProtoMessage) {
	for !p.stream.Locker.Lock(ctx) {
		time.Sleep(100 * time.Millisecond)
	}
	defer p.stream.Locker.Unlock(ctx)

	p.conn.StreamAdd(ctx, p.stream, m)
}
