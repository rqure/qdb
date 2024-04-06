package qmq

type TransformerProvider interface {
	Get(key string) []Transformer
	Set(key string, transformers []Transformer)
}
