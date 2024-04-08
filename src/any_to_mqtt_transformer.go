package qmq

import (
	"fmt"

	"google.golang.org/protobuf/types/known/anypb"
)

type AnyToMqttTransformer struct {
	logger Logger
}

func NewAnyToMqttTransformer(logger Logger) Transformer {
	return &AnyToMqttTransformer{
		logger: logger,
	}
}

func (t *AnyToMqttTransformer) Transform(i interface{}) interface{} {
	a, ok := i.(*anypb.Any)
	if !ok {
		t.logger.Error(fmt.Sprintf("AnyToMqttTransformer.Transform: invalid input type %T", i))
		return nil
	}

	m := new(MqttMessage)
	err := a.UnmarshalTo(m)
	if err != nil {
		t.logger.Error(fmt.Sprintf("AnyToMqttTransformer.Transform: failed to unmarshal anypb.Any to MqttMessage: %v", err))
		return nil
	}

	return m
}
