package qdb

import (
	"os"
	"testing"
	"time"

	"github.com/alicebob/miniredis/v2"
	"github.com/stretchr/testify/assert"
	"google.golang.org/protobuf/types/known/anypb"
	"google.golang.org/protobuf/types/known/timestamppb"
)

func init() {
	os.Setenv("QDB_LOG_LEVEL", "6")
}

func setupTestRedis(t *testing.T) (*RedisDatabase, *miniredis.Miniredis) {
	mr, err := miniredis.Run()
	if err != nil {
		t.Fatal(err)
	}

	db := NewRedisDatabase(RedisDatabaseConfig{
		Address:   mr.Addr(),
		Password:  "",
		ServiceID: func() string { return "test-service" },
	}).(*RedisDatabase)
	db.Connect()

	// Setup basic field schemas that will be needed by most tests
	db.SetFieldSchema("test-field", &DatabaseFieldSchema{
		Name: "test-field",
		Type: "qdb.String",
	})

	db.SetFieldSchema("field1", &DatabaseFieldSchema{
		Name: "field1",
		Type: "qdb.String",
	})

	db.SetFieldSchema("field2", &DatabaseFieldSchema{
		Name: "field2",
		Type: "qdb.Int",
	})

	return db, mr
}

func TestRedisDatabase_Connect(t *testing.T) {
	db, mr := setupTestRedis(t)
	defer mr.Close()

	assert.True(t, db.IsConnected())

	db.Disconnect()
	assert.False(t, db.IsConnected())
}

func TestRedisDatabase_CreateEntity(t *testing.T) {
	db, mr := setupTestRedis(t)
	defer mr.Close()

	// Setup test schema
	schema := &DatabaseEntitySchema{
		Name:   "test-type",
		Fields: []string{"field1", "field2"},
	}
	db.SetEntitySchema("test-type", schema)

	// Create field schemas
	field1Schema := &DatabaseFieldSchema{
		Name: "field1",
		Type: "google.protobuf.StringValue",
	}
	field2Schema := &DatabaseFieldSchema{
		Name: "field2",
		Type: "google.protobuf.Int64Value",
	}
	db.SetFieldSchema("field1", field1Schema)
	db.SetFieldSchema("field2", field2Schema)

	// Test entity creation
	db.CreateEntity("test-type", "", "test-entity")

	// Verify entity exists
	entities := db.FindEntities("test-type")
	assert.Len(t, entities, 1)

	entity := db.GetEntity(entities[0])
	assert.NotNil(t, entity)
	assert.Equal(t, "test-type", entity.Type)
	assert.Equal(t, "test-entity", entity.Name)
}

func TestRedisDatabase_ReadWrite(t *testing.T) {
	db, mr := setupTestRedis(t)
	defer mr.Close()

	// Setup test schema
	schema := &DatabaseEntitySchema{
		Name:   "test-type",
		Fields: []string{"test-field"},
	}
	db.SetEntitySchema("test-type", schema)

	// Create test entity
	db.CreateEntity("test-type", "", "test-entity")
	entities := db.FindEntities("test-type")
	assert.NotEmpty(t, entities, "Should have created an entity")
	entityId := entities[0]

	// Test write
	stringValue := &String{Raw: "test-value"}
	value, err := anypb.New(stringValue)
	assert.NoError(t, err, "Should be able to create Any message")

	writeReq := &DatabaseRequest{
		Id:        entityId,
		Field:     "test-field",
		Value:     value,
		WriteTime: &Timestamp{Raw: timestamppb.Now()},
		WriterId:  &String{Raw: "test-writer"},
	}
	db.Write([]*DatabaseRequest{writeReq})
	assert.True(t, writeReq.Success, "Write should succeed")

	// Test read
	readReq := &DatabaseRequest{
		Id:    entityId,
		Field: "test-field",
	}
	db.Read([]*DatabaseRequest{readReq})
	assert.True(t, readReq.Success, "Read should succeed")

	var readStringValue String
	err = readReq.Value.UnmarshalTo(&readStringValue)
	assert.NoError(t, err, "Should be able to unmarshal value")
	assert.Equal(t, "test-value", readStringValue.Raw)
}

