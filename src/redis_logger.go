package qmq

import (
	"fmt"

	"github.com/google/uuid"
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

func (l *RedisLogger) Log(level Log_LogLevelEnum, message string) {
	if int(level) < l.logLevel {
		return
	}

	logMsg := &Log{
		Level:       level,
		Message:     message,
		Timestamp:   timestamppb.Now(),
		Application: l.name,
	}

	fmt.Printf("%s | %s | %s | %s\n", logMsg.Timestamp.AsTime().String(), logMsg.Application, logMsg.Level.String(), logMsg.Message)

	content, _ := anypb.New(logMsg)
	l.producer.Push(&Message{
		Header: &Header{
			Id:      uuid.New().String(),
			From:    l.name,
			To:      l.name + ":logs",
			Subject: content.TypeUrl,
		},
		Content: content,
	})
}

func (l *RedisLogger) Trace(message string) {
	l.Log(Log_TRACE, message)
}

func (l *RedisLogger) Debug(message string) {
	l.Log(Log_DEBUG, message)
}

func (l *RedisLogger) Advise(message string) {
	l.Log(Log_ADVISE, message)
}

func (l *RedisLogger) Warn(message string) {
	l.Log(Log_WARN, message)
}

func (l *RedisLogger) Error(message string) {
	l.Log(Log_ERROR, message)
}

func (l *RedisLogger) Panic(message string) {
	l.Log(Log_PANIC, message)
	panic(message)
}

func (l *RedisLogger) Close() {
	l.producer.Close()
}
