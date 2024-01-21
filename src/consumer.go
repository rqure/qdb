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
	writeRequest := NewWriteRequest(&a.stream.Context)
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

func NewQMQConsumer(key string, conn *QMQConnection) *QMQConsumer {
	return &QMQConsumer{
		conn:   conn,
		stream: NewQMQStream(key, conn),
	}
}

func (c *QMQConsumer) Initialize(ctx context.Context) {
	c.stream.Locker.Lock(ctx)
	defer c.stream.Locker.Unlock(ctx)

	readRequest, err := c.conn.Get(ctx, c.stream.ContextKey())
	if err == nil {
		readRequest.Data.UnmarshalTo(&c.stream.Context)
	}
}

func (c *QMQConsumer) ResetLastId(ctx context.Context) {
	c.stream.Context.LastConsumedId = "0"

	writeRequest := NewWriteRequest(&c.stream.Context)

	c.stream.Locker.Lock(ctx)
	defer c.stream.Locker.Unlock(ctx)

	c.conn.Set(ctx, c.stream.ContextKey(), writeRequest)
}

func (c *QMQConsumer) Pop(ctx context.Context, m protoreflect.ProtoMessage) *QMQAckable {
	c.stream.Locker.Lock(ctx)

	readRequest, err := c.conn.Get(ctx, c.stream.ContextKey())
	if err == nil {
		readRequest.Data.UnmarshalTo(&c.stream.Context)
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