func TestRedisDatabase_DeleteEntity(t *testing.T) {
	db, mr := setupTestRedis(t)
	defer mr.Close()

	// Setup test schema
	schema := &DatabaseEntitySchema{
		Name:   "test-type",
		Fields: []string{"test-field"},
	}
	db.SetEntitySchema("test-type", schema)

	// Create test entity
	db.CreateEntity("test-type", "", "test-entity")
	entities := db.FindEntities("test-type")
	entityId := entities[0]

	// Test delete
	db.DeleteEntity(entityId)

	// Verify entity doesn't exist
	assert.Empty(t, db.FindEntities("test-type"))
	assert.Nil(t, db.GetEntity(entityId))
}

func TestRedisDatabase_Notifications(t *testing.T) {
	db, mr := setupTestRedis(t)
	defer mr.Close()

	// Setup test schema
	schema := &DatabaseEntitySchema{
		Name:   "test-type",
		Fields: []string{"test-field"},
	}
	db.SetEntitySchema("test-type", schema)

	fieldSchema := &DatabaseFieldSchema{
		Name: "test-field",
		Type: "qdb.String", // Changed from google.protobuf.StringValue to qdb.String
	}
	db.SetFieldSchema("test-field", fieldSchema)

	// Create test entity
	db.CreateEntity("test-type", "", "test-entity")
	entities := db.FindEntities("test-type")
	assert.NotEmpty(t, entities, "Should have created an entity")
	entityId := entities[0]

	// Setup notification
	notified := false
	callback := NewNotificationCallback(func(n *DatabaseNotification) {
		notified = true
	})

	config := &DatabaseNotificationConfig{
		Id:             entityId,
		Type:           "test-type", // Added type field
		Field:          "test-field",
		NotifyOnChange: true,
		ServiceId:      "test-service",
	}

	token := db.Notify(config, callback)
	assert.NotEmpty(t, token.Id())

	// Write value to trigger notification
	stringValue := &String{Raw: "test-value"}
	value, err := anypb.New(stringValue)
	assert.NoError(t, err)

	writeReq := &DatabaseRequest{
		Id:        entityId,
		Field:     "test-field",
		Value:     value,
		WriteTime: &Timestamp{Raw: timestamppb.Now()},
	}
	db.Write([]*DatabaseRequest{writeReq})

	// Process notifications
	db.ProcessNotifications()

	assert.True(t, notified, "Should have received notification")
}

func TestRedisDatabase_TempOperations(t *testing.T) {
	db, mr := setupTestRedis(t)
	defer mr.Close()

	// Test TempSet
	success := db.TempSet("test-key", "test-value", time.Second)
	assert.True(t, success)

	// Test TempGet
	value := db.TempGet("test-key")
	assert.Equal(t, "test-value", value)

	// Test TempExpire with miniredis FastForward
	mr.SetTime(time.Now()) // Set initial time
	db.TempExpire("test-key", time.Second)
	mr.FastForward(2 * time.Second) // Fast forward more than expiration time
	value = db.TempGet("test-key")
	assert.Empty(t, value)

	// Test TempDel
	db.TempSet("test-key", "test-value", time.Second)
	db.TempDel("test-key")
	value = db.TempGet("test-key")
	assert.Empty(t, value)
}

func TestRedisDatabase_SortedSetOperations(t *testing.T) {
	db, mr := setupTestRedis(t)
	defer mr.Close()

	// Test SortedSetAdd
	added := db.SortedSetAdd("test-set", "member1", 1.0)
	assert.Equal(t, int64(1), added)

	// Test SortedSetRangeByScoreWithScores
	members := db.SortedSetRangeByScoreWithScores("test-set", "-inf", "+inf")
	assert.Len(t, members, 1)
	assert.Equal(t, "member1", members[0].Member)
	assert.Equal(t, 1.0, members[0].Score)

	// Test SortedSetRemove
	removed := db.SortedSetRemove("test-set", "member1")
	assert.Equal(t, int64(1), removed)

	// Test SortedSetRemoveRangeByRank
	db.SortedSetAdd("test-set", "member1", 1.0)
	db.SortedSetAdd("test-set", "member2", 2.0)
	removed = db.SortedSetRemoveRangeByRank("test-set", 0, 0)
	assert.Equal(t, int64(1), removed)
}

