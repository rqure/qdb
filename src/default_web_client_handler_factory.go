package qmq

type DefaultWebClientHandlerFactory struct{}

func NewDefaultWebClientHandlerFactory() WebClientHandlerFactory {
	return &DefaultWebClientHandlerFactory{}
}

func (f *DefaultWebClientHandlerFactory) Create() WebClientHandler {
	return NewDefaultWebClientHandler()
}
