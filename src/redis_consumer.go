package qmq

import "time"

type RedisConsumer struct {
	connection   *RedisConnection
	stream       *RedisStream
	readCh       chan Consumable
	closeCh      chan interface{}
	transformers []Transformer
}

func NewRedisConsumer(key string, connection *RedisConnection, transformers []Transformer) Consumer {
	consumer := &RedisConsumer{
		connection:   connection,
		stream:       NewRedisStream(key, connection),
		readCh:       make(chan Consumable),
		closeCh:      make(chan interface{}),
		transformers: transformers,
	}

	consumer.Initialize()

	go consumer.Process()

	return consumer
}

func (c *RedisConsumer) Initialize() {
	c.stream.Locker.Lock()
	defer c.stream.Locker.Unlock()

	readRequest, err := c.connection.Get(c.stream.ContextKey())
	if err == nil {
		readRequest.Data.UnmarshalTo(&c.stream.Context)
	}
}

func (c *RedisConsumer) ResetLastId() {
	c.stream.Locker.Lock()
	defer c.stream.Locker.Unlock()

	c.stream.Context.LastConsumedId = "0"

	writeRequest := NewWriteRequest(&c.stream.Context)
	c.connection.Set(c.stream.ContextKey(), writeRequest)
}

func (c *RedisConsumer) PopItem() Consumable {
	c.stream.Locker.Lock()

	m := &Message{}
	err := c.connection.StreamRead(c.stream, m)
	if err == nil {
		var i interface{} = m
		for _, transformer := range c.transformers {
			i = transformer.Transform(i)
			if i == nil {
				break
			}
		}

		consumable := &RedisConsumable{
			conn:   c.connection,
			stream: c.stream,
			data:   i,
		}

		// If the message was transformed into nil, we should ack it
		// so it doesn't get read again.
		if i == nil {
			consumable.Ack()
			return nil
		}

		return consumable
	}

	// If we couldn't read the message due to an error, we should ack the message
	// to move on to the next one.
	consumable := &RedisConsumable{
		conn:   c.connection,
		stream: c.stream,
		data:   nil,
	}
	consumable.Ack()

	return nil
}

func (c *RedisConsumer) Pop() chan Consumable {
	return c.readCh
}

func (c *RedisConsumer) Close() {
	c.closeCh <- nil
}

func (c *RedisConsumer) Process() {
	ticker := time.NewTicker(100 * time.Millisecond)
	defer ticker.Stop()
	defer close(c.readCh)
	defer close(c.closeCh)

	for {
		select {
		case <-c.closeCh:
			return
		case <-ticker.C:
			for {
				consumable := c.PopItem()
				if consumable == nil {
					break
				}

				select {
				case <-c.closeCh:
					return
				case c.readCh <- consumable:
				}
			}
		}
	}
}
