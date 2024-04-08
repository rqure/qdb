package qmq

import (
	"fmt"

	"google.golang.org/protobuf/types/known/anypb"
)

type MqttToAnyTransformer struct {
	logger Logger
}

func NewMqttToAnyTransformer(logger Logger) Transformer {
	return &MqttToAnyTransformer{
		logger: logger,
	}
}

func (t *MqttToAnyTransformer) Transform(i interface{}) interface{} {
	m, ok := i.(*MqttMessage)
	if !ok {
		t.logger.Error(fmt.Sprintf("MqttToAnyTransformer.Transform: invalid input type %T", i))
		return nil
	}

	a, err := anypb.New(m)
	if err != nil {
		t.logger.Error(fmt.Sprintf("MqttToAnyTransformer.Transform: failed to marshal MqttMessage to anypb.Any: %v", err))
		return nil
	}

	return a
}
