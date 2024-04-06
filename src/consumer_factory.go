package qmq

type ConsumerFactory interface {
	Create(key string, connectionProvider ConnectionProvider) Consumer
}
