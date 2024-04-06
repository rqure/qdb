package qmq

type DefaultConsumerFactory struct{}

func (a *DefaultConsumerFactory) Create(key string, components EngineComponentProvider) Consumer {
	redisConnection := components.WithConnectionProvider().Get("redis").(*RedisConnection)
	return NewRedisConsumer(key, redisConnection)
}
