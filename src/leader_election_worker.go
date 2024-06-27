package qdb

import (
	"crypto/rand"
	"encoding/base64"
	"time"
)

type LeaderStates int

const (
	Unavailable LeaderStates = iota
	Follower
	Leader
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

const LeaderLeaseTimeout = 3 * time.Second

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
	state                      LeaderStates
	applicationName            string
	applicationInstanceId      string
	keygen                     LeaderElectionKeyGenerator
	lastLeaderAttemptTime      time.Time
	lastLeaseRenewalTime       time.Time
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
	w.setState(Unavailable)
}

func (w *LeaderElectionWorker) OnDatabaseConnected() {

}

func (w *LeaderElectionWorker) OnDatabaseDisconnected() {

}

func (w *LeaderElectionWorker) OnSchemaUpdated() {

}

func (w *LeaderElectionWorker) DoWork() {
	switch w.state {
	case Unavailable:
		if w.determineAvailability() {
			w.setState(Follower)
		} else {
			w.setState(Unavailable)
		}
	case Follower:
		if w.determineAvailability() {
			if w.determineLeadershipStatus() {
				w.setState(Leader)
			} else {
				w.setState(Follower)

				if time.Now().After(w.lastLeaderAttemptTime.Add(LeaderLeaseTimeout)) {
					w.tryBecomeLeader()
					w.lastLeaderAttemptTime = time.Now()
				}
			}
		} else {
			w.setState(Unavailable)
		}
	case Leader:
		if w.determineAvailability() {
			if w.determineLeadershipStatus() {
				w.setState(Leader)

				if time.Now().After(w.lastLeaseRenewalTime.Add(LeaderLeaseTimeout / 2)) {
					w.renewLeadershipLease()
					w.lastLeaseRenewalTime = time.Now()
				}
			} else {
				w.setState(Follower)
			}
		} else {
			w.setState(Unavailable)
		}
	}
}

func (w *LeaderElectionWorker) setState(state LeaderStates) {
	if w.state == state {
		return
	}

	w.state = state
	switch state {
	case Leader:
		w.Signals.BecameLeader.Emit()
	case Follower:
		w.Signals.BecameFollower.Emit()
	case Unavailable:
		w.Signals.BecameUnavailable.Emit()
	}
}

func (w *LeaderElectionWorker) determineAvailability() bool {
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

func (w *LeaderElectionWorker) determineLeadershipStatus() bool {
	return w.db.TempGet(w.keygen.GetLeaderKey(w.applicationName)) == w.applicationInstanceId
}

func (w *LeaderElectionWorker) updateCandidateStatus(available bool) bool {
	return w.db.TempGet(w.keygen.GetLeaderCandidatesKey(w.applicationName, w.applicationInstanceId)) == w.applicationInstanceId
}

func (w *LeaderElectionWorker) tryBecomeLeader() bool {
	return w.db.TempSet(w.keygen.GetLeaderKey(w.applicationName), w.applicationInstanceId, LeaderLeaseTimeout)
}

func (w *LeaderElectionWorker) renewLeadershipLease() {
	w.db.TempExpire(w.keygen.GetLeaderKey(w.applicationName), LeaderLeaseTimeout)
}

func (w *LeaderElectionWorker) onBecameLeader() {
	Info("[LeaderElectionWorker::onBecameLeader] Became the leader")
	w.updateCandidateStatus(true)
}

func (w *LeaderElectionWorker) onBecameFollower() {
	Info("[LeaderElectionWorker::onBecameFollower] Became a follower")
	w.updateCandidateStatus(true)
}

func (w *LeaderElectionWorker) onBecameUnavailable() {
	Info("[LeaderElectionWorker::onBecameUnavailable] Became unavailable")
	w.updateCandidateStatus(false)
}
