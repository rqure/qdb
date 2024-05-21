package qmq

import (
	"crypto/rand"
	"encoding/base64"
	"time"
)

type RedisConsumer struct {
	connection     *RedisConnection
	stream         *RedisStream
	originalStream *RedisStream
	config         *RedisConsumerConfig
	key            string
	readCh         chan Consumable
	closeCh        chan interface{}
}

type RedisConsumerConfig struct {
	Topic        string
	Transformers []Transformer
	AckOriginal  bool
}

func NewRedisConsumer(connection *RedisConnection, config *RedisConsumerConfig) Consumer {
	randomBytes := make([]byte, 8)
	rand.Read(randomBytes)
	key := config.Topic + ":" + base64.StdEncoding.EncodeToString(randomBytes)

	consumer := &RedisConsumer{
		connection:     connection,
		key:            key,
		stream:         NewRedisStream(key, connection),
		originalStream: NewRedisStream(config.Topic, connection),
		config:         config,
		readCh:         make(chan Consumable),
		closeCh:        make(chan interface{}),
	}

	consumer.Initialize()

	go consumer.Process()

	return consumer
}

func (c *RedisConsumer) Initialize() {
	c.originalStream.Locker.Lock()
	defer c.originalStream.Locker.Unlock()

	c.stream.Locker.Lock()
	defer c.stream.Locker.Unlock()

	c.connection.Copy(c.config.Topic, c.key)
	c.connection.Copy(c.originalStream.ContextKey(), c.stream.ContextKey())

	readRequest, err := c.connection.Get(c.stream.ContextKey())
	if err == nil {
		readRequest.Data.UnmarshalTo(&c.stream.Context)
	}

	// wait for the stream to be scannable
	for {
		streams := c.connection.StreamScan(c.config.Topic + ":*")

		if _, ok := streams[c.key]; ok {
			break
		}

		<-time.After(100 * time.Millisecond)
	}
}

func (c *RedisConsumer) PopItem() Consumable {
	c.stream.Locker.Lock()

	streams := []*RedisStream{c.stream}
	if c.config.AckOriginal {
		c.originalStream.Locker.Lock()
		streams = append(streams, c.originalStream)
	}

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
			conn:    c.connection,
			streams: streams,
			data:    i,
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
		conn:    c.connection,
		streams: streams,
		data:    nil,
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

	readTicker := time.NewTicker(100 * time.Millisecond)
	defer readTicker.Stop()

	heartbeatTicker := time.NewTicker(10 * time.Second)
	defer heartbeatTicker.Stop()

	defer close(c.readCh)
	defer close(c.closeCh)

	defer c.connection.Unset(c.stream.Key())
	defer c.connection.Unset(c.stream.ContextKey())
	defer c.connection.Unset(c.stream.LockerKey())

	for {
		select {
		case <-c.closeCh:
			return
		case <-heartbeatTicker.C:
			c.connection.TempUpdateExpiry(c.stream.Key(), 20*time.Second)
			c.connection.TempUpdateExpiry(c.stream.ContextKey(), 20*time.Second)
			c.connection.TempUpdateExpiry(c.stream.LockerKey(), 20*time.Second)
		case <-readTicker.C:
		outer:
			for {
				consumable := c.PopItem()
				if consumable == nil {
					break outer
				}

			inner:
				for {
					select {
					case <-c.closeCh:
						return
					case <-heartbeatTicker.C:
						c.connection.TempUpdateExpiry(c.stream.Key(), 20*time.Second)
						c.connection.TempUpdateExpiry(c.stream.ContextKey(), 20*time.Second)
						c.connection.TempUpdateExpiry(c.stream.LockerKey(), 20*time.Second)
					case c.readCh <- consumable:
						break inner
					default:
						// Nobody is ready to read the message, nack it to free stream lock
						consumable.Nack()
						break outer
					}
				}
			}
		}
	}
}
