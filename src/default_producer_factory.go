package qmq

type DefaultProducerFactory struct{}

func (a *DefaultProducerFactory) Create(key string, components EngineComponentProvider) Producer {
	maxLength := 10
	redisConnection := components.WithConnectionProvider().Get("redis").(*RedisConnection)
	transformerKey := "producer:" + key
	return NewRedisProducer(key, redisConnection, int64(maxLength), components.WithTransformerProvider().Get(transformerKey))
}
