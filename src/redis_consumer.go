package qmq

import "time"

type RedisConsumable struct {
	conn   *RedisConnection
	stream *RedisStream
	data   *Message
}

func (a *RedisConsumable) Ack() {
	writeRequest := NewWriteRequest(&a.stream.Context)
	a.conn.Set(a.stream.ContextKey(), writeRequest)
	a.stream.Locker.Unlock()
}

func (a *RedisConsumable) Nack() {
	a.stream.Locker.Unlock()
}

func (a *RedisConsumable) Data() *Message {
	return a.data
}

type RedisConsumer struct {
	conn    *RedisConnection
	stream  *RedisStream
	channel chan Consumable
}

func NewRedisConsumer(key string, conn *RedisConnection) Consumer {
	consumer := &RedisConsumer{
		conn:    conn,
		stream:  NewRedisStream(key, conn),
		channel: make(chan Consumable),
	}

	consumer.Initialize()

	go consumer.Process()

	return consumer
}

func (c *RedisConsumer) Initialize() {
	c.stream.Locker.Lock()
	defer c.stream.Locker.Unlock()

	readRequest, err := c.conn.Get(c.stream.ContextKey())
	if err == nil {
		readRequest.Data.UnmarshalTo(&c.stream.Context)
	}
}

func (c *RedisConsumer) ResetLastId() {
	c.stream.Context.LastConsumedId = "0"

	writeRequest := NewWriteRequest(&c.stream.Context)

	c.stream.Locker.Lock()
	defer c.stream.Locker.Unlock()

	c.conn.Set(c.stream.ContextKey(), writeRequest)
}

func (c *RedisConsumer) PopItem() Consumable {
	c.stream.Locker.Lock()

	m := &Message{}
	err := c.conn.StreamRead(c.stream, m)
	if err == nil {
		return &RedisConsumable{
			conn:   c.conn,
			stream: c.stream,
			data:   m,
		}
	}

	c.stream.Locker.Unlock()
	return nil
}

func (c *RedisConsumer) Pop() chan Consumable {
	return c.channel
}

func (c *RedisConsumer) Process() {
	ticker := time.NewTicker(100 * time.Millisecond)

	for {
		select {
		case <-ticker.C:
			for {
				consumable := c.PopItem()
				if consumable == nil {
					break
				}
				c.channel <- consumable
			}
		}
	}
}
