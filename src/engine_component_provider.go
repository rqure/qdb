package qmq

type EngineComponentProvider interface {
	WithNameProvider() NameProvider
	WithTransformerProvider() TransformerProvider
	WithConnectionProvider() ConnectionProvider
	WithProducer(key string) Producer
	WithConsumer(key string) Consumer
	WithLogger() Logger
}
