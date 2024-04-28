package qmq

type DestinationProvider interface {
	Get() string
}
