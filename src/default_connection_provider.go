package qmq

import "sync"

type DefaultConnectionProvider struct {
	connections map[string]Connection
	mutex       sync.Mutex
}

func NewDefaultConnectionProvider() ConnectionProvider {
	return &DefaultConnectionProvider{
		connections: make(map[string]Connection),
	}
}

func (p *DefaultConnectionProvider) Get(key string) Connection {
	p.mutex.Lock()
	defer p.mutex.Unlock()
	return p.connections[key]
}

func (p *DefaultConnectionProvider) Set(key string, connection Connection) {
	p.mutex.Lock()
	defer p.mutex.Unlock()
	p.connections[key] = connection
}

func (p *DefaultConnectionProvider) ForEach(f func(key string, connection Connection)) {
	p.mutex.Lock()
	defer p.mutex.Unlock()
	for key, connection := range p.connections {
		f(key, connection)
	}
}
