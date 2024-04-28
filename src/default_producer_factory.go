package qmq

type DefaultProducerFactory struct{}

func (a *DefaultProducerFactory) Create(key string, components EngineComponentProvider) Producer {
	maxLength := 10
	redisConnection := components.WithConnectionProvider().Get("redis").(*RedisConnection)
	transformerKey := "producer:" + key
	return NewRedisProducer(redisConnection, &RedisProducerConfig{
		Topic:        key,
		Length:       int64(maxLength),
		Transformers: components.WithTransformerProvider().Get(transformerKey),
	})
}
