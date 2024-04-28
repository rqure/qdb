package qmq

type Logger interface {
	Trace(message string, args ...interface{})
	Debug(message string, args ...interface{})
	Advise(message string, args ...interface{})
	Warn(message string, args ...interface{})
	Error(message string, args ...interface{})
	Panic(message string, args ...interface{})

	Close()
}
