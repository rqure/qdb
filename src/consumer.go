package qmq

type Consumable interface {
	Ack()
	Nack()
	Data() *Message
}

type Consumer interface {
	Pop() Consumable
}
