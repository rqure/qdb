package qmq

type WebClient interface {
	Id() string
	Read() chan interface{}
	Write(i interface{})
}
