package qdb

import (
	"cmp"

	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/reflect/protoreflect"
	"google.golang.org/protobuf/types/known/anypb"
	"google.golang.org/protobuf/types/known/timestamppb"
)

type IField interface {
	PullValue(m proto.Message) proto.Message
	PullInt() int64
	PullFloat() float64
	PullString() string
	PullBool() bool
	PullBinaryFile() string
	PullEntityReference() string

	PushValue(m proto.Message) bool
	PushInt(int64) bool
	PushFloat(float64) bool
	PushString(string) bool
	PushBool(bool) bool
	PushBinaryFile(string) bool
	PushEntityReference(string) bool
}

type Field struct {
	db        IDatabase
	fieldName string
	entityId  string
}

func NewField(db IDatabase, entityId string, fieldName string) *Field {
	return &Field{
		db:        db,
		fieldName: fieldName,
		entityId:  entityId,
	}
}

func (f *Field) PullValue(m proto.Message) proto.Message {
	request := &DatabaseRequest{
		Id:    f.entityId,
		Field: f.fieldName,
	}
	f.db.Read([]*DatabaseRequest{request})

	if !request.Success {
		return m
	}

	if err := request.Value.UnmarshalTo(m); err != nil {
		return m
	}

	return m
}

func (f *Field) PushValue(m proto.Message) bool {
	a, err := anypb.New(m)
	if err != nil {
		return false
	}

	request := &DatabaseRequest{
		Id:    f.entityId,
		Field: f.fieldName,
		Value: a,
	}

	f.db.Write([]*DatabaseRequest{request})

	return request.Success
}

func (f *Field) PullInt() int64 {
	return f.PullValue(new(Int)).(*Int).GetRaw()
}

func (f *Field) PullFloat() float64 {
	return f.PullValue(new(Float)).(*Float).GetRaw()
}

func (f *Field) PullString() string {
	return f.PullValue(new(String)).(*String).GetRaw()
}

func (f *Field) PullBool() bool {
	return f.PullValue(new(Bool)).(*Bool).GetRaw()
}

func (f *Field) PullBinaryFile() string {
	return f.PullValue(new(BinaryFile)).(*BinaryFile).GetRaw()
}

func (f *Field) PullEntityReference() string {
	return f.PullValue(new(EntityReference)).(*EntityReference).GetRaw()
}

func (f *Field) PushInt(value int64) bool {
	return f.PushValue(&Int{Raw: value})
}

func (f *Field) PushFloat(value float64) bool {
	return f.PushValue(&Float{Raw: value})
}

func (f *Field) PushString(value string) bool {
	return f.PushValue(&String{Raw: value})
}

func (f *Field) PushBool(value bool) bool {
	return f.PushValue(&Bool{Raw: value})
}

func (f *Field) PushBinaryFile(value string) bool {
	return f.PushValue(&BinaryFile{Raw: value})
}

func (f *Field) PushEntityReference(value string) bool {
	return f.PushValue(&EntityReference{Raw: value})
}

type IEntity interface {
	GetId() string
	GetType() string
	GetName() string
	GetChildren() []*EntityReference
	GetParent() *EntityReference
	GetField(string) IField
}

type Entity struct {
	db     IDatabase
	entity *DatabaseEntity
}

func NewEntity(db IDatabase, entityId string) *Entity {
	return &Entity{
		db:     db,
		entity: db.GetEntity(entityId),
	}
}

func (e *Entity) GetId() string {
	return e.entity.Id
}

func (e *Entity) GetType() string {
	return e.entity.Type
}

func (e *Entity) GetName() string {
	return e.entity.Name
}

func (e *Entity) GetChildren() []*EntityReference {
	return e.entity.Children
}

func (e *Entity) GetParent() *EntityReference {
	return e.entity.Parent
}

func (e *Entity) GetField(fieldName string) IField {
	return NewField(e.db, e.GetId(), fieldName)
}

type IFieldProto[T comparable] interface {
	protoreflect.ProtoMessage
	GetRaw() T
}

func DefaultCaster[A any, B any](in A) B {
	return any(in).(B)
}

type FieldConditionEval func(IDatabase, string) bool
type FieldCondition[T IFieldProto[K], C cmp.Ordered, K comparable] struct {
	Lhs      string
	LhsValue T
	Caster   func(K) C
}

func (f *FieldCondition[T, C, K]) Where(lhs string) *FieldCondition[T, C, K] {
	f.Lhs = lhs
	return f
}

