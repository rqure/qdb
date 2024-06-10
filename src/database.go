package qmq

import (
	"context"
	"encoding/base64"
	"strings"

	"github.com/google/uuid"
	"github.com/redis/go-redis/v9"
	"google.golang.org/protobuf/proto"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	"google.golang.org/protobuf/reflect/protoregistry"
	"google.golang.org/protobuf/types/known/anypb"
	"google.golang.org/protobuf/types/known/timestamppb"
)

type IDatabase interface {
	Connect()
	Disconnect()
	IsConnected() bool

	CreateEntity(entityType, parentId, name string)
	GetEntity(entityId string) *DatabaseEntity
	SetEntity(entityId string, value *DatabaseEntity)
	DeleteEntity(entityId string)

	FindEntities(entityType string) []string
	GetEntityTypes() []string

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
	ProcessNotifications()
}

type RedisDatabaseConfig struct {
	Address  string
	Password string
}

func (r *DatabaseRequest) FromField(field *DatabaseField) *DatabaseRequest {
	r.Id = field.Id
	r.Field = field.Name
	r.Value = field.Value
	r.WriteTime.Raw = field.WriteTime
	r.WriterId.Raw = field.WriterId
	return r
}

func (f *DatabaseField) FromRequest(request *DatabaseRequest) *DatabaseField {
	f.Name = request.Field
	f.Id = request.Id
	f.Value = request.Value
	f.WriteTime = request.WriteTime.Raw
	f.WriterId = request.WriterId.Raw
	return f
}

// schema:entity:<type> -> DatabaseEntitySchema
// schema:field:<name> -> DatabaseFieldSchema
// instance:entity:<entityId> -> DatabaseEntity
// instance:field:<name>:<entityId> -> DatabaseField
// instance:type:<entityType> -> []string{entityId...}
// instance:notification-config:<entityId>:<fieldName> -> []string{subscriptionId...}
// instance:notification-config:<entityType>:<fieldName> -> []string{subscriptionId...}
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

func (g *RedisDatabaseKeyGenerator) GetEntityIdNotificationConfigKey(entityId, fieldName string) string {
	return "instance:notification-config:" + entityId + ":" + fieldName
}

func (g *RedisDatabaseKeyGenerator) GetEntityTypeNotificationConfigKey(entityType, fieldName string) string {
	return "instance:notification-config:" + entityType + ":" + fieldName
}

func (g *RedisDatabaseKeyGenerator) GetNotificationChannelKey(marshalledNotificationConfig string) string {
	return "instance:notification:" + marshalledNotificationConfig
}

type RedisDatabase struct {
	client    *redis.Client
	config    RedisDatabaseConfig
	callbacks map[string]func(*DatabaseNotification)
	lastIds   map[string]string
	keygen    RedisDatabaseKeyGenerator
}

func NewRedisDatabase(config RedisDatabaseConfig) IDatabase {
	return &RedisDatabase{
		config:    config,
		callbacks: map[string]func(*DatabaseNotification){},
		keygen:    RedisDatabaseKeyGenerator{},
	}
}

func (db *RedisDatabase) Connect() {
	db.Disconnect()

	Info("[RedisDatabase::Connect] Connecting to %v", db.config.Address)
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

func (db *RedisDatabase) IsConnected() bool {
	return db.client != nil && db.client.Ping(context.Background()).Err() == nil
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
		Id:       entityId,
		Name:     name,
		Parent:   &EntityReference{Id: parentId},
		Type:     entityType,
		Children: []*EntityReference{},
	}
	b, err := proto.Marshal(p)
	if err != nil {
		Error("[RedisDatabase::CreateEntity] Failed to marshal entity: %v", err)
		return
	}

	db.client.SAdd(context.Background(), db.keygen.GetEntityTypeKey(entityType), entityId)
	db.client.Set(context.Background(), db.keygen.GetEntityKey(entityId), b, 0)

	if parentId != "" {
		parent := db.GetEntity(parentId)
		if parent != nil {
			parent.Children = append(parent.Children, &EntityReference{Id: entityId})
			db.SetEntity(parentId, parent)
		} else {
			Error("[RedisDatabase::CreateEntity] Failed to get parent entity: %v", parentId)
		}
	}
}

func (db *RedisDatabase) GetEntity(entityId string) *DatabaseEntity {
	e, err := db.client.Get(context.Background(), db.keygen.GetEntityKey(entityId)).Result()
	if err != nil {
		Error("[RedisDatabase::GetEntity] Failed to get entity: %v", err)
		return nil
	}

	b, err := base64.StdEncoding.DecodeString(e)
	if err != nil {
		Error("[RedisDatabase::GetEntity] Failed to decode entity: %v", err)
		return nil
	}

	p := &DatabaseEntity{}
	err = proto.Unmarshal(b, p)
	if err != nil {
		Error("[RedisDatabase::GetEntity] Failed to unmarshal entity: %v", err)
		return nil
	}

	return p
}

