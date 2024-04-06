package qmq

type DefaultTransformerProviderFactory struct{}

func (f *DefaultTransformerProviderFactory) Create() TransformerProvider {
	transformerProvider := NewDefaultTransformerProvider()
	transformerProvider.Set("default", []Transformer{&DefaultTransformer{}})
	return transformerProvider
}
