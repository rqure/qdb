package qmq

import "google.golang.org/protobuf/proto"

type Schema interface {
	Get(key string) proto.Message
	GetFull(key string) (proto.Message, *SchemaData)
	Set(key string, value proto.Message)
	Ch() chan string
}
