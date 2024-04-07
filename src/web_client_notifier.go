package qmq

type WebClientNotifier interface {
	NotifyAll(keys []string)
}
