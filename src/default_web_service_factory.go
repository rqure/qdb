package qmq

type DefaultWebServiceFactory struct{}

func NewDefaultWebServiceFactory() WebServiceFactory {
	return &DefaultWebServiceFactory{}
}

func (f *DefaultWebServiceFactory) Create(schema Schema, componentProvider EngineComponentProvider) WebService {
	return NewDefaultWebService(&DefaultWebServiceConfig{
		Schema: schema,
		Logger: componentProvider.WithLogger(),
		RequestTransformers: []Transformer{
			NewBytesToMessageTransformer(componentProvider.WithLogger()),
		},
		ResponseTransformers: []Transformer{
			NewProtoToAnyTransformer(componentProvider.WithLogger()),
			NewAnyToMessageTransformer(componentProvider.WithLogger()),
			NewMessageToBytesTransformer(componentProvider.WithLogger()),
		},
	})
}
