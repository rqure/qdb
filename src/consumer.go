package qmq

type Consumer interface {
	Pop() chan Consumable
	Close()
}
