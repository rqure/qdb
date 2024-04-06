package qmq

type RedisConnectionDetailsProvider interface {
	Address() string
	Password() string
}
