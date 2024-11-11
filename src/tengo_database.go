package qdb

import (
	"errors"

	"github.com/d5/tengo/v2"
)

type ITengoEntity interface {
	ToTengoMap() tengo.Object
	GetId(...tengo.Object) (tengo.Object, error)
	GetType(...tengo.Object) (tengo.Object, error)
	GetChildren(...tengo.Object) (tengo.Object, error)
	GetParent(...tengo.Object) (tengo.Object, error)
	GetField(...tengo.Object) (tengo.Object, error)
}

type TengoEntity struct {
	entity IEntity
}

type ITengoField interface {
	ToTengoMap() tengo.Object

	PullInt(...tengo.Object) (tengo.Object, error)
	PullFloat(...tengo.Object) (tengo.Object, error)
	PullString(...tengo.Object) (tengo.Object, error)
	PullBool(...tengo.Object) (tengo.Object, error)
	PullBinaryFile(...tengo.Object) (tengo.Object, error)
	PullEntityReference(...tengo.Object) (tengo.Object, error)
	PullTimestamp(...tengo.Object) (tengo.Object, error)
	PullWriteTime(...tengo.Object) (tengo.Object, error)
	PullWriter(...tengo.Object) (tengo.Object, error)

	GetInt(...tengo.Object) (tengo.Object, error)
	GetFloat(...tengo.Object) (tengo.Object, error)
	GetString(...tengo.Object) (tengo.Object, error)
	GetBool(...tengo.Object) (tengo.Object, error)
	GetBinaryFile(...tengo.Object) (tengo.Object, error)
	GetEntityReference(...tengo.Object) (tengo.Object, error)
	GetTimestamp(...tengo.Object) (tengo.Object, error)
	GetWriteTime(...tengo.Object) (tengo.Object, error)
	GetWriter(...tengo.Object) (tengo.Object, error)
	GetId(...tengo.Object) (tengo.Object, error)
	GetName(...tengo.Object) (tengo.Object, error)

	PushInt(...tengo.Object) (tengo.Object, error)
	PushFloat(...tengo.Object) (tengo.Object, error)
	PushString(...tengo.Object) (tengo.Object, error)
	PushBool(...tengo.Object) (tengo.Object, error)
	PushBinaryFile(...tengo.Object) (tengo.Object, error)
	PushEntityReference(...tengo.Object) (tengo.Object, error)
	PushTimestamp(...tengo.Object) (tengo.Object, error)
}

type TengoField struct {
	field IField
}

type ITengoDatabase interface {
	ToTengoMap() tengo.Object
	GetEntity(...tengo.Object) (tengo.Object, error)
	Find(...tengo.Object) (tengo.Object, error)
}

type TengoDatabase struct {
	db IDatabase
}

func NewTengoDatabase(db IDatabase) ITengoDatabase {
	return &TengoDatabase{db: db}
}

func NewTengoEntity(entity IEntity) ITengoEntity {
	return &TengoEntity{entity: entity}
}

func NewTengoField(field IField) ITengoField {
	return &TengoField{field: field}
}

func (tdb *TengoDatabase) ToTengoMap() tengo.Object {
	return &tengo.Map{
		Value: map[string]tengo.Object{
			"getEntity": &tengo.UserFunction{
				Name:  "getEntity",
				Value: tdb.GetEntity,
			},
		},
	}
}

func (tdb *TengoDatabase) GetEntity(args ...tengo.Object) (tengo.Object, error) {
	if len(args) < 1 {
		return tengo.UndefinedValue, tengo.ErrWrongNumArguments
	}

	entityId, ok := tengo.ToString(args[0])
	if !ok {
		return tengo.UndefinedValue, &tengo.ErrInvalidArgumentType{
			Name:     "entityId",
			Expected: "string",
			Found:    args[0].TypeName(),
		}
	}

	e := NewEntity(tdb.db, entityId)
	if e.entity == nil {
		return tengo.UndefinedValue, errors.New("entity not found")
	}

	return NewTengoEntity(e).ToTengoMap(), nil
}

