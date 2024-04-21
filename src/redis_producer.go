package qmq

type RedisProducer struct {
	connection   *RedisConnection
	stream       *RedisStream
	transformers []Transformer
	channel      chan interface{}
}

func NewRedisProducer(key string, connection *RedisConnection, length int64, transformers []Transformer) Producer {
	producer := &RedisProducer{
		connection:   connection,
		stream:       NewRedisStream(key, connection),
		transformers: transformers,
		channel:      make(chan interface{}),
	}

	producer.Initialize(length)

	return producer
}

func (p *RedisProducer) Initialize(length int64) {
	p.stream.Locker.Lock()
	defer p.stream.Locker.Unlock()

	readRequest, err := p.connection.Get(p.stream.ContextKey())
	if err == nil {
		readRequest.Data.UnmarshalTo(&p.stream.Context)
	}

	p.stream.Length = length

	go p.Process()
}

func (p *RedisProducer) Push(i interface{}) {
	p.channel <- i
}

func (p *RedisProducer) Close() {
	close(p.channel)
}

func (p *RedisProducer) Process() {
	p.connection.WgAdd()
	defer p.connection.WgDone()

	push := func(i interface{}) {
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

		p.connection.StreamAdd(p.stream, m)
	}

	for i := range p.channel {
		push(i)
	}
}
