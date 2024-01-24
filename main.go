package main

import (
	qmq "github.com/rqure/qmq/src"
)

func main() {
	app := qmq.NewQMQApplication("example")
	app.Initialize()
	defer app.Deinitialize()
}
