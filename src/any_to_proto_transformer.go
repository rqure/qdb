package qmq

import (
	"fmt"

	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/types/known/anypb"
)

type AnyToProtoTransformer struct {
	logger Logger
	proto  proto.Message
}

func NewAnyToProtoTransformer(logger Logger, proto proto.Message) *AnyToProtoTransformer {
	return &AnyToProtoTransformer{logger: logger, proto: proto}
}

func (t *AnyToProtoTransformer) Transform(i interface{}) interface{} {
	a, ok := i.(*anypb.Any)
	if !ok {
		t.logger.Error(fmt.Sprintf("AnyToProtoTransformer.Transform: invalid input type %T", i))
		return nil
	}

	m := proto.Clone(t.proto)
	err := a.UnmarshalTo(m)
	if err != nil {
		t.logger.Error(fmt.Sprintf("AnyToProtoTransformer.Transform: failed to unmarshal: %v", err))
		return nil
	}

	return m
}
