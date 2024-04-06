package qmq

type LoggerFactory interface {
	Create(components EngineComponentProvider) Logger
}
