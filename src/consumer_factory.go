package qmq

type ConsumerFactory interface {
	Create(key string, components EngineComponentProvider) Consumer
}
