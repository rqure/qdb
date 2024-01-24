package qmq

import (
	"time"

	"google.golang.org/protobuf/reflect/protoreflect"
)

type QMQAckable struct {
	conn   *QMQConnection
	stream *QMQStream
}

func (a *QMQAckable) Ack() {
	writeRequest := NewWriteRequest(&a.stream.Context)
	a.conn.Set(a.stream.ContextKey(), writeRequest)
	a.stream.Locker.Unlock()
}

func (a *QMQAckable) Dispose() {
	a.stream.Locker.Unlock()
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

func (c *QMQConsumer) Initialize() {
	c.stream.Locker.Lock()
	defer c.stream.Locker.Unlock()

	readRequest, err := c.conn.Get(c.stream.ContextKey())
	if err == nil {
		readRequest.Data.UnmarshalTo(&c.stream.Context)
	}
}

func (c *QMQConsumer) ResetLastId() {
	c.stream.Context.LastConsumedId = "0"

	writeRequest := NewWriteRequest(&c.stream.Context)

	c.stream.Locker.Lock()
	defer c.stream.Locker.Unlock()

	c.conn.Set(c.stream.ContextKey(), writeRequest)
}

func (c *QMQConsumer) Pop(m protoreflect.ProtoMessage) *QMQAckable {
	c.stream.Locker.Lock()

	readRequest, err := c.conn.Get(c.stream.ContextKey())
	if err == nil {
		readRequest.Data.UnmarshalTo(&c.stream.Context)
	}

	for {
		// Keep reading from the stream until we get a valid message
		err := c.conn.StreamRead(c.stream, m)

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