func (db *RedisDatabase) SetEntity(entityId string, value *DatabaseEntity) {
	b, err := proto.Marshal(value)
	if err != nil {
		Error("[RedisDatabase::SetEntity] Failed to marshal entity: %v", err)
		return
	}

	err = db.client.Set(context.Background(), db.keygen.GetEntityKey(entityId), base64.StdEncoding.EncodeToString(b), 0).Err()
	if err != nil {
		Error("[RedisDatabase::SetEntity] Failed to set entity '%s': %v", entityId, err)
		return
	}
}

func (db *RedisDatabase) DeleteEntity(entityId string) {
	p := db.GetEntity(entityId)
	if p == nil {
		Error("[RedisDatabase::DeleteEntity] Failed to get entity: %v", entityId)
		return
	}

	parent := db.GetEntity(p.Parent.Id)
	if parent != nil {
		newChildren := []*EntityReference{}
		for _, child := range parent.Children {
			if child.Id != entityId {
				newChildren = append(newChildren, child)
			}
		}
		parent.Children = newChildren
		db.SetEntity(p.Parent.Id, parent)
	}

	for _, child := range p.Children {
		db.DeleteEntity(child.Id)
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
		Error("[RedisDatabase::GetFieldSchema] Failed to get field schema: %v", err)
		return nil
	}

	b, err := base64.StdEncoding.DecodeString(e)
	if err != nil {
		Error("[RedisDatabase::GetFieldSchema] Failed to decode field schema: %v", err)
		return nil
	}

	a := &DatabaseFieldSchema{}
	err = proto.Unmarshal(b, a)
	if err != nil {
		Error("[RedisDatabase::GetFieldSchema] Failed to unmarshal field schema: %v", err)
		return nil
	}

	return a
}

func (db *RedisDatabase) SetFieldSchema(fieldName string, value *DatabaseFieldSchema) {
	a, err := anypb.New(value)
	if err != nil {
		Error("[RedisDatabase::SetFieldSchema] Failed to create anypb: %v", err)
		return
	}

	b, err := proto.Marshal(a)
	if err != nil {
		Error("[RedisDatabase::SetFieldSchema] Failed to marshal field schema: %v", err)
		return
	}

	db.client.Set(context.Background(), db.keygen.GetFieldSchemaKey(fieldName), base64.StdEncoding.EncodeToString(b), 0)
}

func (db *RedisDatabase) GetEntityTypes() []string {
	it := db.client.Scan(context.Background(), 0, db.keygen.GetEntityTypeKey("*"), 0).Iterator()
	types := []string{}

	for it.Next(context.Background()) {
		types = append(types, strings.ReplaceAll(it.Val(), db.keygen.GetEntityTypeKey(""), ""))
	}

	return types
}

func (db *RedisDatabase) GetEntitySchema(entityType string) *DatabaseEntitySchema {
	e, err := db.client.Get(context.Background(), db.keygen.GetEntitySchemaKey(entityType)).Result()
	if err != nil {
		Error("[RedisDatabase::GetEntitySchema] Failed to get entity schema: %v", err)
		return nil
	}

	b, err := base64.StdEncoding.DecodeString(e)
	if err != nil {
		Error("[RedisDatabase::GetEntitySchema] Failed to decode entity schema: %v", err)
		return nil
	}

	p := &DatabaseEntitySchema{}
	err = proto.Unmarshal(b, p)
	if err != nil {
		Error("[RedisDatabase::GetEntitySchema] Failed to unmarshal entity schema: %v", err)
		return nil
	}

	return p
}

func (db *RedisDatabase) SetEntitySchema(entityType string, value *DatabaseEntitySchema) {
	b, err := proto.Marshal(value)
	if err != nil {
		Error("[RedisDatabase::SetEntitySchema] Failed to marshal entity schema: %v", err)
		return
	}

	db.client.Set(context.Background(), db.keygen.GetEntitySchemaKey(entityType), base64.StdEncoding.EncodeToString(b), 0)
}

func (db *RedisDatabase) Read(requests []*DatabaseRequest) {
	for _, request := range requests {
		request.Success = false

		e, err := db.client.Get(context.Background(), db.keygen.GetFieldKey(request.Field, request.Id)).Result()
		if err != nil {
			Error("[RedisDatabase::Read] Failed to read field: %v", err)
			continue
		}

		b, err := base64.StdEncoding.DecodeString(e)
		if err != nil {
			Error("[RedisDatabase::Read] Failed to decode field: %v", err)
			continue
		}

		p := &DatabaseField{}
		err = proto.Unmarshal(b, p)
		if err != nil {
			Error("[RedisDatabase::Read] Failed to unmarshal field: %v", err)
			continue
		}

		request.FromField(p)
		request.Success = true
	}
}

