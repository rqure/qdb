package qmq

import "context"

type QMQProducer struct {
	conn   *QMQConnection
	stream *QMQStream
}

func NewQMQProducer(ctx context.Context, key string, conn *QMQConnection) *QMQProducer {
	producer := &QMQProducer{
		conn:   conn,
		stream: NewQMQStream(key, conn),
	}

	readRequest, err := conn.Get(ctx, producer.stream.ContextKey())
	if err == nil {
		readRequest.Data.UnmarshalTo(&producer.stream.Context)
	}

	return producer
}

func (p *QMQProducer) push(ctx context.Context) {

}
