package qmq

import (
	"os"
	"strconv"
)

type DefaultLoggerFactory struct{}

func (a *DefaultLoggerFactory) Create(components EngineComponentProvider) Logger {
	logLength, err := strconv.Atoi(os.Getenv("QMQ_LOG_LENGTH"))
	if err != nil {
		logLength = 100
	}

	logLevel, err := strconv.Atoi(os.Getenv("QMQ_LOG_LEVEL"))
	if err != nil {
		logLevel = 2
	}

	name := components.WithNameProvider().Get()
	redisConnection := components.WithConnectionProvider().Get("redis").(*RedisConnection)
	return NewRedisLogger(name, redisConnection, logLevel, int64(logLength))
}
