package qmq

type DefaultNameProvider struct {
	name string
}

func NewDefaultNameProvider(name string) NameProvider {
	return &DefaultNameProvider{name: name}
}

func (d *DefaultNameProvider) Get() string {
	return d.name
}
