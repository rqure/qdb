package qmq

type DefaultWebServiceFactory struct{}

func NewDefaultWebServiceFactory() WebServiceFactory {
	return &DefaultWebServiceFactory{}
}

func (f *DefaultWebServiceFactory) Create(schema Schema, componentProvider EngineComponentProvider) WebService {
	return NewDefaultWebService(&DefaultWebServiceConfig{
		Schema:               schema,
		Logger:               componentProvider.WithLogger(),
		RequestTransformers:  []Transformer{},
		ResponseTransformers: []Transformer{},
	})
}
