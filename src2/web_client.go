package qmq

import (
	"github.com/google/uuid"
	"github.com/gorilla/websocket"
	"google.golang.org/protobuf/proto"
)

type IWebClient interface {
	Id() string
	Read() *WebMessage
	Write(message *WebMessage)
	Close()
}

type WebClient struct {
	id         string
	connection *websocket.Conn
}

func NewWebClient(connection *websocket.Conn) *WebClient {
	return &WebClient{
		id:         uuid.New().String(),
		connection: connection,
	}
}

func (c *WebClient) Id() string {
	return c.id
}

func (c *WebClient) Read() *WebMessage {
	t, b, err := c.connection.ReadMessage()

	if err != nil {
		Error("[WebClient::Read] Error reading message: %v", err)
		return nil
	}

	if t == websocket.BinaryMessage {
		m := new(WebMessage)
		if err := proto.Unmarshal(b, m); err != nil {
			Error("[WebClient::Read] Error unmarshalling bytes into message: %v", err)
			return nil
		}

		Debug("[WebClient::Read] Received message: %v", m)
		return m
	}

	return nil
}

func (c *WebClient) Write(message *WebMessage) {
	b, err := proto.Marshal(message)

	if err != nil {
		Error("[WebClient::Write] Error marshalling message: %v", err)
		return
	}

	if err := c.connection.WriteMessage(websocket.BinaryMessage, b); err != nil {
		Error("[WebClient::Write] Error writing message: %v", err)
	}
}

func (c *WebClient) Close() {
	if err := c.connection.Close(); err != nil {
		Error("[WebClient::Close] Error closing connection: %v", err)
	}
}
