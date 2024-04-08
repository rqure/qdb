package qmq

import (
	"fmt"

	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/types/known/anypb"
)

type ProtoToAnyTransformer struct {
	logger Logger
}

func NewProtoToAnyTransformer(logger Logger) Transformer {
	return &ProtoToAnyTransformer{
		logger: logger,
	}
}

func (t *ProtoToAnyTransformer) Transform(i interface{}) interface{} {
	p, ok := i.(proto.Message)
	if !ok {
		t.logger.Error(fmt.Sprintf("ProtoToAnyTransformer.Transform: invalid input type %T", i))
		return nil
	}

	a, err := anypb.New(p)
	if err != nil {
		t.logger.Error(fmt.Sprintf("ProtoToAnyTransformer.Transform: error marshalling proto message into any: %v", err))
		return nil
	}

	return a
}
