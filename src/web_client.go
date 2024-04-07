package qmq

type WebClient interface {
	Read() chan interface{}
	Write(i interface{})
}
