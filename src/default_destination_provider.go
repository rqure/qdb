package qmq

type DefaultDestinationProvider struct {
	destination string
}

func NewDefaultDestinationProvider(destination string) DestinationProvider {
	return &DefaultDestinationProvider{destination: destination}
}

func (d *DefaultDestinationProvider) Get() string {
	return d.destination
}
