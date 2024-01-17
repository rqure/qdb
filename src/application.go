package qmq

type QMQApplication struct {
	conn      *QMQConnection
	producers map[string]*QMQProducer
	consumers map[string]*QMQConsumer
	logger    *QMQLogger
}
