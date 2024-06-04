package qmq

type EntityDefinition struct{}        // TODO: replace with proto
type EntityRequest struct{}           // TODO: replace with proto
type EntityFieldNotification struct{} // TODO: replace with proto

type IDatabase interface {
	Connect()
	Disconnect()

	CreateEntity(entityType, parentId, name string)
	DeleteEntity(entityId string)

	FindEntities(entityType string) []string

	GetEntityDefinition(entityType string) EntityDefinition
	SetEntityDefinition(entityType string, definition EntityDefinition)

	ReadEntityFields(requests []EntityRequest)
	WriteEntityFields(requests []EntityRequest)

	SubscribeOnFieldChanges(entityId string, entityField string, change bool, contextFields []string, callback func(EntityFieldNotification)) string
	UnsubscribeFromFieldChanges(subscriptionId string)
}
