package qmq

import "time"

type DatabaseWorkerSignals struct {
	Connected    Signal
	Disconnected Signal
}

type DatabaseWorker struct {
	Signals DatabaseWorkerSignals

	db                      IDatabase
	isConnected             bool
	lastConnectionCheckTime time.Time
}

func NewDatabaseWorker(db IDatabase) IWorker {
	return &DatabaseWorker{
		db: db,
	}
}

func (w *DatabaseWorker) Init() {

}

func (w *DatabaseWorker) Deinit() {

}

func (w *DatabaseWorker) DoWork() {
	currentTime := time.Now()
	if currentTime.After(w.lastConnectionCheckTime.Add(5 * time.Second)) {
		w.setConnectionStatus(w.db.IsConnected())
		w.lastConnectionCheckTime = currentTime
	}

	if !w.isConnected {
		Info("[DatabaseWorker::DoWork] Database is not connected, trying to connect...")
		w.db.Connect()
		return
	}

	w.db.ProcessNotifications()
}

func (w *DatabaseWorker) setConnectionStatus(connected bool) {
	if w.isConnected == connected {
		return
	}

	w.isConnected = connected
	Info("[DatabaseWorker::setConnectionStatus] Connection status changed: %v", connected)
	if connected {
		w.Signals.Connected.Emit()
	} else {
		w.Signals.Disconnected.Emit()
	}
}
