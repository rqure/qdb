package qmq

type WebService interface {
	Start(componentProvider EngineComponentProvider)
	WithComponentProvider() WebServiceComponentProvider
}
