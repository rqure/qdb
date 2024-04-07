package qmq

type WebServiceFactory interface {
	Create(Schema, EngineComponentProvider) WebService
}
