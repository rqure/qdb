package qmq

import (
	"fmt"

	"google.golang.org/protobuf/proto"
)

type BytesToMessageTransformer struct {
	logger Logger
}

func NewBytesToMessageTransformer(logger Logger) Transformer {
	return &BytesToMessageTransformer{
		logger: logger,
	}
}

func (t *BytesToMessageTransformer) Transform(i interface{}) interface{} {
	b, ok := i.([]byte)
	if !ok {
		t.logger.Error("BytesToMessageTransformer.Transform: invalid input type %T", i)
		return nil
	}

	m := new(Message)
	if err := proto.Unmarshal(b, m); err != nil {
		t.logger.Error(fmt.Sprintf("BytesToMessageTransformer.Transform: error unmarshalling bytes into message: %v", err))
		return nil
	}

	return m
}
