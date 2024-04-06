package qmq

type DefaultTransformerProvider struct {
	transformers map[string][]Transformer
}

func NewDefaultTransformerProvider() *DefaultTransformerProvider {
	return &DefaultTransformerProvider{
		transformers: make(map[string][]Transformer),
	}
}

func (p *DefaultTransformerProvider) Get(key string) []Transformer {
	if p.transformers[key] == nil {
		return []Transformer{&DefaultTransformer{}}
	}

	return p.transformers[key]
}

func (p *DefaultTransformerProvider) Set(key string, transformers []Transformer) {
	p.transformers[key] = transformers
}
