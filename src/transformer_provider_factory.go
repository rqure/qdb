package qmq

type TransformerProviderFactory interface {
	Create() TransformerProvider
}
