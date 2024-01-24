package qmq

import (
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

func (l *QMQLogger) Initialize(length int64) {
	l.consumer.Initialize()
	l.consumer.ResetLastId()

	l.producer.Initialize(length)
}

func (l *QMQLogger) Log(level QMQLogLevelEnum, message string) {
	logMsg := &QMQLog{
		Level:       level,
		Message:     message,
		Timestamp:   timestamppb.Now(),
		Application: l.appName,
	}

	log.Printf("%s | %s | %s | %s", logMsg.Application, logMsg.Timestamp.AsTime().String(), logMsg.Level.String(), logMsg.Message)
	l.producer.Push(logMsg)
}

func (l *QMQLogger) Trace(message string) {
	l.Log(QMQLogLevelEnum_LOG_LEVEL_TRACE, message)
}

func (l *QMQLogger) Debug(message string) {
	l.Log(QMQLogLevelEnum_LOG_LEVEL_DEBUG, message)
}

func (l *QMQLogger) Advise(message string) {
	l.Log(QMQLogLevelEnum_LOG_LEVEL_ADVISE, message)
}

func (l *QMQLogger) Warn(message string) {
	l.Log(QMQLogLevelEnum_LOG_LEVEL_WARN, message)
}

func (l *QMQLogger) Error(message string) {
	l.Log(QMQLogLevelEnum_LOG_LEVEL_ERROR, message)
}

func (l *QMQLogger) Panic(message string) {
	l.Log(QMQLogLevelEnum_LOG_LEVEL_PANIC, message)
}
