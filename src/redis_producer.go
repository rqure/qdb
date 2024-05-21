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
	Distribution RedisProducerDistribution
}

type RedisProducerDistribution int64

const (
	Duplicate RedisProducerDistribution = iota
	RoundRobin
)

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

	queues := map[string]bool{}

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

		switch p.config.Distribution {
		case Duplicate:
			for q := range p.connection.StreamScan(p.config.Topic + ":*") {
				if q == p.config.Topic {
					continue
				}

				s = NewRedisStream(q, p.connection)
				s.Length = p.config.Length
				pushToStream(s, m)
			}
		case RoundRobin:
			scanned := p.connection.StreamScan(p.config.Topic + ":*")
			queues[p.config.Topic] = true
			for q := range scanned {
				if _, ok := queues[q]; !ok {
					queues[q] = true
					s = NewRedisStream(q, p.connection)
					s.Length = p.config.Length
					pushToStream(s, m)
					break
				}
			}

			if len(queues) == len(scanned) {
				queues = map[string]bool{}
			}
		}
	}

	for i := range p.channel {
		push(i)
	}
}
