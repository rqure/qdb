package qmq

import (
	"time"

	"google.golang.org/protobuf/proto"
)

type IConnection interface {
	Connect()
	Disconnect()

	WriteMessage(*Message)
	ReadMessage() *Message

	Set(string, proto.Message) error
	TempSet(string, proto.Message, time.Duration)
	Expire(string, time.Duration)
	Unset(string)
	Copy(string, string)
	Get(string, proto.Message)
}

type Connection struct {
	Connected      Signal
	CopyFail       Signal
	CopySuccess    Signal
	Disconnected   Signal
	ExpireFail     Signal
	ExpireSuccess  Signal
	GetFail        Signal
	GetSuccess     Signal
	NewMessage     Signal
	ReadFail       Signal
	ReadSuccess    Signal
	SetFail        Signal
	SetSuccess     Signal
	TempSetFail    Signal
	TempSetSuccess Signal
	UnsetFail      Signal
	UnsetSuccess   Signal
	WriteFail      Signal
	WriteSuccess   Signal
}
