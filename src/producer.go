package qmq

import "google.golang.org/protobuf/proto"

type Producer interface {
	Push(m proto.Message)
}
