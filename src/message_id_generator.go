package qmq

type MessageIdGenerator interface {
	Generate() string
}
