package qmq

type TransformerProviderFactory interface {
	Create(components EngineComponentProvider) TransformerProvider
}
