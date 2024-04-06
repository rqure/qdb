package qmq

type LoggerFactory interface {
	Make(nameProvider NameProvider, connectionProvider ConnectionProvider) Logger
}