func (f *FieldCondition[T, C, K]) IsEqualTo(rhs T) FieldConditionEval {
	return func(db IDatabase, entityId string) bool {
		request := &DatabaseRequest{
			Id:    entityId,
			Field: f.Lhs,
		}
		db.Read([]*DatabaseRequest{request})

		if !request.Success {
			return false
		}

		if !request.Value.MessageIs(f.LhsValue) {
			return false
		}

		lhsValue, err := request.Value.UnmarshalNew()
		if err != nil {
			Error("[FieldCondition::IsEqualTo] Failed to unmarshal value: %s", err.Error())
			return false
		}
		f.LhsValue = lhsValue.(T)

		return f.Caster(f.LhsValue.GetRaw()) == f.Caster(rhs.GetRaw())
	}
}

func (f *FieldCondition[T, C, K]) IsNotEqualTo(rhs T) FieldConditionEval {
	return func(db IDatabase, entityId string) bool {
		request := &DatabaseRequest{
			Id:    entityId,
			Field: f.Lhs,
		}
		db.Read([]*DatabaseRequest{request})

		if !request.Success {
			return false
		}

		if !request.Value.MessageIs(f.LhsValue) {
			return false
		}

		lhsValue, err := request.Value.UnmarshalNew()
		if err != nil {
			Error("[FieldCondition::IsNotEqualTo] Failed to unmarshal value: %s", err.Error())
			return false
		}
		f.LhsValue = lhsValue.(T)

		return f.Caster(f.LhsValue.GetRaw()) != f.Caster(rhs.GetRaw())
	}
}

func (f *FieldCondition[T, C, K]) IsGreaterThan(rhs T) FieldConditionEval {
	return func(db IDatabase, entityId string) bool {
		request := &DatabaseRequest{
			Id:    entityId,
			Field: f.Lhs,
		}
		db.Read([]*DatabaseRequest{request})

		if !request.Success {
			return false
		}

		if !request.Value.MessageIs(f.LhsValue) {
			return false
		}

		lhsValue, err := request.Value.UnmarshalNew()
		if err != nil {
			Error("[FieldCondition::IsGreaterThan] Failed to unmarshal value: %s", err.Error())
			return false
		}
		f.LhsValue = lhsValue.(T)

		return f.Caster(f.LhsValue.GetRaw()) > f.Caster(rhs.GetRaw())
	}
}

func (f *FieldCondition[T, C, K]) IsLessThan(rhs T) FieldConditionEval {
	return func(db IDatabase, entityId string) bool {
		request := &DatabaseRequest{
			Id:    entityId,
			Field: f.Lhs,
		}
		db.Read([]*DatabaseRequest{request})

		if !request.Success {
			return false
		}

		if !request.Value.MessageIs(f.LhsValue) {
			return false
		}

		lhsValue, err := request.Value.UnmarshalNew()
		if err != nil {
			Error("[FieldCondition::IsLessThan] Failed to unmarshal value: %s", err.Error())
			return false
		}
		f.LhsValue = lhsValue.(T)

		return f.Caster(f.LhsValue.GetRaw()) < f.Caster(rhs.GetRaw())
	}
}

func (f *FieldCondition[T, C, K]) IsGreaterThanOrEqualTo(rhs T) FieldConditionEval {
	return func(db IDatabase, entityId string) bool {
		request := &DatabaseRequest{
			Id:    entityId,
			Field: f.Lhs,
		}
		db.Read([]*DatabaseRequest{request})

		if !request.Success {
			return false
		}

		if !request.Value.MessageIs(f.LhsValue) {
			return false
		}

		lhsValue, err := request.Value.UnmarshalNew()
		if err != nil {
			Error("[FieldCondition::IsGreaterThanOrEqualTo] Failed to unmarshal value: %s", err.Error())
			return false
		}
		f.LhsValue = lhsValue.(T)

		return f.Caster(f.LhsValue.GetRaw()) >= f.Caster(rhs.GetRaw())
	}
}

func (f *FieldCondition[T, C, K]) IsLessThanOrEqualTo(rhs T) FieldConditionEval {
	return func(db IDatabase, entityId string) bool {
		request := &DatabaseRequest{
			Id:    entityId,
			Field: f.Lhs,
		}
		db.Read([]*DatabaseRequest{request})

		if !request.Success {
			return false
		}

		if !request.Value.MessageIs(f.LhsValue) {
			return false
		}

		lhsValue, err := request.Value.UnmarshalNew()
		if err != nil {
			return false
		}
		f.LhsValue = lhsValue.(T)

		return f.Caster(f.LhsValue.GetRaw()) <= f.Caster(rhs.GetRaw())
	}
}

