package qmq

type Producer interface {
	Push(m *Message)
}