func (tdb *TengoDatabase) Find(args ...tengo.Object) (tengo.Object, error) {
	if len(args) < 1 {
		return tengo.UndefinedValue, tengo.ErrWrongNumArguments
	}

	entityType, ok := tengo.ToString(args[0])
	if !ok {
		return tengo.UndefinedValue, &tengo.ErrInvalidArgumentType{
			Name:     "entityType",
			Expected: "string",
			Found:    args[0].TypeName(),
		}
	}

	entityIds := tdb.db.FindEntities(entityType)
	entities := make([]tengo.Object, 0)
	resultEntities := make([]tengo.Object, 0)
	for _, entityId := range entityIds {
		e := NewEntity(tdb.db, entityId)
		entities = append(entities, NewTengoEntity(e).ToTengoMap())
	}

	if len(args) > 1 {
		conditionFn, ok := args[1].(*tengo.UserFunction)
		if !ok {
			return tengo.UndefinedValue, &tengo.ErrInvalidArgumentType{
				Name:     "conditionFn",
				Expected: "function",
				Found:    args[1].TypeName(),
			}
		}

		for _, e := range entities {
			met, err := conditionFn.Call(e)
			if err != nil {
				return tengo.UndefinedValue, err
			}

			if met == tengo.TrueValue {
				resultEntities = append(resultEntities, e)
			}
		}
	} else {
		resultEntities = entities
	}

	return &tengo.Array{Value: resultEntities}, nil
}

func (te *TengoEntity) ToTengoMap() tengo.Object {
	return &tengo.Map{
		Value: map[string]tengo.Object{
			"id": &tengo.UserFunction{
				Name:  "id",
				Value: te.GetId,
			},
			"type": &tengo.UserFunction{
				Name:  "type",
				Value: te.GetType,
			},
			"children": &tengo.UserFunction{
				Name:  "children",
				Value: te.GetChildren,
			},
			"parent": &tengo.UserFunction{
				Name:  "parent",
				Value: te.GetParent,
			},
			"field": &tengo.UserFunction{
				Name:  "field",
				Value: te.GetField,
			},
		},
	}
}

func (te *TengoEntity) GetId(...tengo.Object) (tengo.Object, error) {
	return &tengo.String{Value: te.entity.GetId()}, nil
}

func (te *TengoEntity) GetType(...tengo.Object) (tengo.Object, error) {
	return &tengo.String{Value: te.entity.GetType()}, nil
}

func (te *TengoEntity) GetChildren(...tengo.Object) (tengo.Object, error) {
	children := make([]tengo.Object, 0)
	for _, child := range te.entity.GetChildren() {
		children = append(children, &tengo.String{Value: child.Raw})
	}

	return &tengo.Array{Value: children}, nil
}

func (te *TengoEntity) GetParent(...tengo.Object) (tengo.Object, error) {
	return &tengo.String{Value: te.entity.GetParent().Raw}, nil
}

func (te *TengoEntity) GetField(args ...tengo.Object) (tengo.Object, error) {
	if len(args) < 1 {
		return tengo.UndefinedValue, tengo.ErrWrongNumArguments
	}

	fieldId, ok := tengo.ToString(args[0])
	if !ok {
		return tengo.UndefinedValue, &tengo.ErrInvalidArgumentType{
			Name:     "fieldId",
			Expected: "string",
			Found:    args[0].TypeName(),
		}
	}

	f := te.entity.GetField(fieldId)

	return NewTengoField(f).ToTengoMap(), nil
}

