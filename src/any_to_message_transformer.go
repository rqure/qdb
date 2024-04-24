package qmq

import anypb "google.golang.org/protobuf/types/known/anypb"

type AnyToMessageTransformer struct {
	l Logger
	np    NameProvider
}

func NewAnyToMessageTransformer(l Logger, np NameProvider) Transformer {
	return &AnyToMessageTransformer{l: l, np: np}
}

func (t *AnyToMessageTransformer) Transform(i interface{}) interface{} {
	content, ok := i.(*anypb.Any)
	if !ok {
		t.logger.Error("AnyToMessageTransformer.Transform: invalid input type")
		return nil
	}

	return &Message{Header: Content: content}
}
