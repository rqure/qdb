package qmq

type WebClientHandler interface {
	Handle(client WebClient, componentProvider WebServiceComponentProvider)
}
