package qmq

import (
	"context"
	"encoding/base64"

	"github.com/google/uuid"
	"github.com/redis/go-redis/v9"
	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/types/known/anypb"
	"google.golang.org/protobuf/types/known/timestamppb"
)

type IDatabase interface {
	Connect()
	Disconnect()

	CreateEntity(entityType, parentId, name string)
	DeleteEntity(entityId string)

	FindEntities(entityType string) []string

	EntityExists(entityId string) bool
	FieldExists(fieldName, entityType string) bool

	GetFieldSchema(fieldName string) *DatabaseFieldSchema
	SetFieldSchema(fieldName string, value *DatabaseFieldSchema)

	GetEntitySchema(entityType string) *DatabaseEntitySchema
	SetEntitySchema(entityType string, value *DatabaseEntitySchema)

	Read(requests []*DatabaseRequest)
	Write(requests []*DatabaseRequest)

	Notify(config *DatabaseNotificationConfig, callback func(*DatabaseNotification)) string
	Unnotify(subscriptionId string)
}

type RedisDatabaseConfig struct {
	Address  string
	Password string
}

// schema:entity:<type> -> DatabaseEntitySchema
// schema:field:<name> -> DatabaseFieldSchema
// instance:entity:<entityId> -> DatabaseEntity
// instance:field:<name>:<entityId> -> DatabaseField
// instance:type:<entityType> -> []string{entityId...}
// instance:notification:<entityId>:<fieldName> -> []string{subscriptionId...}
// instance:notification:<entityType>:<fieldName> -> []string{subscriptionId...}
type RedisDatabaseKeyGenerator struct{}

func (g *RedisDatabaseKeyGenerator) GetEntitySchemaKey(entityType string) string {
	return "schema:entity:" + entityType
}

func (g *RedisDatabaseKeyGenerator) GetFieldSchemaKey(fieldName string) string {
	return "schema:field:" + fieldName
}

func (g *RedisDatabaseKeyGenerator) GetEntityKey(entityId string) string {
	return "instance:entity:" + entityId
}

func (g *RedisDatabaseKeyGenerator) GetFieldKey(fieldName, entityId string) string {
	return "instance:field:" + fieldName + ":" + entityId
}

func (g *RedisDatabaseKeyGenerator) GetEntityTypeKey(entityType string) string {
	return "instance:type:" + entityType
}

func (g *RedisDatabaseKeyGenerator) GetEntityIdNotificationKey(entityId, fieldName string) string {
	return "instance:notification:" + entityId + ":" + fieldName
}

func (g *RedisDatabaseKeyGenerator) GetEntityTypeNotificationKey(entityType, fieldName string) string {
	return "instance:notification:" + entityType + ":" + fieldName
}

type RedisDatabase struct {
	client    *redis.Client
	config    RedisDatabaseConfig
	callbacks map[string]func(*DatabaseNotification)
	keygen    RedisDatabaseKeyGenerator
}

func (db *RedisDatabase) Connect() {
	db.Disconnect()

	db.client = redis.NewClient(&redis.Options{
		Addr:     db.config.Address,
		Password: db.config.Password,
		DB:       0,
	})
}

func (db *RedisDatabase) Disconnect() {
	if db.client == nil {
		return
	}

	db.client.Close()
	db.client = nil
}

func (db *RedisDatabase) CreateEntity(entityType, parentId, name string) {
	entityId := uuid.New().String()

	requests := []*DatabaseRequest{}
	for _, fieldName := range db.GetEntitySchema(entityType).Fields {
		requests = append(requests, &DatabaseRequest{
			Id:    entityId,
			Field: fieldName,
		})
	}
	db.Write(requests)

	p := &DatabaseEntity{
		Id:          entityId,
		Name:        name,
		ParentId:    parentId,
		Type:        entityType,
		ChildrenIds: []string{},
	}
	b, err := proto.Marshal(p)
	if err != nil {
		return
	}

	db.client.SAdd(context.Background(), db.keygen.GetEntityTypeKey(entityType), entityId)
	db.client.Set(context.Background(), db.keygen.GetEntityKey(entityId), b, 0)
}

func (db *RedisDatabase) DeleteEntity(entityId string) {
	e, err := db.client.Get(context.Background(), db.keygen.GetEntityKey(entityId)).Result()
	if err != nil {
		return
	}
	b, err := base64.StdEncoding.DecodeString(e)
	if err != nil {
		return
	}
	p := &DatabaseEntity{}
	err = proto.Unmarshal(b, p)
	if err != nil {
		return
	}

	for _, childrenId := range p.ChildrenIds {
		db.DeleteEntity(childrenId)
	}

	for _, fieldName := range db.GetEntitySchema(p.Type).Fields {
		db.client.Del(context.Background(), db.keygen.GetFieldKey(fieldName, entityId))
	}

	db.client.SRem(context.Background(), db.keygen.GetEntityTypeKey(p.Type), entityId)
	db.client.Del(context.Background(), db.keygen.GetEntityKey(entityId))
}

func (db *RedisDatabase) FindEntities(entityType string) []string {
	return db.client.SMembers(context.Background(), db.keygen.GetEntityTypeKey(entityType)).Val()
}

