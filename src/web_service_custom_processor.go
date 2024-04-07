package qmq

type WebServiceCustomProcessor interface {
	Process(engineComponentProvider EngineComponentProvider, webServiceComponentProvider WebServiceComponentProvider)
}
