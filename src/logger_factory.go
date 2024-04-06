package qmq

type LoggerFactory interface {
	Create(nameProvider NameProvider, connectionProvider ConnectionProvider) Logger
}
