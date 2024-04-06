package qmq

type ConsumerFactory interface {
	Make(key string, connectionProvider ConnectionProvider) Consumer
}
