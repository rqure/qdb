package qmq

type DefaultTransformer struct{}

func (t *DefaultTransformer) Transform(i interface{}) interface{} {
	return i
}
