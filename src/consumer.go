package qmq

import (
	"context"
	"time"

	"google.golang.org/protobuf/reflect/protoreflect"
)

type QMQAckable struct {
	conn   *QMQConnection
	stream *QMQStream
}

func (a *QMQAckable) Ack(ctx context.Context) {
	writeRequest := &QMQData{}
	writeRequest.Data.MarshalFrom(&a.stream.Context)
	a.conn.Set(ctx, a.stream.ContextKey(), writeRequest)
	a.stream.Locker.Unlock(ctx)
}

func (a *QMQAckable) Dispose(ctx context.Context) {
	a.stream.Locker.Unlock(ctx)
}

type QMQConsumer struct {
	conn   *QMQConnection
	stream *QMQStream
}

func NewQMQConsumer(ctx context.Context, key string, conn *QMQConnection) *QMQConsumer {
	consumer := &QMQConsumer{
		conn:   conn,
		stream: NewQMQStream(key, conn),
	}

	readRequest, err := conn.Get(ctx, consumer.stream.ContextKey())
	if err == nil {
		readRequest.Data.UnmarshalTo(&consumer.stream.Context)
	}

	return consumer
}

func (c *QMQConsumer) ResetLastId(ctx context.Context) {
	c.stream.Context.LastConsumedId = "0"

	writeRequest := &QMQData{}
	writeRequest.Data.MarshalFrom(&c.stream.Context)

	for !c.stream.Locker.Lock(ctx) {
		time.Sleep(100 * time.Millisecond)
	}
	defer c.stream.Locker.Unlock(ctx)

	c.conn.Set(ctx, c.stream.ContextKey(), writeRequest)
}

func (c *QMQConsumer) Pop(ctx context.Context, m protoreflect.ProtoMessage) *QMQAckable {
	for !c.stream.Locker.Lock(ctx) {
		time.Sleep(100 * time.Millisecond)
	}

	for {
		// Keep reading from the stream until we get a valid message
		err := c.conn.StreamRead(ctx, c.stream, m)

		if err == nil {
			break
		}

		if err == STREAM_EMPTY {
			time.Sleep(100 * time.Millisecond)
		}
	}

	return &QMQAckable{
		conn:   c.conn,
		stream: c.stream,
	}
}
