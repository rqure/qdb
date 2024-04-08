package qmq

import (
	"google.golang.org/protobuf/proto"
)

type RedisSchema struct {
	db *RedisConnection
	kv map[string]proto.Message
	ch chan string
}

func NewRedisSchema(conn *RedisConnection, kv map[string]proto.Message) Schema {
	s := &RedisSchema{
		db: conn,
		kv: kv,
		ch: make(chan string),
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
	s.kv[key] = value
	s.db.SetValue(key, value)
	s.ch <- key
}

func (s *RedisSchema) SetNoNotify(key string, value proto.Message) {
	s.kv[key] = value
	s.db.SetValue(key, value)
}

func (s *RedisSchema) Ch() chan string {
	return s.ch
}

func (s *RedisSchema) Initialize() {
	for key := range s.kv {
		s.Get(key)
	}

	for key := range s.kv {
		s.SetNoNotify(key, s.kv[key])
	}
}
