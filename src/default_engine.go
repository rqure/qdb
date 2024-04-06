package qmq

import (
	"log"
)

type DefaultEngine struct {
	connectionProvider ConnectionProvider
	producers          map[string]Producer
	consumers          map[string]Consumer
	logger             Logger
	config             DefaultEngineConfig
}

type DefaultEngineConfig struct {
	NameProvider              NameProvider
	ConnectionProviderFactory ConnectionProviderFactory
	ConsumerFactory           ConsumerFactory
	ProducerFactory           ProducerFactory
	LoggerFactory             LoggerFactory
	EngineProcessor           EngineProcessor
}

func NewDefaultEngine(config DefaultEngineConfig) Engine {
	if config.ConsumerFactory == nil {
		config.ConsumerFactory = &DefaultConsumerFactory{}
	}

	if config.ProducerFactory == nil {
		config.ProducerFactory = &DefaultProducerFactory{}
	}

	if config.LoggerFactory == nil {
		config.LoggerFactory = &DefaultLoggerFactory{}
	}

	if config.EngineProcessor == nil {
		config.EngineProcessor = &DefaultEngineProcessor{}
	}

	if config.ConnectionProviderFactory == nil {
		config.ConnectionProviderFactory = &DefaultConnectionProviderFactory{}
	}

	connectionProvider := config.ConnectionProviderFactory.Make()
	logger := config.LoggerFactory.Make(config.NameProvider, connectionProvider)

	return &DefaultEngine{
		connectionProvider: connectionProvider,
		logger:             logger,
		producers:          make(map[string]Producer),
		consumers:          make(map[string]Consumer),
		config:             config,
	}
}

func (e *DefaultEngine) Initialize() {
	e.connectionProvider.ForEach(func(key string, connection Connection) {
		err := connection.Connect()

		if err != nil {
			log.Fatalf("'%s' failed to connect: %v", key, err)
		}
	})

	e.logger.Advise("Application has started")
}

func (e *DefaultEngine) Deinitialize() {
	e.logger.Advise("Application has stopped")

	e.connectionProvider.ForEach(func(key string, connection Connection) {
		connection.Disconnect()
	})
}

func (e *DefaultEngine) WithProducer(key string) Producer {
	if e.producers[key] == nil {
		e.producers[key] = e.config.ProducerFactory.Make(key, e.connectionProvider)
	}

	return e.producers[key]
}

func (e *DefaultEngine) WithConsumer(key string) Consumer {
	if e.consumers[key] == nil {
		e.consumers[key] = e.config.ConsumerFactory.Make(key, e.connectionProvider)
	}

	return e.consumers[key]
}

func (e *DefaultEngine) WithLogger() Logger {
	return e.logger
}

func (e *DefaultEngine) WithConnectionProvider() ConnectionProvider {
	return e.connectionProvider
}

func (e *DefaultEngine) Run() {
	e.Initialize()
	defer e.Deinitialize()

	e.config.EngineProcessor.Process(e)
}