func (db *RedisDatabase) EntityExists(entityId string) bool {
	e, err := db.client.Get(context.Background(), db.keygen.GetEntityKey(entityId)).Result()
	if err != nil {
		return false
	}

	return e != ""
}

func (db *RedisDatabase) FieldExists(fieldName, entityTypeOrId string) bool {
	schema := db.GetEntitySchema(entityTypeOrId)
	if schema != nil {
		for _, field := range schema.Fields {
			if field == fieldName {
				return true
			}
		}

		return false
	}

	request := &DatabaseRequest{
		Id:    entityTypeOrId,
		Field: fieldName,
	}
	db.Read([]*DatabaseRequest{request})

	return request.Success
}

func (db *RedisDatabase) GetFieldSchema(fieldName string) *DatabaseFieldSchema {
	e, err := db.client.Get(context.Background(), db.keygen.GetFieldSchemaKey(fieldName)).Result()
	if err != nil {
		return nil
	}

	b, err := base64.StdEncoding.DecodeString(e)
	if err != nil {
		return nil
	}

	a := &DatabaseFieldSchema{}
	err = proto.Unmarshal(b, a)
	if err != nil {
		return nil
	}

	return a
}

func (db *RedisDatabase) SetFieldSchema(fieldName string, value *DatabaseFieldSchema) {
	a, err := anypb.New(value)
	if err != nil {
		return
	}

	b, err := proto.Marshal(a)
	if err != nil {
		return
	}

	db.client.Set(context.Background(), db.keygen.GetFieldSchemaKey(fieldName), base64.StdEncoding.EncodeToString(b), 0)
}

func (db *RedisDatabase) GetEntitySchema(entityType string) *DatabaseEntitySchema {
	e, err := db.client.Get(context.Background(), db.keygen.GetEntitySchemaKey(entityType)).Result()
	if err != nil {
		return nil
	}

	b, err := base64.StdEncoding.DecodeString(e)
	if err != nil {
		return nil
	}

	p := &DatabaseEntitySchema{}
	err = proto.Unmarshal(b, p)
	if err != nil {
		return nil
	}

	return p
}

func (db *RedisDatabase) SetEntitySchema(entityType string, value *DatabaseEntitySchema) {
	b, err := proto.Marshal(value)
	if err != nil {
		return
	}

	db.client.Set(context.Background(), db.keygen.GetEntitySchemaKey(entityType), base64.StdEncoding.EncodeToString(b), 0)
}

func (db *RedisDatabase) Read(requests []*DatabaseRequest) {
	for _, request := range requests {
		request.Success = false

		e, err := db.client.Get(context.Background(), db.keygen.GetFieldKey(request.Field, request.Id)).Result()
		if err != nil {
			continue
		}

		b, err := base64.StdEncoding.DecodeString(e)
		if err != nil {
			continue
		}

		p := &DatabaseField{}
		err = proto.Unmarshal(b, p)
		if err != nil {
			continue
		}

		request.Value = p.Value
		request.WriteTime.Raw = p.WriteTime
		request.WriterId.Raw = p.WriterId
		request.Success = true
	}
}

func (db *RedisDatabase) Write(requests []*DatabaseRequest) {
	for _, request := range requests {
		request.Success = false

		schema := db.GetFieldSchema(request.Field)
		if request.Value == nil || request.Value.TypeUrl != schema.Type {
			request.Value = &anypb.Any{
				TypeUrl: schema.Type,
				Value:   []byte{},
			}
		}

		if request.WriteTime == nil {
			request.WriteTime = &Timestamp{Raw: timestamppb.Now()}
		}

		if request.WriterId == nil {
			request.WriterId = &String{Raw: ""}
		}

		p := &DatabaseField{
			Id:        request.Id,
			Name:      request.Field,
			Value:     request.Value,
			WriteTime: request.WriteTime.Raw,
			WriterId:  request.WriterId.Raw,
		}

		b, err := proto.Marshal(p)
		if err != nil {
			continue
		}

		_, err = db.client.Set(context.Background(), db.keygen.GetFieldKey(request.Field, request.Id), base64.StdEncoding.EncodeToString(b), 0).Result()
		if err != nil {
			continue
		}
		request.Success = true
	}
}

func (db *RedisDatabase) Notify(notification *DatabaseNotificationConfig, callback func(*DatabaseNotification)) string {
	b, err := proto.Marshal(notification)
	if err != nil {
		return ""
	}

	e := base64.StdEncoding.EncodeToString(b)

	if db.FieldExists(notification.Field, notification.Id) {
		db.client.SAdd(context.Background(), db.keygen.GetEntityIdNotificationKey(notification.Id, notification.Field), e)
		db.callbacks[e] = callback
		return e
	}

	if db.FieldExists(notification.Field, notification.Type) {
		db.client.SAdd(context.Background(), db.keygen.GetEntityTypeNotificationKey(notification.Type, notification.Field), e)
		db.callbacks[e] = callback
		return e
	}

	return ""
}

func (db *RedisDatabase) Unnotify(subscriptionId string) {
	if db.callbacks[subscriptionId] == nil {
		return
	}

	delete(db.callbacks, subscriptionId)
}
