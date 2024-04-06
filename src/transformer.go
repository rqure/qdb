package qmq

type Transformer interface {
	Transform(i interface{}) interface{}
}
