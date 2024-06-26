package qdb

type LeaderAvailabilityCriteria func() bool

type LeaderElectionWorkerSignals struct {
	BecameLeader      Signal // Is the current leader
	BecameFollower    Signal // Is available to become a leader, but not elected as a leader
	BecameUnavailable Signal // Is not available to become a leader
}

type LeaderElectionWorker struct {
	Signals LeaderElectionWorkerSignals

	db                         IDatabase
	leaderAvailabilityCriteria []LeaderAvailabilityCriteria
	lastAvailability           bool
	isLeader                   bool
}

func NewLeaderElectionWorker(db IDatabase) *LeaderElectionWorker {
	w := &LeaderElectionWorker{
		db:                         db,
		leaderAvailabilityCriteria: []LeaderAvailabilityCriteria{},
	}

	w.Signals.BecameLeader.Connect(Slot(w.onBecameLeader))
	w.Signals.BecameFollower.Connect(Slot(w.onBecameFollower))
	w.Signals.BecameUnavailable.Connect(Slot(w.onBecameUnavailable))

	return w
}

func (w *LeaderElectionWorker) AddAvailabilityCriteria(criteria LeaderAvailabilityCriteria) {
	w.leaderAvailabilityCriteria = append(w.leaderAvailabilityCriteria, criteria)
}

func (w *LeaderElectionWorker) Init() {
}

func (w *LeaderElectionWorker) Deinit() {
}

func (w *LeaderElectionWorker) onBecameLeader() {
	Info("[LeaderElectionWorker::onBecameLeader] Became the leader")
	w.isLeader = true
}

func (w *LeaderElectionWorker) onBecameFollower() {
	Info("[LeaderElectionWorker::onBecameFollower] Became a follower")
	w.isLeader = false
}

func (w *LeaderElectionWorker) onBecameUnavailable() {
	Info("[LeaderElectionWorker::onBecameUnavailable] Became unavailable")
	w.isLeader = false
}

func (w *LeaderElectionWorker) DoWork() {
	available := w.IsAvailable()
	if available != w.lastAvailability {
		if available {
			w.Signals.BecameFollower.Emit()
		} else {
			w.Signals.BecameUnavailable.Emit()
		}

		w.lastAvailability = available
		return
	}

	if available && !w.isLeader {
		// Check if you can become a leader

		return
	}

	if available && w.isLeader {
		// Check if you are still the leader
		// Update leadership expiry
		return
	}
}

func (w *LeaderElectionWorker) IsAvailable() bool {
	for _, criteria := range w.leaderAvailabilityCriteria {
		if !criteria() {
			return false
		}
	}

	return true
}
