package qmq

type DefaultConsumerFactory struct{}

func (a *DefaultConsumerFactory) Create(key string, connectionProvider ConnectionProvider) Consumer {
	redisConnection := connectionProvider.Get("redis").(*RedisConnection)
	return NewRedisConsumer(key, redisConnection)
}
