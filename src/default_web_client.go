package qmq

import (
	"fmt"
	sync "sync"
	"sync/atomic"

	"github.com/gorilla/websocket"
)

var defaultWebClientIdCounter uint64

type DefaultWebClientConfig struct {
	Connection                  *websocket.Conn
	WebServiceComponentProvider WebServiceComponentProvider
	OnClose                     func(uint64)
	RequestTransformers         []Transformer
	ResponseTransformers        []Transformer
}

type DefaultWebClient struct {
	clientId uint64
	readCh   chan interface{}
	writeCh  chan interface{}
	wg       sync.WaitGroup
	config   *DefaultWebClientConfig
}

func NewDefaultWebClient(config *DefaultWebClientConfig) *DefaultWebClient {
	if config.RequestTransformers == nil {
		config.RequestTransformers = []Transformer{}
	}

	if config.ResponseTransformers == nil {
		config.ResponseTransformers = []Transformer{}
	}

	if config.OnClose == nil {
		config.OnClose = func(uint64) {}
	}

	newClientId := atomic.AddUint64(&defaultWebClientIdCounter, 1)

	w := &DefaultWebClient{
		clientId: newClientId,
		readCh:   make(chan interface{}),
		writeCh:  make(chan interface{}),
		config:   config,
	}

	w.config.WebServiceComponentProvider.WithLogger().Trace(fmt.Sprintf("WebSocket [%d] connected", w.clientId))

	go w.DoPendingWrites()
	go w.DoPendingReads()

	return w
}

func (w *DefaultWebClient) Read() chan interface{} {
	return w.readCh
}

func (w *DefaultWebClient) Write(v interface{}) {
	w.writeCh <- v
}

func (w *DefaultWebClient) Close() {
	close(w.writeCh)
	close(w.readCh)

	w.config.Connection.Close()

	w.wg.Wait()

	w.config.OnClose(w.clientId)
	w.config.WebServiceComponentProvider.WithLogger().Trace(fmt.Sprintf("WebSocket [%d] disconnected", w.clientId))
}

func (w *DefaultWebClient) DoPendingReads() {
	defer w.Close()

	w.wg.Add(1)
	defer w.wg.Done()

	w.config.WebServiceComponentProvider.WithLogger().Trace(fmt.Sprintf("WebSocket [%d] is listening for pending reads", w.clientId))
	defer w.config.WebServiceComponentProvider.WithLogger().Trace(fmt.Sprintf("WebSocket [%d] is no longer listening for pending reads", w.clientId))

	for {
		messageType, p, err := w.config.Connection.ReadMessage()

		if err != nil {
			w.config.WebServiceComponentProvider.WithLogger().Error(fmt.Sprintf("WebSocket [%d] error reading message: %v", w.clientId, err))
			break
		}

		if messageType == websocket.BinaryMessage {
			var i interface{} = p
			for _, transformer := range w.config.RequestTransformers {
				i = transformer.Transform(i)

				if i == nil {
					break
				}
			}

			if i == nil {
				continue
			}

			w.readCh <- i
		} else if messageType == websocket.CloseMessage {
			break
		}
	}
}

func (w *DefaultWebClient) DoPendingWrites() {
	w.wg.Add(1)
	defer w.wg.Done()

	w.config.WebServiceComponentProvider.WithLogger().Trace(fmt.Sprintf("WebSocket [%d] is listening for pending writes", w.clientId))
	defer w.config.WebServiceComponentProvider.WithLogger().Trace(fmt.Sprintf("WebSocket [%d] is no longer listening for pending writes", w.clientId))

	for i := range w.writeCh {
		for _, transformer := range w.config.ResponseTransformers {
			i = transformer.Transform(i)

			if i == nil {
				break
			}
		}

		if i == nil {
			continue
		}

		b, ok := i.([]byte)
		if !ok {
			w.config.WebServiceComponentProvider.WithLogger().Error(fmt.Sprintf("WebSocket [%d] error marshalling message into bytes", w.clientId))
			continue
		}

		if err := w.config.Connection.WriteMessage(websocket.BinaryMessage, b); err != nil {
			w.config.WebServiceComponentProvider.WithLogger().Error(fmt.Sprintf("WebSocket [%d] error sending message: %v", w.clientId, err))
		}
	}
}