func (db *RedisDatabase) Write(requests []*DatabaseRequest) {
	for _, request := range requests {
		request.Success = false

		schema := db.GetFieldSchema(request.Field)
		sampleType, err := protoregistry.GlobalTypes.FindMessageByName(protoreflect.FullName(schema.Type))
		if err != nil {
			Error("[RedisDatabase::Write] Failed to find message type: %v", err)
			continue
		}

		if request.Value == nil {
			if request.Value, err = anypb.New(sampleType.New().Interface()); err != nil {
				Error("[RedisDatabase::Write] Failed to create anypb: %v", err)
				continue
			}
		} else {
			sampleAnyType, err := anypb.New(sampleType.New().Interface())
			if err != nil {
				Error("[RedisDatabase::Write] Failed to create anypb: %v", err)
				continue
			}

			if request.Value.TypeUrl != sampleAnyType.TypeUrl {
				Warn("[RedisDatabase::Write] Field type mismatch: %v != %v. Overwritting...", request.Value.TypeUrl, sampleAnyType.TypeUrl)
				request.Value = sampleAnyType
			}
		}

		if request.WriteTime == nil {
			request.WriteTime = &Timestamp{Raw: timestamppb.Now()}
		}

		if request.WriterId == nil {
			request.WriterId = &String{Raw: ""}
		}

		p := new(DatabaseField).FromRequest(request)

		b, err := proto.Marshal(p)
		if err != nil {
			Error("[RedisDatabase::Write] Failed to marshal field: %v", err)
			continue
		}

		db.triggerNotifications(request)

		_, err = db.client.Set(context.Background(), db.keygen.GetFieldKey(request.Field, request.Id), base64.StdEncoding.EncodeToString(b), 0).Result()
		if err != nil {
			Error("[RedisDatabase::Write] Failed to write field: %v", err)
			continue
		}
		request.Success = true
	}
}

func (db *RedisDatabase) Notify(notification *DatabaseNotificationConfig, callback func(*DatabaseNotification)) string {
	b, err := proto.Marshal(notification)
	if err != nil {
		Error("[RedisDatabase::Notify] Failed to marshal notification config: %v", err)
		return ""
	}

	e := base64.StdEncoding.EncodeToString(b)

	if db.FieldExists(notification.Field, notification.Id) {
		db.client.SAdd(context.Background(), db.keygen.GetEntityIdNotificationConfigKey(notification.Id, notification.Field), e)
		db.callbacks[e] = callback
		db.lastIds[e] = "$"
		return e
	}

	if db.FieldExists(notification.Field, notification.Type) {
		db.client.SAdd(context.Background(), db.keygen.GetEntityTypeNotificationConfigKey(notification.Type, notification.Field), e)
		db.callbacks[e] = callback
		db.lastIds[e] = "$"
		return e
	}

	Warn("[RedisDatabase::Notify] Failed to find field: %v", notification)
	return ""
}

func (db *RedisDatabase) Unnotify(e string) {
	if db.callbacks[e] == nil {
		Warn("[RedisDatabase::Unnotify] Failed to find callback: %v", e)
		return
	}

	delete(db.callbacks, e)
	delete(db.lastIds, e)
}

func (db *RedisDatabase) ProcessNotifications() {
	for e := range db.callbacks {
		r, err := db.client.XRead(context.Background(), &redis.XReadArgs{
			Streams: []string{db.keygen.GetNotificationChannelKey(e), db.lastIds[e]},
			Count:   100,
			Block:   -1,
		}).Result()

		if err != nil {
			Error("[RedisDatabase::ProcessNotifications] Failed to read stream %v: %v", e, err)
			continue
		}

		for _, x := range r {
			for _, m := range x.Messages {
				db.lastIds[e] = m.ID
				decodedMessage := make(map[string]string)

				for key, value := range m.Values {
					if castedValue, ok := value.(string); ok {
						decodedMessage[key] = castedValue
					} else {
						Error("[RedisDatabase::ProcessNotifications] Failed to cast value: %v", value)
						continue
					}
				}

				if data, ok := decodedMessage["data"]; ok {
					p, err := base64.StdEncoding.DecodeString(data)
					if err != nil {
						Error("[RedisDatabase::ProcessNotifications] Failed to decode notification: %v", err)
						continue
					}

					n := &DatabaseNotification{}
					err = proto.Unmarshal(p, n)
					if err != nil {
						Error("[RedisDatabase::ProcessNotifications] Failed to unmarshal notification: %v", err)
						continue
					}

					db.callbacks[e](n)
				}
			}
		}
	}
}

