package qmq

type WebClientHandlerFactory interface {
	Create() WebClientHandler
}
