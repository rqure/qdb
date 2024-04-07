package qmq

import "google.golang.org/protobuf/proto"

type SchemaFactory interface {
	Create(components EngineComponentProvider, kv map[string]proto.Message) Schema
}
