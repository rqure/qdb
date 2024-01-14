package main

import (
	"context"
	"fmt"
	"log"
	qmq "qmq/src"
)

func main() {
	ctx := context.Background()
	conn := qmq.NewQMQConnection("localhost", 6379, "")

	err := conn.Connect(ctx)
	if err != nil {
		log.Fatalf("Failed to connect to Redis: %v", err)
	}
	defer conn.Disconnect(ctx)

	// Add your code here to use the QMQConnection methods
	keys := []string{"clock-gateway:datetime"}
	conn.Get(ctx, keys)

	fmt.Println("QMQConnection operations completed")
}
