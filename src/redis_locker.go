package qmq

import (
	"crypto/rand"
	"encoding/base64"
	mrand "math/rand"
	"sync"
	"sync/atomic"
	"time"
)

type RedisLocker struct {
	id       string
	token    string
	conn     *RedisConnection
	mutex    sync.Mutex
	isLocked atomic.Bool
	unlockCh chan interface{}
}

func NewRedisLocker(id string, conn *RedisConnection) *RedisLocker {
	return &RedisLocker{
		id:       id,
		token:    "",
		conn:     conn,
		unlockCh: make(chan interface{}),
	}
}

func (l *RedisLocker) TryLockWithTimeout(timeoutMs int64) bool {
	randomBytes := make([]byte, 8)
	_, err := rand.Read(randomBytes)
	if err != nil {
		return false
	}

	l.token = base64.StdEncoding.EncodeToString(randomBytes)

	writeRequest := NewWriteRequest(&String{Value: l.token})

	result, err := l.conn.TempSet(l.id, writeRequest, timeoutMs)
	if err != nil {
		return false
	}

	return result
}

func (l *RedisLocker) TryLock() bool {
	return l.TryLockWithTimeout(10000)
}

func (l *RedisLocker) Lock() {
	l.mutex.Lock()
	for !l.TryLock() {
		time.Sleep(time.Duration(mrand.Intn(95)+5) * time.Millisecond)
	}

	l.isLocked.Store(true)

	go l.UpdateExpiryTimeout(10000)
}

func (l *RedisLocker) LockWithTimeout(timeoutMs int64) {
	l.mutex.Lock()
	for !l.TryLockWithTimeout(timeoutMs) {
		time.Sleep(time.Duration(mrand.Intn(95)+5) * time.Millisecond)
	}

	l.isLocked.Store(true)

	go l.UpdateExpiryTimeout(timeoutMs)
}

func (l *RedisLocker) Unlock() {
	if l.isLocked.CompareAndSwap(true, false) {
		defer func() {
			l.unlockCh <- nil
			l.mutex.Unlock()
		}()
	}

	readRequest, err := l.conn.Get(l.id)
	if err != nil {
		return
	}

	token := String{}
	err = readRequest.Data.UnmarshalTo(&token)
	if err != nil {
		return
	}

	if l.token != token.Value {
		return
	}

	l.conn.Unset(l.id)
}

func (l *RedisLocker) IsLocked() bool {
	return l.isLocked.Load()
}

func (l *RedisLocker) UpdateExpiryTimeout(timeoutMs int64) {
	l.conn.WgAdd()
	defer l.conn.WgDone()

	for {
		select {
		case <-l.unlockCh:
			return
		case <-time.After(time.Duration(timeoutMs/2) * time.Millisecond):
			l.conn.TempUpdateExpiry(l.id, timeoutMs)
		}
	}
}
