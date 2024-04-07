package qmq

import (
	"google.golang.org/protobuf/proto"
)

type WebServiceEngineProcessorConfig struct {
	SchemaFactory             SchemaFactory
	WebServiceFactory         WebServiceFactory
	SchemaMapping             map[string]proto.Message
	WebServiceCustomProcessor WebServiceCustomProcessor
}

type WebServiceEngineProcessor struct {
	config     WebServiceEngineProcessorConfig
	webService WebService
}

func NewWebServiceEngineProcessor(config WebServiceEngineProcessorConfig) *WebServiceEngineProcessor {
	if config.SchemaFactory == nil {
		config.SchemaFactory = NewDefaultSchemaFactory()
	}

	if config.SchemaMapping == nil {
		config.SchemaMapping = make(map[string]proto.Message)
	}

	if config.WebServiceFactory == nil {
		config.WebServiceFactory = NewDefaultWebServiceFactory()
	}

	return &WebServiceEngineProcessor{config: config}
}

func (w *WebServiceEngineProcessor) Process(componentProvider EngineComponentProvider) {
	schema := w.config.SchemaFactory.Create(componentProvider, w.config.SchemaMapping)

	w.webService = w.config.WebServiceFactory.Create(schema, componentProvider)
	w.webService.Start(componentProvider)

	w.config.WebServiceCustomProcessor.Process(componentProvider, w.webService.WithComponentProvider())
}
