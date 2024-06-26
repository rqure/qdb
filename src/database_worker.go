package qdb

import "time"

type DatabaseWorkerSignals struct {
	Connected     Signal
	Disconnected  Signal
	SchemaUpdated Signal
}

type DatabaseWorker struct {
	Signals DatabaseWorkerSignals

	db                      IDatabase
	connectionState         ConnectionState_ConnectionStateEnum
	lastConnectionCheckTime time.Time
	subscriptionIds         []string
}

func NewDatabaseWorker(db IDatabase) *DatabaseWorker {
	return &DatabaseWorker{
		db:              db,
		connectionState: ConnectionState_DISCONNECTED,
		subscriptionIds: []string{},
	}
}

func (w *DatabaseWorker) Init() {
	w.subscriptionIds = append(w.subscriptionIds, w.db.Notify(&DatabaseNotificationConfig{
		Type:  "Root",
		Field: "SchemaUpdateTrigger",
	}, w.OnSchemaUpdated))
}

func (w *DatabaseWorker) Deinit() {
	for _, id := range w.subscriptionIds {
		w.db.Unnotify(id)
	}

	w.subscriptionIds = []string{}
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

func (w *DatabaseWorker) IsConnected() bool {
	return w.connectionState == ConnectionState_CONNECTED
}

func (w *DatabaseWorker) OnSchemaUpdated(*DatabaseNotification) {
	w.Signals.SchemaUpdated.Emit()
}
