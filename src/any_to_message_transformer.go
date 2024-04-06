package qmq

import anypb "google.golang.org/protobuf/types/known/anypb"

type AnyToMessageTransformer struct {
	logger Logger
}

func NewAnyToMessageTransformer(logger Logger) Transformer {
	return &AnyToMessageTransformer{logger: logger}
}

func (t *AnyToMessageTransformer) Transform(i interface{}) interface{} {
	content, ok := i.(*anypb.Any)
	if !ok {
		t.logger.Error("AnyToMessageTransformer.Transform: invalid input type")
		return nil
	}

	return &Message{Content: content}
}
