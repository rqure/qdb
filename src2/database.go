package qmq

import (
	"context"
	"encoding/base64"

	"github.com/google/uuid"
	"github.com/redis/go-redis/v9"
	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/types/known/anypb"
)

type IDatabase interface {
	Connect()
	Disconnect()

	CreateEntity(entityType, parentId, name string)
	DeleteEntity(entityId string)

	FindEntities(entityType string) []string

	GetEntityFieldType(fieldName string) *anypb.Any
	SetEntityFieldType(fieldName string, value proto.Message)

	GetEntityDefinition(entityType string) EntityDefinition
	SetEntityDefinition(entityType string, definition EntityDefinition)

	ReadEntityFields(requests []EntityRequest)
	WriteEntityFields(requests []EntityRequest)

	SubscribeOnFieldChanges(entityIdOrEntityType string, entityField string, change bool, contextFields []string, callback func(EntityFieldNotification)) string
	UnsubscribeFromFieldChanges(subscriptionId string)
}

type RedisDatabaseConfig struct {
	Address  string
	Password string
}

type RedisDatabase struct {
	client *redis.Client
	config RedisDatabaseConfig
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

	requests := []EntityRequest{}
	for _, fieldName := range db.GetEntityDefinition(entityType).EntityFieldNames {
		requests = append(requests, EntityRequest{
			EntityId:  entityId,
			FieldName: fieldName,
			Value:     db.GetEntityFieldType(fieldName),
		})
	}
	db.WriteEntityFields(requests)
}

func (db *RedisDatabase) DeleteEntity(entityId string) {

}

func (db *RedisDatabase) FindEntities(entityType string) []string {

}

func (db *RedisDatabase) GetEntityFieldType(fieldName string) *anypb.Any {
	a := &anypb.Any{}
	e, err := db.client.Get(context.Background(), "schema:fieldType:"+fieldName).Result()
	if err != nil {
		return a
	}

	b, err := base64.StdEncoding.DecodeString(e)
	if err != nil {
		return a
	}

	proto.Unmarshal(b, a)
	return a
}

func (db *RedisDatabase) SetEntityFieldType(fieldName string, value proto.Message) {
	a, err := anypb.New(value)
	if err != nil {
		return
	}

	b, err := proto.Marshal(a)
	if err != nil {
		return
	}

	db.client.Set(context.Background(), "schema:fieldType:"+fieldName, base64.StdEncoding.EncodeToString(b), 0)
}

func (db *RedisDatabase) GetEntityDefinition(entityType string) EntityDefinition {

}

func (db *RedisDatabase) SetEntityDefinition(entityType string, definition EntityDefinition) {

}

func (db *RedisDatabase) ReadEntityFields(requests []EntityRequest) {

}

func (db *RedisDatabase) WriteEntityFields(requests []EntityRequest) {

}

func (db *RedisDatabase) SubscribeOnFieldChanges(entityIdOrEntityType string, entityField string, change bool, contextFields []string, callback func(EntityFieldNotification)) string {

}

func (db *RedisDatabase) UnsubscribeFromFieldChanges(subscriptionId string) {

}
