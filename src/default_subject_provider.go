package qmq

import "google.golang.org/protobuf/types/known/anypb"

type DefaultSubjectProvider struct{}

func NewDefaultSubjectProvider() SubjectProvider {
	return &DefaultSubjectProvider{}
}

func (d *DefaultSubjectProvider) Get(a *anypb.Any) string {
	return a.TypeUrl
}
