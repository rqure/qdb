package qmq

import "context"

type QMQAckable struct {
	conn    *QMQConnection
	locker  *QMQLocker
	stream  *QMQStream
	last_id string
}

func (a *QMQAckable) Ack(ctx context.Context) {
	writeRequest := &QMQData{}
	writeRequest.Data.MarshalFrom(&a.stream.Context)
	a.conn.Set(ctx, a.stream.ContextKey(), writeRequest)
	a.locker.Unlock(ctx)
}

func (a *QMQAckable) Dispose(ctx context.Context) {
	a.locker.Unlock(ctx)
}

type QMQConsumer struct {
	conn   *QMQConnection
	stream *QMQStream
}

func NewQMQConsumer(ctx context.Context, key string, conn *QMQConnection) *QMQConsumer {
	consumer := &QMQConsumer{
		conn: conn,
		stream: NewQMQStream(key, conn)
	}

	readRequest, err := conn.Get(ctx, consumer.stream.ContextKey())
	if err == nil {
		readRequest.Data.UnmarshalTo(&consumer.stream.Context)
	}

	return consumer
}
