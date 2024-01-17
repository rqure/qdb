package qmq

type QMQStream struct {
	key string

	Context QMQStreamContext
	Length  int64
	Locker  *QMQLocker
}

func NewQMQStream(key string, conn *QMQConnection) *QMQStream {
	stream := &QMQStream{
		key: key,
		Context: QMQStreamContext{
			LastConsumedId: "0",
		},
		Length: 1,
	}

	stream.Locker = NewQMQLocker(stream.LockerKey(), conn)

	return stream
}

func (s *QMQStream) Key() string {
	return s.key
}

func (s *QMQStream) ContextKey() string {
	return s.key + ":context"
}

func (s *QMQStream) LockerKey() string {
	return s.key + ":lock"
}
