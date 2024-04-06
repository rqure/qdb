package qmq

import (
	"fmt"
	"strings"

	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
)

type RedisLogger struct {
	name     string
	producer Producer
	logLevel int
}

func NewRedisLogger(name string, connection *RedisConnection, logLevel int, maxLength int64) Logger {
	return &RedisLogger{
		name:     name,
		producer: NewRedisProducer(name+":logs", connection, maxLength),
		logLevel: logLevel,
	}
}

func (l *RedisLogger) Log(level LogLevelEnum, message string) {
	if int(level) < l.logLevel {
		return
	}

	logMsg := &Log{
		Level:       level,
		Message:     message,
		Timestamp:   timestamppb.Now(),
		Application: l.name,
	}

	fmt.Printf("%s | %s | %s | %s\n", logMsg.Timestamp.AsTime().String(), logMsg.Application, strings.Replace(logMsg.Level.String(), "LOG_LEVEL_", "", -1), logMsg.Message)
	l.producer.Push(logMsg)
}

func (l *RedisLogger) Trace(message string) {
	l.Log(LogLevelEnum_LOG_LEVEL_TRACE, message)
}

func (l *RedisLogger) Debug(message string) {
	l.Log(LogLevelEnum_LOG_LEVEL_DEBUG, message)
}

func (l *RedisLogger) Advise(message string) {
	l.Log(LogLevelEnum_LOG_LEVEL_ADVISE, message)
}

func (l *RedisLogger) Warn(message string) {
	l.Log(LogLevelEnum_LOG_LEVEL_WARN, message)
}

func (l *RedisLogger) Error(message string) {
	l.Log(LogLevelEnum_LOG_LEVEL_ERROR, message)
}

func (l *RedisLogger) Panic(message string) {
	l.Log(LogLevelEnum_LOG_LEVEL_PANIC, message)
}