func (f *FieldCondition[T, C, K]) IsBetween(lower T, upper T) FieldConditionEval {
	return func(db IDatabase, entityId string) bool {
		request := &DatabaseRequest{
			Id:    entityId,
			Field: f.Lhs,
		}
		db.Read([]*DatabaseRequest{request})

		if !request.Success {
			return false
		}

		if !request.Value.MessageIs(f.LhsValue) {
			return false
		}

		lhsValue, err := request.Value.UnmarshalNew()
		if err != nil {
			Error("[FieldCondition::IsBetween] Failed to unmarshal value: %s", err.Error())
			return false
		}
		f.LhsValue = lhsValue.(T)

		return f.Caster(f.LhsValue.GetRaw()) >= f.Caster(lower.GetRaw()) && f.Caster(f.LhsValue.GetRaw()) <= f.Caster(upper.GetRaw())
	}
}

func (f *FieldCondition[T, C, K]) IsIn(values []T) FieldConditionEval {
	return func(db IDatabase, entityId string) bool {
		request := &DatabaseRequest{
			Id:    entityId,
			Field: f.Lhs,
		}
		db.Read([]*DatabaseRequest{request})

		if !request.Success {
			return false
		}

		if !request.Value.MessageIs(f.LhsValue) {
			return false
		}

		lhsValue, err := request.Value.UnmarshalNew()
		if err != nil {
			Error("[FieldCondition::IsIn] Failed to unmarshal value: %s", err.Error())
			return false
		}
		f.LhsValue = lhsValue.(T)

		for _, value := range values {
			if f.Caster(f.LhsValue.GetRaw()) == f.Caster(value.GetRaw()) {
				return true
			}
		}

		return false
	}
}

func (f *FieldCondition[T, C, K]) IsNotIn(values []T) FieldConditionEval {
	return func(db IDatabase, entityId string) bool {
		request := &DatabaseRequest{
			Id:    entityId,
			Field: f.Lhs,
		}
		db.Read([]*DatabaseRequest{request})

		if !request.Success {
			return false
		}

		if !request.Value.MessageIs(f.LhsValue) {
			return false
		}

		lhsValue, err := request.Value.UnmarshalNew()
		if err != nil {
			Error("[FieldCondition::IsNotIn] Failed to unmarshal value: %s", err.Error())
			return false
		}
		f.LhsValue = lhsValue.(T)

		for _, value := range values {
			if f.Caster(f.LhsValue.GetRaw()) == f.Caster(value.GetRaw()) {
				return false
			}
		}

		return true
	}
}

type SearchCriteria struct {
	EntityType string
	Conditions []FieldConditionEval
}

type IEntityFinder interface {
	Find(SearchCriteria) []IEntity
}

type EntityFinder struct {
	db IDatabase
}

func NewEntityFinder(db IDatabase) *EntityFinder {
	return &EntityFinder{
		db: db,
	}
}

func (f *EntityFinder) Find(criteria SearchCriteria) []IEntity {
	entities := make([]IEntity, 0)

	for _, entityId := range f.db.FindEntities(criteria.EntityType) {
		allConditionsMet := true

		for _, condition := range criteria.Conditions {
			if !condition(f.db, entityId) {
				allConditionsMet = false
				break
			}
		}

		if allConditionsMet {
			entities = append(entities, NewEntity(f.db, entityId))
		}
	}

	return entities
}

type FCString = FieldCondition[*String, string, string]
type FCBool = FieldCondition[*Bool, int, bool]
type FCInt = FieldCondition[*Int, int64, int64]
type FCFloat = FieldCondition[*Float, float64, float64]
type FCEnum[T ~int32] struct {
	FieldCondition[IFieldProto[T], T, T]
}
type FCTimestamp = FieldCondition[*Timestamp, int64, *timestamppb.Timestamp]
type FCReference = FieldCondition[*EntityReference, string, string]

func NewStringCondition() *FCString {
	return &FCString{
		Caster: DefaultCaster[string, string],
	}
}

func NewBoolCondition() *FCBool {
	return &FCBool{
		Caster: func(b bool) int {
			if b {
				return 1
			}
			return 0
		},
	}
}

func NewIntCondition() *FCInt {
	return &FCInt{
		Caster: DefaultCaster[int64, int64],
	}
}

func NewFloatCondition() *FCFloat {
	return &FCFloat{
		Caster: DefaultCaster[float64, float64],
	}
}

func NewEnumCondition[T ~int32]() *FCEnum[T] {
	return &FCEnum[T]{
		FieldCondition: FieldCondition[IFieldProto[T], T, T]{
			Caster: DefaultCaster[T, T],
		},
	}
}

func NewTimestampCondition() *FCTimestamp {
	return &FCTimestamp{
		Caster: func(t *timestamppb.Timestamp) int64 {
			return t.AsTime().UnixMilli()
		},
	}
}

func NewReferenceCondition() *FCReference {
	return &FCReference{
		Caster: DefaultCaster[string, string],
	}
}
