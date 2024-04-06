package qmq

type DefaultConnectionProviderFactory struct{}

func (f *DefaultConnectionProviderFactory) Create() ConnectionProvider {
	connectionProvider := NewDefaultConnectionProvider()
	connectionProvider.Set("redis", NewRedisConnection(&DefaultRedisConnectionDetailsProvider{}))
	return connectionProvider
}
