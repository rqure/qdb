package main

import (
	qmq "github.com/rqure/qmq/src"
)

func main() {
	db := qmq.NewRedisDatabase(qmq.RedisDatabaseConfig{
		Address: "redis:6379",
	})

	dbWorker := qmq.NewDatabaseWorker(db)

	// Create a new application configuration
	config := qmq.ApplicationConfig{
		Name: "MyApp",
		Workers: []qmq.IWorker{
			dbWorker,
		},
	}

	// Create a new application
	app := qmq.NewApplication(config)

	// Execute the application
	app.Execute()
}
