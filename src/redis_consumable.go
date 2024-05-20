package qmq

type RedisConsumable struct {
	conn    *RedisConnection
	streams []*RedisStream
	data    interface{}
}

func NewRedisConsumable(conn *RedisConnection, streams []*RedisStream, data interface{}) Consumable {
	consumable := &RedisConsumable{
		conn:    conn,
		streams: streams,
		data:    data,
	}

	return consumable
}

func (a *RedisConsumable) Ack() {
	context := &a.streams[0].Context

	for _, stream := range a.streams {
		writeRequest := NewWriteRequest(context)
		a.conn.Set(stream.ContextKey(), writeRequest)
		stream.Locker.Unlock()
	}
}

func (a *RedisConsumable) Nack() {
	for _, stream := range a.streams {
		stream.Locker.Unlock()
	}
}

func (a *RedisConsumable) Data() interface{} {
	return a.data
}
