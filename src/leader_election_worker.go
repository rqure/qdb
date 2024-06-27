package qdb

import (
	"crypto/rand"
	"encoding/base64"
	"os"
	"strings"
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
	LosingLeadership  Signal // Is the current leader, but is about to lose leadership status
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
	lastCandidateUpdateTime    time.Time
	isDatabaseConnected        bool
}

func NewLeaderElectionWorker(db IDatabase) *LeaderElectionWorker {
	w := &LeaderElectionWorker{
		db:                         db,
		leaderAvailabilityCriteria: []LeaderAvailabilityCriteria{},
		keygen:                     LeaderElectionKeyGenerator{},
	}

	w.Signals.BecameLeader.Connect(Slot(w.onBecameLeader))
	w.Signals.LosingLeadership.Connect(Slot(w.onLosingLeadership))
	w.Signals.BecameFollower.Connect(Slot(w.onBecameFollower))
	w.Signals.BecameUnavailable.Connect(Slot(w.onBecameUnavailable))

	return w
}

func (w *LeaderElectionWorker) AddAvailabilityCriteria(criteria LeaderAvailabilityCriteria) {
	w.leaderAvailabilityCriteria = append(w.leaderAvailabilityCriteria, criteria)
}

func (w *LeaderElectionWorker) Init() {
	w.applicationName = os.Getenv("QDB_APP_NAME")

	if os.Getenv("QDB_IN_DOCKER") != "" {
		w.applicationInstanceId = os.Getenv("HOSTNAME")
	}

	if w.applicationInstanceId == "" {
		w.applicationInstanceId = w.randomString()
	}

	Info("[LeaderElectionWorker::Init] Application instance ID: %s", w.applicationInstanceId)

	w.AddAvailabilityCriteria(func() bool {
		return w.isDatabaseConnected
	})
}

func (w *LeaderElectionWorker) Deinit() {
	w.setState(Unavailable)
}

func (w *LeaderElectionWorker) OnDatabaseConnected() {
	w.isDatabaseConnected = true
}

