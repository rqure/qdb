package qmq

type Connection interface {
	Connect() error
	Disconnect()
}
