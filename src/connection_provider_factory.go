package qmq

type ConnectionProviderFactory interface {
	Make() ConnectionProvider
}
