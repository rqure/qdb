package main

import (
	qmq "github.com/rqure/qmq/src"
)

func main() {
	engine := qmq.NewDefaultEngine()
	engine.Run()
}
