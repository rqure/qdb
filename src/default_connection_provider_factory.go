package qmq

type DefaultConnectionProviderFactory struct{}

func (f *DefaultConnectionProviderFactory) Make() ConnectionProvider {
	connectionProvider := NewDefaultConnectionProvider()
	connectionProvider.Set("redis", NewRedisConnection(&DefaultRedisConnectionDetailsProvider{}))
	return connectionProvider
}
