package qmq

import "time"

type DatabaseWorkerSignals struct {
	Connected    Signal
	Disconnected Signal
}

type DatabaseWorker struct {
	Signals DatabaseWorkerSignals

	db                      IDatabase
	connectionState         ConnectionState_ConnectionStateEnum
	lastConnectionCheckTime time.Time
}

func NewDatabaseWorker(db IDatabase) *DatabaseWorker {
	return &DatabaseWorker{
		db:              db,
		connectionState: ConnectionState_DISCONNECTED,
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

		if w.connectionState != ConnectionState_CONNECTED {
			w.db.Connect()
			return
		}
	}

	w.db.ProcessNotifications()
}

func (w *DatabaseWorker) setConnectionStatus(connected bool) {
	connectionStatus := ConnectionState_DISCONNECTED
	if connected {
		connectionStatus = ConnectionState_CONNECTED
	}

	if w.connectionState == connectionStatus {
		return
	}

	w.connectionState = connectionStatus
	Info("[DatabaseWorker::setConnectionStatus] Connection status changed to [%s]", connectionStatus.String())
	if connected {
		w.Signals.Connected.Emit()
	} else {
		w.Signals.Disconnected.Emit()
	}
}
