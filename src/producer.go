package qmq

import (
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

func (p *QMQProducer) Initialize(length int64) {
	p.stream.Locker.Lock()
	defer p.stream.Locker.Unlock()

	readRequest, err := p.conn.Get(p.stream.ContextKey())
	if err == nil {
		readRequest.Data.UnmarshalTo(&p.stream.Context)
	}

	p.stream.Length = length
}

func (p *QMQProducer) Push(m protoreflect.ProtoMessage) {
	p.stream.Locker.Lock()
	defer p.stream.Locker.Unlock()

	p.conn.StreamAdd(p.stream, m)
}

func (p *QMQProducer) PushRaw(d string) {
	p.stream.Locker.Lock()
	defer p.stream.Locker.Unlock()

	p.conn.StreamAddRaw(p.stream, d)
}
