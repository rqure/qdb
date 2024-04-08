package qmq

import (
	"fmt"

	"google.golang.org/protobuf/proto"
)

type MessageToBytesTransformer struct {
	logger Logger
}

func NewMessageToBytesTransformer(logger Logger) Transformer {
	return &MessageToBytesTransformer{logger: logger}
}

func (t *MessageToBytesTransformer) Transform(i interface{}) interface{} {
	m, ok := i.(*Message)
	if !ok {
		t.logger.Error(fmt.Sprintf("MessageToBytesTransformer.Transform: invalid input type: %T", i))
		return nil
	}

	b, err := proto.Marshal(m)
	if err != nil {
		t.logger.Error(fmt.Sprintf("MessageToBytesTransformer.Transform: error marshalling into bytes: %v", err))
		return nil
	}

	return b
}
