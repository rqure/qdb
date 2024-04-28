package qmq

import "github.com/google/uuid"

type DefaultMessageIdGenerator struct{}

func NewDefaultMessageIdGenerator() MessageIdGenerator {
	return &DefaultMessageIdGenerator{}
}

func (d *DefaultMessageIdGenerator) Generate() string {
	return uuid.New().String()
}
