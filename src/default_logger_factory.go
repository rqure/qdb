package qmq

import (
	"os"
	"strconv"
)

type DefaultLoggerFactory struct{}

func (a *DefaultLoggerFactory) Make(nameProvider NameProvider, connectionProvider ConnectionProvider) Logger {
	logLength, err := strconv.Atoi(os.Getenv("_LOG_LENGTH"))
	if err != nil {
		logLength = 100
	}

	logLevel, err := strconv.Atoi(os.Getenv("_LOG_LEVEL"))
	if err != nil {
		logLevel = 1
	}

	name := nameProvider.Name()
	redisConnection := connectionProvider.Get("redis").(*RedisConnection)
	return NewRedisLogger(name, redisConnection, logLength, int64(logLevel))
}
