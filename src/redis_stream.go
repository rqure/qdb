package qmq

type RedisStream struct {
	key string

	Context StreamContext
	Length  int64
	Locker  *RedisLocker
}

func NewRedisStream(key string, conn *RedisConnection) *RedisStream {
	stream := &RedisStream{
		key: key,
		Context: StreamContext{
			LastConsumedId: "0",
		},
		Length: 1,
	}

	stream.Locker = NewRedisLocker(stream.LockerKey(), conn)

	return stream
}

func (s *RedisStream) Key() string {
	return s.key
}

func (s *RedisStream) ContextKey() string {
	return s.key + ":context"
}

func (s *RedisStream) LockerKey() string {
	return s.key + ":lock"
}
