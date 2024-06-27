package qdb

import (
	"cmp"

	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/reflect/protoreflect"
	"google.golang.org/protobuf/types/known/anypb"
)

type IField interface {
	PullValue(m proto.Message) proto.Message
	PushValue(m proto.Message) bool
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

type IFieldProto[T cmp.Ordered] interface {
	protoreflect.ProtoMessage
	GetRaw() T
}

type FieldConditionEval func(IDatabase, string) bool
type FieldCondition[C cmp.Ordered, T IFieldProto[C]] struct {
	Lhs      string
	LhsValue T
}

func (f *FieldCondition[C, T]) Where(lhs string) *FieldCondition[C, T] {
	f.Lhs = lhs
	return f
}

func (f *FieldCondition[C, T]) IsEqualTo(rhs T) FieldConditionEval {
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

		return f.LhsValue.GetRaw() == rhs.GetRaw()
	}
}

func (f *FieldCondition[C, T]) IsNotEqualTo(rhs T) FieldConditionEval {
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

		if err := request.Value.UnmarshalTo(f.LhsValue); err != nil {
			return false
		}

		return f.LhsValue.GetRaw() != rhs.GetRaw()
	}
}

func (f *FieldCondition[C, T]) IsGreaterThan(rhs T) FieldConditionEval {
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

		if err := request.Value.UnmarshalTo(f.LhsValue); err != nil {
			return false
		}

		return f.LhsValue.GetRaw() > rhs.GetRaw()
	}
}

func (f *FieldCondition[C, T]) IsLessThan(rhs T) FieldConditionEval {
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

		if err := request.Value.UnmarshalTo(f.LhsValue); err != nil {
			return false
		}

		return f.LhsValue.GetRaw() < rhs.GetRaw()
	}
}

func (f *FieldCondition[C, T]) IsGreaterThanOrEqualTo(rhs T) FieldConditionEval {
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

		if err := request.Value.UnmarshalTo(f.LhsValue); err != nil {
			return false
		}

		return f.LhsValue.GetRaw() >= rhs.GetRaw()
	}
}

func (f *FieldCondition[C, T]) IsLessThanOrEqualTo(rhs T) FieldConditionEval {
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

		if err := request.Value.UnmarshalTo(f.LhsValue); err != nil {
			return false
		}

		return f.LhsValue.GetRaw() <= rhs.GetRaw()
	}
}

func (f *FieldCondition[C, T]) IsBetween(lower T, upper T) FieldConditionEval {
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

		if err := request.Value.UnmarshalTo(f.LhsValue); err != nil {
			return false
		}

		return f.LhsValue.GetRaw() >= lower.GetRaw() && f.LhsValue.GetRaw() <= upper.GetRaw()
	}
}

func (f *FieldCondition[C, T]) IsIn(values []T) FieldConditionEval {
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

		if err := request.Value.UnmarshalTo(f.LhsValue); err != nil {
			return false
		}

		for _, value := range values {
			if f.LhsValue.GetRaw() == value.GetRaw() {
				return true
			}
		}

		return false
	}
}

func (f *FieldCondition[C, T]) IsNotIn(values []T) FieldConditionEval {
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

		if err := request.Value.UnmarshalTo(f.LhsValue); err != nil {
			return false
		}

		for _, value := range values {
			if f.LhsValue.GetRaw() == value.GetRaw() {
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
