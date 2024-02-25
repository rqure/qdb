package qmq

import (
	"os"
	"fmt"
	"strings"
	"strconv"
	"google.golang.org/protobuf/types/known/timestamppb"
)

type QMQLogger struct {
	appName  string
	producer *QMQProducer
	logLevel int
}

func NewQMQLogger(appName string, conn *QMQConnection) *QMQLogger {
	logLevel, err := strconv.Atoi(os.Getenv("QMQ_LOG_LEVEL"))
	if err != nil {
		logLevel = 1
	}
	
	return &QMQLogger{
		appName:  appName,
		producer: NewQMQProducer(appName+":logs", conn),
		logLevel: logLevel,
	}
}

func (l *QMQLogger) Initialize(length int64) {
	l.producer.Initialize(length)
}

func (l *QMQLogger) Log(level QMQLogLevelEnum, message string) {
	if int(level) < l.logLevel {
		return
	}
	
	logMsg := &QMQLog{
		Level:       level,
		Message:     message,
		Timestamp:   timestamppb.Now(),
		Application: l.appName,
	}

	fmt.Printf("%s | %s | %s | %s\n", logMsg.Timestamp.AsTime().String(), logMsg.Application, strings.Replace(logMsg.Level.String(), "LOG_LEVEL_", "", -1), logMsg.Message)
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
