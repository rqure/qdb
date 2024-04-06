package qmq

type EngineComponentProvider interface {
	WithConnectionProvider() ConnectionProvider
	WithProducer(key string) Producer
	WithConsumer(key string) Consumer
	WithLogger() Logger
}
