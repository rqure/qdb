package qmq

type Logger interface {
	Trace(message string)
	Debug(message string)
	Advise(message string)
	Warn(message string)
	Error(message string)
	Panic(message string)

	Close()
}
