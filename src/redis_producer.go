package qmq

type RedisProducer struct {
	connection *RedisConnection
	config     *RedisProducerConfig
	channel    chan interface{}
}

type RedisProducerConfig struct {
	Topic        string
	Length       int64
	Transformers []Transformer
}

func NewRedisProducer(connection *RedisConnection, config *RedisProducerConfig) Producer {
	if config.Length <= 0 {
		config.Length = 10
	}

	producer := &RedisProducer{
		connection: connection,
		config:     config,
		channel:    make(chan interface{}),
	}

	go producer.Process()

	return producer
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

	pushToStream := func(s *RedisStream, m *Message) {
		s.Locker.Lock()
		defer s.Locker.Unlock()
		p.connection.StreamAdd(s, m)
	}

	push := func(i interface{}) {
		for _, transformer := range p.config.Transformers {
			i = transformer.Transform(i)

			if i == nil {
				return
			}
		}

		m, ok := i.(*Message)

		if !ok {
			return
		}

		s := NewRedisStream(p.config.Topic, p.connection)
		s.Length = p.config.Length
		pushToStream(s, m)

		for q := range p.connection.StreamScan(p.config.Topic + ":*") {
			s = NewRedisStream(q, p.connection)
			s.Length = p.config.Length
			pushToStream(s, m)
		}
	}

	for i := range p.channel {
		push(i)
	}
}
