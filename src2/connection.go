package qmq

import "google.golang.org/protobuf/proto"

type IConnection interface {
	Connect()
	Disconnect()

	WriteMessage(*Message)
	ReadMessage() *Message

	Set(string, proto.Message) error
	TempSet()
	Unset()
	Copy()
	Get()
}

type Connection struct {
	Connected    Signal
	Disconnected Signal
	NewMessage   Signal
	WriteSuccess Signal
	ReadSuccess  Signal
	WriteFail    Signal
	ReadFail     Signal
	GetSuccess   Signal
	GetFail      Signal
}
