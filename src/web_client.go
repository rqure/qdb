package qmq

import (
	"fmt"
	sync "sync"
	"sync/atomic"

	"github.com/gorilla/websocket"
	"google.golang.org/protobuf/proto"
	anypb "google.golang.org/protobuf/types/known/anypb"
)

var webClientIdCounter uint64

type WebClient struct {
	clientId          uint64
	readCh            chan *Message
	writeCh           chan *Message
	conn              *websocket.Conn
	wg                sync.WaitGroup
	onClose           func(uint64)
	componentProvider WebServiceComponentProvider
}

func NewWebClient(conn *websocket.Conn, components WebServiceComponentProvider, onClose func(uint64)) *WebClient {
	newClientId := atomic.AddUint64(&webClientIdCounter, 1)

	w := &WebClient{
		clientId:          newClientId,
		readCh:            make(chan *Message),
		writeCh:           make(chan *Message),
		conn:              conn,
		componentProvider: components,
		onClose:           onClose,
	}

	components.WithLogger().Trace(fmt.Sprintf("WebSocket [%d] connected", w.clientId))

	go w.DoPendingWrites()
	go w.DoPendingReads()

	return w
}

func (w *WebClient) Read() chan *Message {
	return w.readCh
}

func (w *WebClient) Write(v proto.Message) {
	content, err := anypb.New(v)

	if err != nil {
		w.componentProvider.WithLogger().Error(fmt.Sprintf("Failed to marshal message before send: %v", err))
		return
	}

	message := new(Message)
	message.Content = content
	w.writeCh <- message
}

func (w *WebClient) Close() {
	close(w.writeCh)
	close(w.readCh)

	w.conn.Close()

	w.wg.Wait()

	if w.onClose != nil {
		w.onClose(w.clientId)
	}

	w.componentProvider.WithLogger().Trace(fmt.Sprintf("WebSocket [%d] disconnected", w.clientId))
}

func (w *WebClient) DoPendingReads() {
	defer w.Close()

	w.wg.Add(1)
	defer w.wg.Done()

	w.componentProvider.WithLogger().Trace(fmt.Sprintf("WebSocket [%d] is listening for pending reads", w.clientId))
	defer w.componentProvider.WithLogger().Trace(fmt.Sprintf("WebSocket [%d] is no longer listening for pending reads", w.clientId))

	for {
		messageType, p, err := w.conn.ReadMessage()

		if err != nil {
			w.componentProvider.WithLogger().Error(fmt.Sprintf("WebSocket [%d] error reading message: %v", w.clientId, err))
			break
		}

		if messageType == websocket.BinaryMessage {
			request := new(Message)

			if err := proto.Unmarshal(p, request); err != nil {
				w.componentProvider.WithLogger().Trace(fmt.Sprintf("WebSocket [%d] received invalid message: %v", w.clientId, request))
				continue
			}

			w.componentProvider.WithLogger().Trace(fmt.Sprintf("WebSocket [%d] received message: %v", w.clientId, request))
			w.readCh <- request
		} else if messageType == websocket.CloseMessage {
			break
		}
	}
}

func (w *WebClient) DoPendingWrites() {
	w.wg.Add(1)
	defer w.wg.Done()

	w.componentProvider.WithLogger().Trace(fmt.Sprintf("WebSocket [%d] is listening for pending writes", w.clientId))
	defer w.componentProvider.WithLogger().Trace(fmt.Sprintf("WebSocket [%d] is no longer listening for pending writes", w.clientId))

	for v := range w.writeCh {
		w.componentProvider.WithLogger().Trace(fmt.Sprintf("WebSocket [%d] sending message: %v", w.clientId, v))

		b, err := proto.Marshal(v)
		if err != nil {
			w.componentProvider.WithLogger().Error(fmt.Sprintf("WebSocket [%d] error marshalling message: %v", w.clientId, err))
			continue
		}

		if err := w.conn.WriteMessage(websocket.BinaryMessage, b); err != nil {
			w.componentProvider.WithLogger().Error(fmt.Sprintf("WebSocket [%d] error sending message: %v", w.clientId, err))
		}
	}
}
