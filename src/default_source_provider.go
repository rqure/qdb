package qmq

type DefaultSourceProvider struct {
	source string
}

func NewDefaultSourceProvider(source string) SourceProvider {
	return &DefaultSourceProvider{source: source}
}

func (d *DefaultSourceProvider) Get() string {
	return d.source
}
