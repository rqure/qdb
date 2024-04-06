package qmq

import (
	"google.golang.org/protobuf/proto"
)

type Consumable interface {
	Ack()
	Nack()
	Data() proto.Message
}

type Consumer interface {
	Pop() Consumable
}
