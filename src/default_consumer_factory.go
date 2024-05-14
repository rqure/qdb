package qmq

type DefaultConsumerFactory struct{}

func (a *DefaultConsumerFactory) Create(key string, components EngineComponentProvider) Consumer {
	redisConnection := components.WithConnectionProvider().Get("redis").(*RedisConnection)
	transformerKey := "consumer:" + key
	return NewRedisConsumer(redisConnection, &RedisConsumerConfig{
		Topic:        key,
		Transformers: components.WithTransformerProvider().Get(transformerKey),
	})
}