func (db *RedisDatabase) triggerNotifications(request *DatabaseRequest) {
	oldRequest := &DatabaseRequest{
		Id:    request.Id,
		Field: request.Field,
	}
	db.Read([]*DatabaseRequest{oldRequest})

	// failed to read old value (it may not exist initially)
	if !oldRequest.Success {
		Warn("[RedisDatabase::triggerNotifications] Failed to read old value: %v", oldRequest)
		return
	}

	changed := func(a, b *DatabaseRequest) bool {
		if a.Value != nil && b.Value != nil && len(a.Value.Value) != len(b.Value.Value) {
			for i := range a.Value.Value {
				if a.Value.Value[i] != b.Value.Value[i] {
					return true
				}
			}
		}

		return false
	}(oldRequest, request)

	m, err := db.client.SMembers(context.Background(), db.keygen.GetEntityIdNotificationConfigKey(request.Field, request.Id)).Result()
	if err != nil {
		Error("[RedisDatabase::triggerNotifications] Failed to get notification config: %v", err)
		return
	}

	for _, e := range m {
		b, err := base64.StdEncoding.DecodeString(e)
		if err != nil {
			Error("[RedisDatabase::triggerNotifications] Failed to decode notification config: %v", err)
			continue
		}

		p := &DatabaseNotificationConfig{}
		err = proto.Unmarshal(b, p)
		if err != nil {
			Error("[RedisDatabase::triggerNotifications] Failed to unmarshal notification config: %v", err)
			continue
		}

		if p.NotifyOnChange && !changed {
			continue
		}

		n := &DatabaseNotification{}
		n.Current.FromRequest(request)
		n.Previous.FromRequest(oldRequest)

		for _, context := range p.ContextFields {
			contextRequest := &DatabaseRequest{
				Id:    request.Id,
				Field: context,
			}
			db.Read([]*DatabaseRequest{contextRequest})
			if contextRequest.Success {
				n.Context = append(n.Context, new(DatabaseField).FromRequest(contextRequest))
			}
		}

		b, err = proto.Marshal(n)
		if err != nil {
			Error("[RedisDatabase::triggerNotifications] Failed to marshal notification: %v", err)
			continue
		}

		_, err = db.client.XAdd(context.Background(), &redis.XAddArgs{
			Stream: db.keygen.GetNotificationChannelKey(e),
			Values: []string{"data", base64.StdEncoding.EncodeToString(b)},
			MaxLen: 100,
			Approx: true,
		}).Result()
		if err != nil {
			Error("[RedisDatabase::triggerNotifications] Failed to add notification: %v", err)
			continue
		}
	}

	entity := db.GetEntity(request.Id)
	if entity == nil {
		Error("[RedisDatabase::triggerNotifications] Failed to get entity: %v", request.Id)
		return
	}

	m, err = db.client.SMembers(context.Background(), db.keygen.GetEntityTypeNotificationConfigKey(entity.Type, request.Field)).Result()
	if err != nil {
		Error("[RedisDatabase::triggerNotifications] Failed to get notification config: %v", err)
		return
	}

	for _, e := range m {
		b, err := base64.StdEncoding.DecodeString(e)
		if err != nil {
			Error("[RedisDatabase::triggerNotifications] Failed to decode notification config: %v", err)
			continue
		}

		p := &DatabaseNotificationConfig{}
		err = proto.Unmarshal(b, p)
		if err != nil {
			Error("[RedisDatabase::triggerNotifications] Failed to unmarshal notification config: %v", err)
			continue
		}

		if p.NotifyOnChange && !changed {
			continue
		}

		n := &DatabaseNotification{}
		n.Current.FromRequest(request)
		n.Previous.FromRequest(oldRequest)

		for _, context := range p.ContextFields {
			contextRequest := &DatabaseRequest{
				Id:    request.Id,
				Field: context,
			}
			db.Read([]*DatabaseRequest{contextRequest})
			if contextRequest.Success {
				n.Context = append(n.Context, new(DatabaseField).FromRequest(contextRequest))
			}
		}

		b, err = proto.Marshal(n)
		if err != nil {
			Error("[RedisDatabase::triggerNotifications] Failed to marshal notification: %v", err)
			continue
		}

		_, err = db.client.XAdd(context.Background(), &redis.XAddArgs{
			Stream: db.keygen.GetNotificationChannelKey(e),
			Values: []string{"data", base64.StdEncoding.EncodeToString(b)},
			MaxLen: 100,
			Approx: true,
		}).Result()
		if err != nil {
			Error("[RedisDatabase::triggerNotifications] Failed to add notification: %v", err)
			continue
		}
	}
}
