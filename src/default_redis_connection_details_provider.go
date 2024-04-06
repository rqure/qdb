package qmq

import "os"

type DefaultRedisConnectionDetailsProvider struct{}

func (a *DefaultRedisConnectionDetailsProvider) Address() string {
	addr := os.Getenv("_ADDR")
	if addr == "" {
		addr = "redis:6379"
	}
	return addr
}

func (a *DefaultRedisConnectionDetailsProvider) Password() string {
	return os.Getenv("_PASSWORD")
}
