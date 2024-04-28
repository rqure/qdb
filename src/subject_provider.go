package qmq

import "google.golang.org/protobuf/types/known/anypb"

type SubjectProvider interface {
	Get(*anypb.Any) string
}
