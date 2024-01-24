package qmq

import (
	"context"
	"log"

	"google.golang.org/protobuf/types/known/timestamppb"
)

type QMQLogger struct {
	appName  string
	consumer *QMQConsumer
	producer *QMQProducer
}

func NewQMQLogger(appName string, conn *QMQConnection) *QMQLogger {
	return &QMQLogger{
		appName:  appName,
		consumer: NewQMQConsumer(appName+":logs", conn),
		producer: NewQMQProducer(appName+":logs", conn),
	}
}

func (l *QMQLogger) Initialize(ctx context.Context, length int64) {
	l.consumer.Initialize(ctx)
	l.consumer.ResetLastId(ctx)

	l.producer.Initialize(ctx, length)
}

func (l *QMQLogger) Log(ctx context.Context, level QMQLogLevelEnum, message string) {
	logMsg := &QMQLog{
		Level:       level,
		Message:     message,
		Timestamp:   timestamppb.Now(),
		Application: l.appName,
	}

	log.Printf("%s | %s | %s | %s", logMsg.Application, logMsg.Timestamp.AsTime().String(), logMsg.Level.String(), logMsg.Message)
	l.producer.Push(ctx, logMsg)
}

func (l *QMQLogger) Trace(ctx context.Context, message string) {
	l.Log(ctx, QMQLogLevelEnum_LOG_LEVEL_TRACE, message)
}

func (l *QMQLogger) Debug(ctx context.Context, message string) {
	l.Log(ctx, QMQLogLevelEnum_LOG_LEVEL_DEBUG, message)
}

func (l *QMQLogger) Advise(ctx context.Context, message string) {
	l.Log(ctx, QMQLogLevelEnum_LOG_LEVEL_ADVISE, message)
}

func (l *QMQLogger) Warn(ctx context.Context, message string) {
	l.Log(ctx, QMQLogLevelEnum_LOG_LEVEL_WARN, message)
}

func (l *QMQLogger) Error(ctx context.Context, message string) {
	l.Log(ctx, QMQLogLevelEnum_LOG_LEVEL_ERROR, message)
}

func (l *QMQLogger) Panic(ctx context.Context, message string) {
	l.Log(ctx, QMQLogLevelEnum_LOG_LEVEL_PANIC, message)
}
