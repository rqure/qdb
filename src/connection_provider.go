package qmq

type ConnectionProvider interface {
	Get(key string) Connection
	Set(key string, connection Connection)
	ForEach(func(key string, connection Connection))
}