func (tf *TengoField) ToTengoMap() tengo.Object {
	return &tengo.Map{
		Value: map[string]tengo.Object{
			"pullInt": &tengo.UserFunction{
				Name:  "pullInt",
				Value: tf.PullInt,
			},
			"pullFloat": &tengo.UserFunction{
				Name:  "pullFloat",
				Value: tf.PullFloat,
			},
			"pullString": &tengo.UserFunction{
				Name:  "pullString",
				Value: tf.PullString,
			},
			"pullBool": &tengo.UserFunction{
				Name:  "pullBool",
				Value: tf.PullBool,
			},
			"pullBinaryFile": &tengo.UserFunction{
				Name:  "pullBinaryFile",
				Value: tf.PullBinaryFile,
			},
			"pullEntityReference": &tengo.UserFunction{
				Name:  "pullEntityReference",
				Value: tf.PullEntityReference,
			},
			"pullTimestamp": &tengo.UserFunction{
				Name:  "pullTimestamp",
				Value: tf.PullTimestamp,
			},
			"pullWriteTime": &tengo.UserFunction{
				Name:  "pullWriteTime",
				Value: tf.PullWriteTime,
			},
			"pullWriter": &tengo.UserFunction{
				Name:  "pullWriter",
				Value: tf.PullWriter,
			},
			"getInt": &tengo.UserFunction{
				Name:  "getInt",
				Value: tf.GetInt,
			},
			"getFloat": &tengo.UserFunction{
				Name:  "getFloat",
				Value: tf.GetFloat,
			},
			"getString": &tengo.UserFunction{
				Name:  "getString",
				Value: tf.GetString,
			},
			"getBool": &tengo.UserFunction{
				Name:  "getBool",
				Value: tf.GetBool,
			},
			"getBinaryFile": &tengo.UserFunction{
				Name:  "getBinaryFile",
				Value: tf.GetBinaryFile,
			},
			"getEntityReference": &tengo.UserFunction{
				Name:  "getEntityReference",
				Value: tf.GetEntityReference,
			},
			"getTimestamp": &tengo.UserFunction{
				Name:  "getTimestamp",
				Value: tf.GetTimestamp,
			},
			"getWriteTime": &tengo.UserFunction{
				Name:  "getWriteTime",
				Value: tf.GetWriteTime,
			},
			"getWriter": &tengo.UserFunction{
				Name:  "getWriter",
				Value: tf.GetWriter,
			},
			"getId": &tengo.UserFunction{
				Name:  "getId",
				Value: tf.GetId,
			},
			"getName": &tengo.UserFunction{
				Name:  "getName",
				Value: tf.GetName,
			},
			"pushInt": &tengo.UserFunction{
				Name:  "pushInt",
				Value: tf.PushInt,
			},
			"pushFloat": &tengo.UserFunction{
				Name:  "pushFloat",
				Value: tf.PushFloat,
			},
			"pushString": &tengo.UserFunction{
				Name:  "pushString",
				Value: tf.PushString,
			},
			"pushBool": &tengo.UserFunction{
				Name:  "pushBool",
				Value: tf.PushBool,
			},
			"pushBinaryFile": &tengo.UserFunction{
				Name:  "pushBinaryFile",
				Value: tf.PushBinaryFile,
			},
			"pushEntityReference": &tengo.UserFunction{
				Name:  "pushEntityReference",
				Value: tf.PushEntityReference,
			},
			"pushTimestamp": &tengo.UserFunction{
				Name:  "pushTimestamp",
				Value: tf.PushTimestamp,
			},
		},
	}
}

func (tf *TengoField) PullInt(...tengo.Object) (tengo.Object, error) {
	return &tengo.Int{Value: tf.field.PullInt()}, nil
}

func (tf *TengoField) PullFloat(...tengo.Object) (tengo.Object, error) {
	return &tengo.Float{Value: tf.field.PullFloat()}, nil
}

func (tf *TengoField) PullString(...tengo.Object) (tengo.Object, error) {
	return &tengo.String{Value: tf.field.PullString()}, nil
}

func (tf *TengoField) PullBool(...tengo.Object) (tengo.Object, error) {
	if tf.field.PullBool() {
		return tengo.TrueValue, nil
	}

	return tengo.FalseValue, nil
}

func (tf *TengoField) PullBinaryFile(...tengo.Object) (tengo.Object, error) {
	return &tengo.String{Value: tf.field.PullBinaryFile()}, nil
}

func (tf *TengoField) PullEntityReference(...tengo.Object) (tengo.Object, error) {
	return &tengo.String{Value: tf.field.PullEntityReference()}, nil
}

func (tf *TengoField) PullTimestamp(...tengo.Object) (tengo.Object, error) {
	return &tengo.Time{Value: tf.field.PullTimestamp()}, nil
}

func (tf *TengoField) PullWriteTime(...tengo.Object) (tengo.Object, error) {
	return &tengo.Time{Value: tf.field.PullWriteTime()}, nil
}

func (tf *TengoField) PullWriter(...tengo.Object) (tengo.Object, error) {
	return &tengo.String{Value: tf.field.PullWriter()}, nil
}

func (tf *TengoField) GetInt(...tengo.Object) (tengo.Object, error) {
	return &tengo.Int{Value: tf.field.GetInt()}, nil
}

func (tf *TengoField) GetFloat(...tengo.Object) (tengo.Object, error) {
	return &tengo.Float{Value: tf.field.GetFloat()}, nil
}

func (tf *TengoField) GetString(...tengo.Object) (tengo.Object, error) {
	return &tengo.String{Value: tf.field.GetString()}, nil
}

func (tf *TengoField) GetBool(...tengo.Object) (tengo.Object, error) {
	if tf.field.GetBool() {
		return tengo.TrueValue, nil
	}

	return tengo.FalseValue, nil
}

func (tf *TengoField) GetBinaryFile(...tengo.Object) (tengo.Object, error) {
	return &tengo.String{Value: tf.field.GetBinaryFile()}, nil
}

func (tf *TengoField) GetEntityReference(...tengo.Object) (tengo.Object, error) {
	return &tengo.String{Value: tf.field.GetEntityReference()}, nil
}

