package qmq

import (
	"context"
	"crypto/rand"
	"encoding/base64"
)

type QMQLocker struct {
	id    string
	value string
	conn  *QMQConnection
}

func (l *QMQLocker) LockWithTimeout(ctx context.Context, timeoutMs int64) bool {
	randomBytes := make([]byte, 8)
	_, err := rand.Read(randomBytes)
	if err != nil {
		return false
	}
	l.value = base64.StdEncoding.EncodeToString(randomBytes)

	writeRequest := &QMQData{}
	writeRequest.Data.MarshalFrom(&QMQString{Value: l.value})
	result, err := l.conn.TempSet(ctx, l.id, data, timeoutMs)

	if err != nil {
		return false
	}

	return result
}
