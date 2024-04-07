package qmq

type WebServiceComponentProvider interface {
	WithLogger() Logger
	WithSchema() Schema
	WithWebClientNotifier() WebClientNotifier
}
