package qmq

type MessageToAnyTransformer struct {
	logger Logger
}

func NewMessageToAnyTransformer(logger Logger) Transformer {
	return &MessageToAnyTransformer{logger: logger}
}

func (t *MessageToAnyTransformer) Transform(i interface{}) interface{} {
	m, ok := i.(*Message)
	if !ok {
		t.logger.Error("MessageToAnyTransformer.Transform: invalid input type")
		return nil
	}

	return m.Content
}
