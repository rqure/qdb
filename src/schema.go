package qmq

import "google.golang.org/protobuf/proto"

type Schema interface {
	Get(key string) proto.Message
	Set(key string, value proto.Message)
}
