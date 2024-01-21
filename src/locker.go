package qmq

import (
	"context"
	"crypto/rand"
	"encoding/base64"
	"time"
)

type QMQLocker struct {
	id    string
	token string
	conn  *QMQConnection
}

func NewQMQLocker(id string, conn *QMQConnection) *QMQLocker {
	return &QMQLocker{
		id:    id,
		token: "",
		conn:  conn,
	}
}

func (l *QMQLocker) TryLockWithTimeout(ctx context.Context, timeoutMs int64) bool {
	randomBytes := make([]byte, 8)
	_, err := rand.Read(randomBytes)
	if err != nil {
		return false
	}

	l.token = base64.StdEncoding.EncodeToString(randomBytes)

	writeRequest := NewWriteRequest(&QMQString{Value: l.token})

	result, err := l.conn.TempSet(ctx, l.id, writeRequest, timeoutMs)
	if err != nil {
		return false
	}

	return result
}

func (l *QMQLocker) TryLock(ctx context.Context) bool {
	return l.TryLockWithTimeout(ctx, 30000)
}

func (l *QMQLocker) Lock(ctx context.Context) {
	for !l.TryLock(ctx) {
		time.Sleep(100 * time.Millisecond)
	}
}

func (l *QMQLocker) LockWithTimeout(ctx context.Context, timeoutMs int64) {
	for !l.TryLockWithTimeout(ctx, timeoutMs) {
		time.Sleep(100 * time.Millisecond)
	}
}

func (l *QMQLocker) Unlock(ctx context.Context) {
	readRequest, err := l.conn.Get(ctx, l.id)
	if err != nil {
		return
	}

	token := QMQString{}
	err = readRequest.Data.UnmarshalTo(&token)
	if err != nil {
		return
	}

	if l.token != token.Value {
		return
	}

	l.conn.Unset(ctx, l.id)
}
