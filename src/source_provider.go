package qmq

type SourceProvider interface {
	Get() string
}