func TestRedisDatabase_ResolveIndirection(t *testing.T) {
	db, mr := setupTestRedis(t)
	defer mr.Close()

	// Setup test schemas
	db.SetEntitySchema("parent-type", &DatabaseEntitySchema{
		Name:   "parent-type",
		Fields: []string{"field1"},
	})
	db.SetEntitySchema("child-type", &DatabaseEntitySchema{
		Name:   "child-type",
		Fields: []string{"field1", "parent-ref"},
	})

	// Create test entities
	db.CreateEntity("parent-type", "", "parent")
	parentEntities := db.FindEntities("parent-type")
	parentId := parentEntities[0]

	db.CreateEntity("child-type", parentId, "child")
	childEntities := db.FindEntities("child-type")
	childId := childEntities[0]

	// Test direct field access
	field, entity := db.ResolveIndirection("field1", childId)
	assert.Equal(t, "field1", field)
	assert.Equal(t, childId, entity)

	// Test parent indirection
	field, entity = db.ResolveIndirection("parent->field1", childId)
	assert.Equal(t, "field1", field)
	assert.Equal(t, parentId, entity)

	// Test invalid indirection
	field, entity = db.ResolveIndirection("invalid->field1", childId)
	assert.Empty(t, field)
	assert.Empty(t, entity)
}

func TestRedisDatabase_CreateSnapshot(t *testing.T) {
	db, mr := setupTestRedis(t)
	defer mr.Close()

	// Setup test schema
	db.SetEntitySchema("test-type", &DatabaseEntitySchema{
		Name:   "test-type",
		Fields: []string{"field1"},
	})

	// Create test entity with data
	db.CreateEntity("test-type", "", "test-entity")
	entities := db.FindEntities("test-type")
	entityId := entities[0]

	value, _ := anypb.New(&String{Raw: "test-value"})
	writeReq := &DatabaseRequest{
		Id:        entityId,
		Field:     "field1",
		Value:     value,
		WriteTime: &Timestamp{Raw: timestamppb.Now()},
	}
	db.Write([]*DatabaseRequest{writeReq})

	// Create snapshot
	snapshot := db.CreateSnapshot()

	// Verify snapshot contents
	assert.Len(t, snapshot.Entities, 1)
	assert.Len(t, snapshot.Fields, 1)
	assert.Len(t, snapshot.EntitySchemas, 1)
	assert.Len(t, snapshot.FieldSchemas, 1)
}

func TestRedisDatabase_RestoreSnapshot(t *testing.T) {
	db, mr := setupTestRedis(t)
	defer mr.Close()

	// Create original data
	db.SetEntitySchema("test-type", &DatabaseEntitySchema{
		Name:   "test-type",
		Fields: []string{"field1"},
	})
	db.CreateEntity("test-type", "", "test-entity")
	entities := db.FindEntities("test-type")
	entityId := entities[0]

	value, _ := anypb.New(&String{Raw: "original-value"})
	writeReq := &DatabaseRequest{
		Id:        entityId,
		Field:     "field1",
		Value:     value,
		WriteTime: &Timestamp{Raw: timestamppb.Now()},
	}
	db.Write([]*DatabaseRequest{writeReq})

	// Create snapshot
	snapshot := db.CreateSnapshot()

	// Modify data
	value, _ = anypb.New(&String{Raw: "modified-value"})
	writeReq = &DatabaseRequest{
		Id:        entityId,
		Field:     "field1",
		Value:     value,
		WriteTime: &Timestamp{Raw: timestamppb.Now()},
	}
	db.Write([]*DatabaseRequest{writeReq})

	// Restore snapshot
	db.RestoreSnapshot(snapshot)

	// Verify restored data
	readReq := &DatabaseRequest{
		Id:    entityId,
		Field: "field1",
	}
	db.Read([]*DatabaseRequest{readReq})

	var readValue String
	readReq.Value.UnmarshalTo(&readValue)
	assert.Equal(t, "original-value", readValue.Raw)
}
