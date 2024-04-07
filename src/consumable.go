package qmq

type Consumable interface {
	Ack()
	Nack()
	Data() interface{}
}
