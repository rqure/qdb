package qmq

import "fmt"

type MessageToAnyTransformer struct {
	logger Logger
}

func NewMessageToAnyTransformer(logger Logger) Transformer {
	return &MessageToAnyTransformer{logger: logger}
}

func (t *MessageToAnyTransformer) Transform(i interface{}) interface{} {
	m, ok := i.(*Message)
	if !ok {
		t.logger.Error(fmt.Sprintf("MessageToAnyTransformer.Transform: invalid input type %T", i))
		return nil
	}

	return m.Content
}
