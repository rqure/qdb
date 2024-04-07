package qmq

type Producer interface {
	Push(i interface{})
	Close()
}
