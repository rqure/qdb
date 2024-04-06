package qmq

type ProducerFactory interface {
	Create(key string, connectionProvider ConnectionProvider) Producer
}
