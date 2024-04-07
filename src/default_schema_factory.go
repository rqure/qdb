package qmq

import "google.golang.org/protobuf/proto"

type DefaultSchemaFactory struct{}

func NewDefaultSchemaFactory() SchemaFactory {
	return &DefaultSchemaFactory{}
}

func (s *DefaultSchemaFactory) Create(components EngineComponentProvider, kv map[string]proto.Message) Schema {
	redisConnection := components.WithConnectionProvider().Get("redis").(*RedisConnection)

	return NewRedisSchema(redisConnection, kv)
}
