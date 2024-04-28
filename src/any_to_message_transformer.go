package qmq

import (
	"fmt"

	anypb "google.golang.org/protobuf/types/known/anypb"
)

type AnyToMessageTransformer struct {
	logger Logger
	Config AnyToMessageTransformerConfig
}

type AnyToMessageTransformerConfig struct {
	MessageIdGenerator  MessageIdGenerator
	SourceProvider      SourceProvider
	DestinationProvider DestinationProvider
	SubjectProvider     SubjectProvider
}

func NewAnyToMessageTransformer(l Logger, c AnyToMessageTransformerConfig) Transformer {
	if c.MessageIdGenerator == nil {
		c.MessageIdGenerator = NewDefaultMessageIdGenerator()
	}

	if c.SourceProvider == nil {
		c.SourceProvider = NewDefaultSourceProvider("*")
	}

	if c.DestinationProvider == nil {
		c.DestinationProvider = NewDefaultDestinationProvider("*")
	}

	if c.SubjectProvider == nil {
		c.SubjectProvider = NewDefaultSubjectProvider()
	}

	return &AnyToMessageTransformer{
		logger: l,
		Config: c,
	}
}

func (t *AnyToMessageTransformer) Transform(i interface{}) interface{} {
	content, ok := i.(*anypb.Any)
	if !ok {
		t.logger.Error(fmt.Sprintf("AnyToMessageTransformer.Transform: invalid input type %T", i))
		return nil
	}

	return &Message{
		Header: &Header{
			Id:          t.Config.MessageIdGenerator.Generate(),
			Source:      t.Config.SourceProvider.Get(),
			Destination: t.Config.DestinationProvider.Get(),
			Subject:     t.Config.SubjectProvider.Get(content),
		},
		Content: content,
	}
}
