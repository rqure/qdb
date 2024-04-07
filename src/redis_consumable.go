package qmq

type RedisConsumable struct {
	conn   *RedisConnection
	stream *RedisStream
	data   interface{}
}

func NewRedisConsumable(conn *RedisConnection, stream *RedisStream, data interface{}) Consumable {
	consumable := &RedisConsumable{
		conn:   conn,
		stream: stream,
		data:   data,
	}

	return consumable
}

func (a *RedisConsumable) Ack() {
	writeRequest := NewWriteRequest(&a.stream.Context)
	a.conn.Set(a.stream.ContextKey(), writeRequest)
	a.stream.Locker.Unlock()
}

func (a *RedisConsumable) Nack() {
	a.stream.Locker.Unlock()
}

func (a *RedisConsumable) Data() interface{} {
	return a.data
}
