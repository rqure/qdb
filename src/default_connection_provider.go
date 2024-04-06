package qmq

type DefaultConnectionProvider struct {
	connections map[string]Connection
}

func NewDefaultConnectionProvider() ConnectionProvider {
	return &DefaultConnectionProvider{
		connections: make(map[string]Connection),
	}
}

func (p *DefaultConnectionProvider) Get(key string) Connection {
	return p.connections[key]
}

func (p *DefaultConnectionProvider) Set(key string, connection Connection) {
	p.connections[key] = connection
}

func (p *DefaultConnectionProvider) ForEach(f func(key string, connection Connection)) {
	for key, connection := range p.connections {
		f(key, connection)
	}
}
