package qmq

type EngineProcessor interface {
	Process(componentProvider EngineComponentProvider)
}
