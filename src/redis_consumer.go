package qmq

import (
	"crypto/rand"
	"encoding/base64"
	"time"
)

type RedisConsumer struct {
	connection *RedisConnection
	stream     *RedisStream
	config     *RedisConsumerConfig
	key        string
	readCh     chan Consumable
	closeCh    chan interface{}
}

type RedisConsumerConfig struct {
	Topic        string
	Transformers []Transformer
	CopyOriginal bool
}

func NewRedisConsumer(connection *RedisConnection, config *RedisConsumerConfig) Consumer {
	randomBytes := make([]byte, 8)
	rand.Read(randomBytes)
	key := config.Topic + ":" + base64.StdEncoding.EncodeToString(randomBytes)

	consumer := &RedisConsumer{
		connection: connection,
		key:        key,
		stream:     NewRedisStream(key, connection),
		config:     config,
		readCh:     make(chan Consumable),
		closeCh:    make(chan interface{}),
	}

	consumer.Initialize()

	go consumer.Process()

	return consumer
}

func (c *RedisConsumer) Initialize() {
	c.stream.Locker.Lock()
	defer c.stream.Locker.Unlock()

	if c.config.CopyOriginal {
		c.connection.Copy()
	}

	readRequest, err := c.connection.Get(c.stream.ContextKey())
	if err == nil {
		readRequest.Data.UnmarshalTo(&c.stream.Context)
	}
}

func (c *RedisConsumer) PopItem() Consumable {
	c.stream.Locker.Lock()

	m := &Message{}
	err := c.connection.StreamRead(c.stream, m)
	if err == nil {
		var i interface{} = m
		for _, transformer := range c.config.Transformers {
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
	c.connection.WgAdd()
	defer c.connection.WgDone()

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