func (tf *TengoField) GetTimestamp(...tengo.Object) (tengo.Object, error) {
	return &tengo.Time{Value: tf.field.GetTimestamp()}, nil
}

func (tf *TengoField) GetWriteTime(...tengo.Object) (tengo.Object, error) {
	return &tengo.Time{Value: tf.field.GetWriteTime()}, nil
}

func (tf *TengoField) GetWriter(...tengo.Object) (tengo.Object, error) {
	return &tengo.String{Value: tf.field.GetWriter()}, nil
}

func (tf *TengoField) GetId(...tengo.Object) (tengo.Object, error) {
	return &tengo.String{Value: tf.field.GetId()}, nil
}

func (tf *TengoField) GetName(...tengo.Object) (tengo.Object, error) {
	return &tengo.String{Value: tf.field.GetName()}, nil
}

func (tf *TengoField) PushInt(args ...tengo.Object) (tengo.Object, error) {
	if len(args) < 1 {
		return tengo.UndefinedValue, tengo.ErrWrongNumArguments
	}

	i, ok := tengo.ToInt(args[0])
	if !ok {
		return tengo.UndefinedValue, &tengo.ErrInvalidArgumentType{
			Name:     "i",
			Expected: "int",
			Found:    args[0].TypeName(),
		}
	}

	tf.field.PushInt(i)
	return tengo.UndefinedValue, nil
}

func (tf *TengoField) PushFloat(args ...tengo.Object) (tengo.Object, error) {
	if len(args) < 1 {
		return tengo.UndefinedValue, tengo.ErrWrongNumArguments
	}

	f, ok := tengo.ToFloat64(args[0])
	if !ok {
		return tengo.UndefinedValue, &tengo.ErrInvalidArgumentType{
			Name:     "f",
			Expected: "float",
			Found:    args[0].TypeName(),
		}
	}

	tf.field.PushFloat(f)
	return tengo.UndefinedValue, nil
}

func (tf *TengoField) PushString(args ...tengo.Object) (tengo.Object, error) {
	if len(args) < 1 {
		return tengo.UndefinedValue, tengo.ErrWrongNumArguments
	}

	s, ok := tengo.ToString(args[0])
	if !ok {
		return tengo.UndefinedValue, &tengo.ErrInvalidArgumentType{
			Name:     "s",
			Expected: "string",
			Found:    args[0].TypeName(),
		}
	}

	tf.field.PushString(s)
	return tengo.UndefinedValue, nil
}

func (tf *TengoField) PushBool(args ...tengo.Object) (tengo.Object, error) {
	if len(args) < 1 {
		return tengo.UndefinedValue, tengo.ErrWrongNumArguments
	}

	b, ok := tengo.ToBool(args[0])
	if !ok {
		return tengo.UndefinedValue, &tengo.ErrInvalidArgumentType{
			Name:     "b",
			Expected: "bool",
			Found:    args[0].TypeName(),
		}
	}

	tf.field.PushBool(b)
	return tengo.UndefinedValue, nil
}

func (tf *TengoField) PushBinaryFile(args ...tengo.Object) (tengo.Object, error) {
	if len(args) < 1 {
		return tengo.UndefinedValue, tengo.ErrWrongNumArguments
	}

	b, ok := tengo.ToString(args[0])
	if !ok {
		return tengo.UndefinedValue, &tengo.ErrInvalidArgumentType{
			Name:     "b",
			Expected: "string",
			Found:    args[0].TypeName(),
		}
	}

	tf.field.PushBinaryFile(b)
	return tengo.UndefinedValue, nil
}

func (tf *TengoField) PushEntityReference(args ...tengo.Object) (tengo.Object, error) {
	if len(args) < 1 {
		return tengo.UndefinedValue, tengo.ErrWrongNumArguments
	}

	e, ok := tengo.ToString(args[0])
	if !ok {
		return tengo.UndefinedValue, &tengo.ErrInvalidArgumentType{
			Name:     "e",
			Expected: "string",
			Found:    args[0].TypeName(),
		}
	}

	tf.field.PushEntityReference(e)
	return tengo.UndefinedValue, nil
}

func (tf *TengoField) PushTimestamp(args ...tengo.Object) (tengo.Object, error) {
	if len(args) < 1 {
		return tengo.UndefinedValue, tengo.ErrWrongNumArguments
	}

	t, ok := tengo.ToTime(args[0])
	if !ok {
		return tengo.UndefinedValue, &tengo.ErrInvalidArgumentType{
			Name:     "t",
			Expected: "time",
			Found:    args[0].TypeName(),
		}
	}

	tf.field.PushTimestamp(t)
	return tengo.UndefinedValue, nil
}
