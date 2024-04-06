package qmq

type RedisProducer struct {
	conn         *RedisConnection
	stream       *RedisStream
	transformers []Transformer
}

func NewRedisProducer(key string, conn *RedisConnection, length int64, transformers []Transformer) Producer {
	producer := &RedisProducer{
		conn:         conn,
		stream:       NewRedisStream(key, conn),
		transformers: transformers,
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

func (p *RedisProducer) Push(i interface{}) {
	p.stream.Locker.Lock()
	defer p.stream.Locker.Unlock()

	for _, transformer := range p.transformers {
		i = transformer.Transform(i)

		if i == nil {
			return
		}
	}

	m, ok := i.(*Message)

	if !ok {
		return
	}

	p.conn.StreamAdd(p.stream, m)
}
