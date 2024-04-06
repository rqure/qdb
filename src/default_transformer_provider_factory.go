package qmq

type DefaultTransformerProviderFactory struct{}

func (f *DefaultTransformerProviderFactory) Create(components EngineComponentProvider) TransformerProvider {
	return NewDefaultTransformerProvider()
}
