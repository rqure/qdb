package qmq

type ConnectionProviderFactory interface {
	Create() ConnectionProvider
}
