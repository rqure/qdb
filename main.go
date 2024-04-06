package main

import (
	qmq "github.com/rqure/qmq/src"
)

func main() {
	app := qmq.NewDefaultEngine("example")
	app.Initialize()
	defer app.Deinitialize()
}
