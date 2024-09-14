package qdb

import (
	"os"
	"os/signal"
	"syscall"
	"time"
)

type IApplication interface {
	Execute()
	Quit()
}

type IWorker interface {
	Deinit()
	DoWork()
	Init()
}

type ApplicationConfig struct {
	Name    string
	Workers []IWorker
}

type Application struct {
	config ApplicationConfig

	quit bool

	deinit Signal
	init   Signal
	tick   Signal
}

func NewApplication(config ApplicationConfig) IApplication {
	a := &Application{config: config}

	os.Setenv("QDB_APP_NAME", config.Name)

	for _, worker := range config.Workers {
		a.init.Connect(Slot(worker.Init))
		a.deinit.Connect(Slot(worker.Deinit))
		a.tick.Connect(Slot(worker.DoWork))
	}

	return a
}

func (a *Application) Execute() {
	defer a.init.DisconnectAll()
	defer a.deinit.DisconnectAll()
	defer a.tick.DisconnectAll()

	a.init.Emit()
	defer a.deinit.Emit()

	interrupt := make(chan os.Signal, 1)
	signal.Notify(interrupt, syscall.SIGINT, syscall.SIGTERM)

	ticker := time.NewTicker(10 * time.Millisecond)
	defer ticker.Stop()

	for {
		select {
		case <-interrupt:
			return
		case <-ticker.C:
			if a.quit {
				return
			}

			a.tick.Emit()
		}
	}
}

func (a *Application) Quit() {
	a.quit = true
}
