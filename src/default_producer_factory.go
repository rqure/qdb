package qmq

type DefaultProducerFactory struct{}

func (a *DefaultProducerFactory) Make(key string, connectionProvider ConnectionProvider) Producer {
	maxLength := 10
	redisConnection := connectionProvider.Get("redis").(*RedisConnection)
	return NewRedisProducer(key, redisConnection, int64(maxLength))
}
