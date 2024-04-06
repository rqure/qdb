package qmq

import "google.golang.org/protobuf/reflect/protoreflect"

type RedisProducer struct {
	conn   *RedisConnection
	stream *RedisStream
}

func NewRedisProducer(key string, conn *RedisConnection, length int64) Producer {
	producer := &RedisProducer{
		conn:   conn,
		stream: NewRedisStream(key, conn),
	}

	producer.Initialize(length)

	return producer
}

func (p *RedisProducer) Initialize(length int64) {
	p.stream.Locker.Lock()
	defer p.stream.Locker.Unlock()

	readRequest, err := p.conn.Get(p.stream.ContextKey())
	if err == nil {
		readRequest.Data.UnmarshalTo(&p.stream.Context)
	}

	p.stream.Length = length
}

func (p *RedisProducer) Push(m protoreflect.ProtoMessage) {
	p.stream.Locker.Lock()
	defer p.stream.Locker.Unlock()

	p.conn.StreamAdd(p.stream, m)
}

func (p *RedisProducer) PushRaw(d string) {
	p.stream.Locker.Lock()
	defer p.stream.Locker.Unlock()

	p.conn.StreamAddRaw(p.stream, d)
}
