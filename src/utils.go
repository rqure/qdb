package qdb

import (
	"encoding/base64"
	"strings"

	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/types/known/anypb"
)

func Truncate(text string, width int) string {
	text = text[:min(len(text), width)]
	if len(text) == width {
		text = text + "..."
	}
	return text
}

func FileEncode(content []byte) string {
	prefix := "data:application/octet-stream;base64,"
	return prefix + base64.StdEncoding.EncodeToString(content)
}

func FileDecode(encoded string) []byte {
	prefix := "data:application/octet-stream;base64,"
	if !strings.HasPrefix(encoded, prefix) {
		Error("[FileDecode] Invalid prefix: %v", encoded)
		return []byte{}
	}

	decoded, err := base64.StdEncoding.DecodeString(strings.TrimPrefix(encoded, prefix))
	if err != nil {
		Error("[FileDecode] Failed to decode: %v", err)
		return []byte{}
	}

	return decoded
}

func ValueCast[T proto.Message](value *anypb.Any) T {
	p, err := value.UnmarshalNew()

	if err != nil {
		Error("[ValueCast] Failed to unmarshal: %v", err)
	}

	c, ok := p.(T)
	if !ok {
		Error("[ValueCast] Failed to cast: %v", value)
	}

	return c
}

func ValueEquals(a *anypb.Any, b *anypb.Any) bool {
	if a == nil && b == nil {
		return true
	}

	if a == nil || b == nil {
		return false
	}

	if a.TypeUrl != b.TypeUrl {
		return false
	}

	if a.MessageIs(&Int{}) {
		return ValueCast[*Int](a).Raw == ValueCast[*Int](b).Raw
	}

	if a.MessageIs(&Float{}) {
		return ValueCast[*Float](a).Raw == ValueCast[*Float](b).Raw
	}

	if a.MessageIs(&String{}) {
		return ValueCast[*String](a).Raw == ValueCast[*String](b).Raw
	}

	if a.MessageIs(&Bool{}) {
		return ValueCast[*Bool](a).Raw == ValueCast[*Bool](b).Raw
	}

	if a.MessageIs(&EntityReference{}) {
		return ValueCast[*EntityReference](a).Raw == ValueCast[*EntityReference](b).Raw
	}

	if a.MessageIs(&BinaryFile{}) {
		return ValueCast[*BinaryFile](a).Raw == ValueCast[*BinaryFile](b).Raw
	}

	if a.MessageIs(&GarageDoorState{}) {
		return ValueCast[*GarageDoorState](a).Raw == ValueCast[*GarageDoorState](b).Raw
	}

	if a.MessageIs(&ConnectionState{}) {
		return ValueCast[*ConnectionState](a).Raw == ValueCast[*ConnectionState](b).Raw
	}

	if a.MessageIs(&Timestamp{}) {
		ac := ValueCast[*Timestamp](a).Raw
		bc := ValueCast[*Timestamp](b).Raw
		return ac.Nanos == bc.Nanos && ac.Seconds == bc.Seconds
	}

	Error("[ValueEquals] Unsupported type: %s", a.TypeUrl)

	return false
}
