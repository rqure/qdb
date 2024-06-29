package qdb

import (
	"encoding/base64"
	"strings"
)

func Truncate(text string, width int) string {
	if width < 0 {
		Error("[Truncate] Width must be greater than or equal to 0")
		return ""
	}

	r := []rune(text)
	trunc := r[:width]
	return string(trunc) + "..."
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
