package main

import (
	qmq "github.com/rqure/qmq/src"
)

type ExampleNameProvider struct{}

func (p *ExampleNameProvider) Get() string {
	return "example"
}

func main() {
	engine := qmq.NewDefaultEngine(qmq.DefaultEngineConfig{
		NameProvider: &ExampleNameProvider{},
	})
	engine.Run()
}
