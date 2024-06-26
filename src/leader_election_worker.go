package qdb

import (
	"crypto/rand"
	"encoding/base64"
	"time"
)

// leader:<appName>:current
// leader:<appName>:candidates:<instanceId>
type LeaderElectionKeyGenerator struct{}

func (g *LeaderElectionKeyGenerator) GetLeaderKey(app string) string {
	return "leader:" + app + ":current"
}

func (g *LeaderElectionKeyGenerator) GetLeaderCandidatesKey(app string, instanceId string) string {
	return "leader:" + app + ":candidates:" + instanceId
}

const LeaderTokenExpiry = 5 * time.Second

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
	applicationName            string
	applicationInstanceId      string
	keygen                     LeaderElectionKeyGenerator
}

func NewLeaderElectionWorker(db IDatabase) *LeaderElectionWorker {
	w := &LeaderElectionWorker{
		db:                         db,
		leaderAvailabilityCriteria: []LeaderAvailabilityCriteria{},
		keygen:                     LeaderElectionKeyGenerator{},
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
	w.applicationInstanceId = w.randomString()
}

func (w *LeaderElectionWorker) Deinit() {
}

func (w *LeaderElectionWorker) OnDatabaseConnected() {

}

func (w *LeaderElectionWorker) OnDatabaseDisconnected() {

}

func (w *LeaderElectionWorker) OnSchemaUpdated() {

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

	w.isLeader = w.checkIsLeader()
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

func (w *LeaderElectionWorker) randomString() string {
	randomBytes := make([]byte, 8)
	_, err := rand.Read(randomBytes)
	if err != nil {
		Error("[LeaderElectionWorker::randomString] Failed to generate random bytes: %s", err.Error())

		return ""
	}

	return base64.StdEncoding.EncodeToString(randomBytes)
}

func (w *LeaderElectionWorker) checkIsLeader() bool {
	return w.db.TempGet(w.keygen.GetLeaderKey(w.applicationName)) == w.applicationInstanceId
}

func (w *LeaderElectionWorker) tryBecomeLeader() bool {
	return w.db.TempSet(w.keygen.GetLeaderKey(w.applicationName), w.applicationInstanceId, LeaderTokenExpiry)
}

func (w *LeaderElectionWorker) renewLeadershipExpiry() {
	w.db.TempExpire(w.keygen.GetLeaderKey(w.applicationName), LeaderTokenExpiry)
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
