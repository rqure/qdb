package qmq

import (
	reflect "reflect"

	"google.golang.org/protobuf/proto"
)

type RedisSchema struct {
	db *RedisConnection
	kv map[string]proto.Message
}

func NewRedisSchema(conn *RedisConnection, kv map[string]proto.Message) Schema {
	s := &RedisSchema{
		db: conn,
		kv: kv,
	}

	s.Initialize()

	return s
}

func (s *RedisSchema) Get(key string) proto.Message {
	v := s.kv[key]

	if v != nil {
		s.db.GetValue(key, v)
	}

	return v
}

func (s *RedisSchema) Set(key string, value proto.Message) {
	v := s.kv[key]
	if v != nil && reflect.TypeOf(v) != reflect.TypeOf(value) {
		return
	}

	s.kv[key] = value
	s.db.SetValue(key, value)
}

func (s *RedisSchema) Initialize() {
	for key := range s.kv {
		s.Get(key)
	}

	for key := range s.kv {
		s.Set(key, s.kv[key])
	}
}
