package qmq

import (
	"context"

	"google.golang.org/protobuf/reflect/protoreflect"
)

type QMQProducerConfig struct {
	Key    string
	Length int64
}

type QMQProducer struct {
	conn   *QMQConnection
	stream *QMQStream
}

func NewQMQProducer(key string, conn *QMQConnection) *QMQProducer {
	return &QMQProducer{
		conn:   conn,
		stream: NewQMQStream(key, conn),
	}
}

func  (p *QMQProducer) Initialize(ctx context.Context, length int64) {
	p.stream.Locker.Lock(ctx)
	defer p.stream.Locker.Unlock(ctx)

	readRequest, err := p.conn.Get(ctx, p.stream.ContextKey())
	if err == nil {
		readRequest.Data.UnmarshalTo(&p.stream.Context)
	}

	p.stream.Length = length
}

func (p *QMQProducer) Push(ctx context.Context, m protoreflect.ProtoMessage) {
	p.stream.Locker.Lock(ctx)
	defer p.stream.Locker.Unlock(ctx)

	p.conn.StreamAdd(ctx, p.stream, m)
}
