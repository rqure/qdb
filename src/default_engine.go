package qmq

import (
	"log"
	"sync"
)

type DefaultEngine struct {
	transformerProvider TransformerProvider
	connectionProvider  ConnectionProvider
	producers           map[string]Producer
	consumers           map[string]Consumer
	logger              Logger
	config              DefaultEngineConfig

	consumerMutex sync.Mutex
	producerMutex sync.Mutex
}

type DefaultEngineConfig struct {
	NameProvider               NameProvider
	TransformerProviderFactory TransformerProviderFactory
	ConnectionProviderFactory  ConnectionProviderFactory
	ConsumerFactory            ConsumerFactory
	ProducerFactory            ProducerFactory
	LoggerFactory              LoggerFactory
	EngineProcessor            EngineProcessor
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

	if config.TransformerProviderFactory == nil {
		config.TransformerProviderFactory = &DefaultTransformerProviderFactory{}
	}

	e := &DefaultEngine{
		producers: make(map[string]Producer),
		consumers: make(map[string]Consumer),
		config:    config,
	}

	e.connectionProvider = config.ConnectionProviderFactory.Create()

	return e
}

func (e *DefaultEngine) Initialize() {
	e.connectionProvider.ForEach(func(key string, connection Connection) {
		err := connection.Connect()

		if err != nil {
			log.Fatalf("'%s' failed to connect: %v", key, err)
		}
	})

	e.logger = e.config.LoggerFactory.Create(e)
	e.transformerProvider = e.config.TransformerProviderFactory.Create(e)

	e.logger.Advise("Application has started")
}

func (e *DefaultEngine) Deinitialize() {
	for key, producer := range e.producers {
		e.logger.Trace("Closing producer: " + key)
		producer.Close()
	}

	for key, consumer := range e.consumers {
		e.logger.Trace("Closing consumer: " + key)
		consumer.Close()
	}

	e.logger.Advise("Application has stopped")
	e.logger.Close()

	e.connectionProvider.ForEach(func(key string, connection Connection) {
		connection.Disconnect()
	})
}

func (e *DefaultEngine) WithProducer(key string) Producer {
	e.producerMutex.Lock()
	defer e.producerMutex.Unlock()

	if e.producers[key] == nil {
		e.producers[key] = e.config.ProducerFactory.Create(key, e)
	}

	return e.producers[key]
}

func (e *DefaultEngine) WithConsumer(key string) Consumer {
	e.consumerMutex.Lock()
	defer e.consumerMutex.Unlock()

	if e.consumers[key] == nil {
		e.consumers[key] = e.config.ConsumerFactory.Create(key, e)
	}

	return e.consumers[key]
}

func (e *DefaultEngine) WithLogger() Logger {
	return e.logger
}

func (e *DefaultEngine) WithConnectionProvider() ConnectionProvider {
	return e.connectionProvider
}

func (e *DefaultEngine) WithTransformerProvider() TransformerProvider {
	return e.transformerProvider
}

func (e *DefaultEngine) WithNameProvider() NameProvider {
	return e.config.NameProvider
}

func (e *DefaultEngine) Run() {
	e.Initialize()
	defer e.Deinitialize()

	e.config.EngineProcessor.Process(e)
}
