package qmq

type ProducerFactory interface {
	Make(key string, connectionProvider ConnectionProvider) Producer
}
