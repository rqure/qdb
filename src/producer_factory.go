package qmq

type ProducerFactory interface {
	Create(key string, components EngineComponentProvider) Producer
}
