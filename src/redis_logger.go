package qmq

import (
	"fmt"

	"google.golang.org/protobuf/types/known/anypb"
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
		producer: NewRedisProducer(name+":logs", connection, maxLength, []Transformer{}),
		logLevel: logLevel,
	}
}

func (l *RedisLogger) Log(level Log_LogLevelEnum, message string, args ...interface{}) {
	if int(level) < l.logLevel {
		return
	}

	logMsg := &Log{
		Level:       level,
		Message:     fmt.Sprintf(message, args...),
		Timestamp:   timestamppb.Now(),
		Application: l.name,
	}

	fmt.Printf("%s | %s | %s | %s\n", logMsg.Timestamp.AsTime().String(), logMsg.Application, logMsg.Level.String(), logMsg.Message)

	content, _ := anypb.New(logMsg)
	l.producer.Push(&Message{
		Header: &Header{
			Id:          new(DefaultMessageIdGenerator).Generate(),
			Source:      l.name,
			Destination: l.name + ":logs",
			Subject:     content.TypeUrl,
		},
		Content: content,
	})
}

func (l *RedisLogger) Trace(message string, args ...interface{}) {
	l.Log(Log_TRACE, message, args...)
}

func (l *RedisLogger) Debug(message string, args ...interface{}) {
	l.Log(Log_DEBUG, message, args...)
}

func (l *RedisLogger) Advise(message string, args ...interface{}) {
	l.Log(Log_ADVISE, message, args...)
}

func (l *RedisLogger) Warn(message string, args ...interface{}) {
	l.Log(Log_WARN, message, args...)
}

func (l *RedisLogger) Error(message string, args ...interface{}) {
	l.Log(Log_ERROR, message, args...)
}

func (l *RedisLogger) Panic(message string, args ...interface{}) {
	l.Log(Log_PANIC, message, args...)
	panic(message)
}

func (l *RedisLogger) Close() {
	l.producer.Close()
}