func (w *LeaderElectionWorker) OnDatabaseDisconnected() {
	w.isDatabaseConnected = false
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

			if time.Now().After(w.lastCandidateUpdateTime.Add(LeaderLeaseTimeout / 2)) {
				w.updateCandidateStatus(false)
				w.lastCandidateUpdateTime = time.Now()
			}
		}
	case Follower:
		if w.determineAvailability() {
			if w.determineLeadershipStatus() {
				w.setState(Leader)
			} else {
				w.setState(Follower)

				if time.Now().After(w.lastLeaderAttemptTime.Add(LeaderLeaseTimeout)) {
					if w.tryBecomeLeader() {
						w.setState(Leader)
					}
					w.lastLeaderAttemptTime = time.Now()
				}

				if time.Now().After(w.lastCandidateUpdateTime.Add(LeaderLeaseTimeout / 2)) {
					w.updateCandidateStatus(true)
					w.lastCandidateUpdateTime = time.Now()
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

				if time.Now().After(w.lastCandidateUpdateTime.Add(LeaderLeaseTimeout / 2)) {
					w.updateCandidateStatus(true)
					w.lastCandidateUpdateTime = time.Now()

					w.setLeaderAndCandidateFields()
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

	wasLeader := w.state == Leader
	w.state = state
	switch state {
	case Leader:
		w.Signals.BecameLeader.Emit()
	case Follower:
		if wasLeader {
			w.Signals.LosingLeadership.Emit()
		}
		w.Signals.BecameFollower.Emit()
	case Unavailable:
		if wasLeader {
			w.Signals.LosingLeadership.Emit()
		}
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

	r := base64.StdEncoding.EncodeToString(randomBytes)
	return r[:len(r)-1]
}

func (w *LeaderElectionWorker) determineLeadershipStatus() bool {
	return w.db.TempGet(w.keygen.GetLeaderKey(w.applicationName)) == w.applicationInstanceId
}

func (w *LeaderElectionWorker) updateCandidateStatus(available bool) {
	if available {
		if w.db.TempGet(w.keygen.GetLeaderCandidatesKey(w.applicationName, w.applicationInstanceId)) == w.applicationInstanceId {
			w.db.TempExpire(w.keygen.GetLeaderCandidatesKey(w.applicationName, w.applicationInstanceId), LeaderLeaseTimeout)
		} else {
			w.db.TempSet(w.keygen.GetLeaderCandidatesKey(w.applicationName, w.applicationInstanceId), w.applicationInstanceId, LeaderLeaseTimeout)
		}
	} else {
		if w.db.TempGet(w.keygen.GetLeaderCandidatesKey(w.applicationName, w.applicationInstanceId)) == w.applicationInstanceId {
			w.db.TempDel(w.keygen.GetLeaderCandidatesKey(w.applicationName, w.applicationInstanceId))
		}
	}
}

func (w *LeaderElectionWorker) tryBecomeLeader() bool {
	return w.db.TempSet(w.keygen.GetLeaderKey(w.applicationName), w.applicationInstanceId, LeaderLeaseTimeout)
}

func (w *LeaderElectionWorker) renewLeadershipLease() {
	w.db.TempExpire(w.keygen.GetLeaderKey(w.applicationName), LeaderLeaseTimeout)
}

func (w *LeaderElectionWorker) onBecameLeader() {
	Info("[LeaderElectionWorker::onBecameLeader] Became the leader (instanceId=%s)", w.applicationInstanceId)
	w.updateCandidateStatus(true)
	w.lastCandidateUpdateTime = time.Now()
}

func (w *LeaderElectionWorker) onBecameFollower() {
	Info("[LeaderElectionWorker::onBecameFollower] Became a follower (instanceId=%s)", w.applicationInstanceId)
	w.updateCandidateStatus(true)
	w.lastCandidateUpdateTime = time.Now()
}

func (w *LeaderElectionWorker) onBecameUnavailable() {
	Info("[LeaderElectionWorker::onBecameUnavailable] Became unavailable (instanceId=%s)", w.applicationInstanceId)
	w.updateCandidateStatus(false)
	w.lastCandidateUpdateTime = time.Now()
}

func (w *LeaderElectionWorker) setLeaderAndCandidateFields() {
	services := NewEntityFinder(w.db).Find(SearchCriteria{
		EntityType: "Service",
		Conditions: []FieldConditionEval{
			new(FieldCondition[string, *String]).Where("ApplicationName").IsEqualTo(&String{Raw: w.applicationName}),
		},
	})

	candidates := strings.ReplaceAll(strings.Join(w.db.TempScan(w.keygen.GetLeaderCandidatesKey(w.applicationName, "*")), ","), w.keygen.GetLeaderCandidatesKey(w.applicationName, ""), "")
	for _, service := range services {
		leaderField := service.GetField("Leader")
		if leaderField.PullValue(&String{}).(*String).Raw != w.applicationInstanceId {
			leaderField.PushValue(&String{Raw: w.applicationInstanceId})
		}

		candidatesField := service.GetField("Candidates")
		if candidatesField.PullValue(&String{}).(*String).Raw != candidates {
			candidatesField.PushValue(&String{Raw: candidates})
		}
	}
}

func (w *LeaderElectionWorker) clearLeaderAndCandidateFields() {
	services := NewEntityFinder(w.db).Find(SearchCriteria{
		EntityType: "Service",
		Conditions: []FieldConditionEval{
			new(FieldCondition[string, *String]).Where("ApplicationName").IsEqualTo(&String{Raw: w.applicationName}),
		},
	})

	candidates := strings.ReplaceAll(strings.Join(w.db.TempScan(w.keygen.GetLeaderCandidatesKey(w.applicationName, "*")), ","), w.keygen.GetLeaderCandidatesKey(w.applicationName, ""), "")
	for _, service := range services {
		leaderField := service.GetField("Leader")
		if leaderField.PullValue(&String{}).(*String).Raw == w.applicationInstanceId {
			leaderField.PushValue(&String{Raw: ""})
		}

		candidatesField := service.GetField("Candidates")
		if candidatesField.PullValue(&String{}).(*String).Raw != "" {
			candidatesField.PushValue(&String{Raw: candidates})
		}
	}
}

func (w *LeaderElectionWorker) onLosingLeadership() {
	Info("[LeaderElectionWorker::onLosingLeadership] Losing leadership status (instanceId=%s)", w.applicationInstanceId)

	w.updateCandidateStatus(false)
	w.clearLeaderAndCandidateFields()
}
