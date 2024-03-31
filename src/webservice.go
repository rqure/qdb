package qmq

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"reflect"
	"sync"
	"sync/atomic"

	"github.com/gorilla/websocket"
	"google.golang.org/protobuf/proto"
)

var webSocketClientIdCounter uint64

type WebSocketClient struct {
	clientId uint64
	readCh   chan map[string]interface{}
	writeCh  chan interface{}
	conn     *websocket.Conn
	app      *QMQApplication
	wg       sync.WaitGroup
	onClose  func(uint64)
}

func NewWebSocketClient(conn *websocket.Conn, app *QMQApplication, onClose func(uint64)) *WebSocketClient {
	newClientId := atomic.AddUint64(&webSocketClientIdCounter, 1)

	wsc := &WebSocketClient{
		clientId: newClientId,
		readCh:   make(chan map[string]interface{}),
		writeCh:  make(chan interface{}),
		conn:     conn,
		app:      app,
		onClose:  onClose,
	}

	app.Logger().Trace(fmt.Sprintf("WebSocket [%d] connected", wsc.clientId))

	go wsc.DoPendingWrites()
	go wsc.DoPendingReads()

	return wsc
}

func (wsc *WebSocketClient) ReadJSON() chan map[string]interface{} {
	return wsc.readCh
}

func (wsc *WebSocketClient) WriteJSON(v interface{}) {
	wsc.app.Logger().Trace(fmt.Sprintf("WebSocket [%d] queued new message", wsc.clientId))
	wsc.writeCh <- v
}

func (wsc *WebSocketClient) Close() {
	close(wsc.writeCh)
	close(wsc.readCh)

	wsc.conn.Close()

	wsc.wg.Wait()

	if wsc.onClose != nil {
		wsc.onClose(wsc.clientId)
	}

	wsc.app.Logger().Trace(fmt.Sprintf("WebSocket [%d] disconnected", wsc.clientId))
}

func (wsc *WebSocketClient) DoPendingReads() {
	defer wsc.Close()

	wsc.wg.Add(1)
	defer wsc.wg.Done()

	wsc.app.Logger().Trace(fmt.Sprintf("WebSocket [%d] is listening for pending reads", wsc.clientId))
	defer wsc.app.Logger().Trace(fmt.Sprintf("WebSocket [%d] is no longer listening for pending reads", wsc.clientId))

	for {
		messageType, p, err := wsc.conn.ReadMessage()

		if err != nil {
			wsc.app.Logger().Error(fmt.Sprintf("WebSocket [%d] error reading message: %v", wsc.clientId, err))
			break
		}

		if messageType == websocket.TextMessage {
			var data map[string]interface{}
			if err := json.Unmarshal(p, &data); err != nil {
				wsc.app.Logger().Error(fmt.Sprintf("WebSocket [%d] error decoding message: %v", wsc.clientId, err))
				continue
			}

			wsc.app.Logger().Trace(fmt.Sprintf("WebSocket [%d] received message: %v", wsc.clientId, data))

			wsc.readCh <- data
		} else if messageType == websocket.CloseMessage {
			break
		}
	}
}

func (wsc *WebSocketClient) DoPendingWrites() {
	wsc.wg.Add(1)
	defer wsc.wg.Done()

	wsc.app.Logger().Trace(fmt.Sprintf("WebSocket [%d] is listening for pending writes", wsc.clientId))
	defer wsc.app.Logger().Trace(fmt.Sprintf("WebSocket [%d] is no longer listening for pending writes", wsc.clientId))

	for v := range wsc.writeCh {
		wsc.app.Logger().Trace(fmt.Sprintf("WebSocket [%d] sending message: %v", wsc.clientId, v))

		if err := wsc.conn.WriteJSON(v); err != nil {
			wsc.app.Logger().Error(fmt.Sprintf("WebSocket [%d] error sending message: %v", wsc.clientId, err))
		}
	}
}

type KeyValueResponse struct {
	Key   string      `json:"key"`
	Value interface{} `json:"value"`
}

type DataUpdateResponse struct {
	Data KeyValueResponse `json:"data"`
}

type WebServiceContext interface {
	App() *QMQApplication
	Schema() interface{}
	NotifyClients(data interface{})
}

type WebServiceTickHandler interface {
	OnTick(c WebServiceContext)
}

type WebServiceSetHandler interface {
	OnSet(c WebServiceContext, key string, value interface{})
}

type WebService struct {
	clients      map[uint64]*WebSocketClient
	clientsMutex sync.Mutex
	app          *QMQApplication
	schema       interface{}
	schemaMutex  sync.Mutex
	tickHandlers []WebServiceTickHandler
	setHandlers  []WebServiceSetHandler
}

func NewWebService() *WebService {
	return &WebService{
		clients: make(map[uint64]*WebSocketClient),
		app:     NewQMQApplication("garage"),
	}
}

func (w *WebService) Initialize(schema interface{}) {
	w.app.Initialize()

	// Serve static files from the "static" directory
	http.Handle("/css/", http.StripPrefix("/css/", http.FileServer(http.Dir("./web/css"))))
	http.Handle("/img/", http.StripPrefix("/img/", http.FileServer(http.Dir("./web/img"))))
	http.Handle("/js/", http.StripPrefix("/js/", http.FileServer(http.Dir("./web/js"))))

	// Handle WebSocket and other routes
	http.Handle("/", w)

	go func() {
		err := http.ListenAndServe("0.0.0.0:20000", nil)
		if err != nil {
			w.app.Logger().Panic(fmt.Sprintf("HTTP server error: %v", err))
		}
	}()

	w.schemaMutex.Lock()
	w.schema = schema
	w.app.Db().GetSchema(w.schema)
	w.app.Db().SetSchema(w.schema)
	w.schemaMutex.Unlock()
}

func (w *WebService) Deinitialize() {
	w.app.Deinitialize()
}

func (w *WebService) NotifyClients(data interface{}) {
	w.clientsMutex.Lock()
	defer w.clientsMutex.Unlock()
	for clientId := range w.clients {
		w.clients[clientId].WriteJSON(data)
	}
}

func (w *WebService) App() *QMQApplication {
	return w.app
}

func (w *WebService) Schema() interface{} {
	return w.schema
}

func (w *WebService) AddTickHandler(handler WebServiceTickHandler) {
	w.tickHandlers = append(w.tickHandlers, handler)
}

func (w *WebService) AddSetHandler(handler WebServiceSetHandler) {
	w.setHandlers = append(w.setHandlers, handler)
}

func (w *WebService) Tick() {
	w.schemaMutex.Lock()
	defer w.schemaMutex.Unlock()

	for _, handler := range w.tickHandlers {
		handler.OnTick(w)
	}
}

func (w *WebService) ServeHTTP(wr http.ResponseWriter, req *http.Request) {
	if req.URL.Path == "/" {
		w.onIndexRequest(wr, req)
	} else if req.URL.Path == "/ws" {
		w.onWSRequest(wr, req)
	} else {
		http.NotFound(wr, req)
	}
}

func (w *WebService) onIndexRequest(wr http.ResponseWriter, req *http.Request) {
	index, err := os.ReadFile("web/index.html")

	if err != nil {
		w.app.Logger().Error(fmt.Sprintf("Error while reading file for path '/': %v", err))
		return
	}

	wr.Header().Set("Content-Type", "text/html")
	wr.Write(index)
}

func (w *WebService) onWSRequest(wr http.ResponseWriter, req *http.Request) {
	upgrader := websocket.Upgrader{
		CheckOrigin: func(r *http.Request) bool {
			return true
		},
	}

	conn, err := upgrader.Upgrade(wr, req, nil)
	if err != nil {
		w.app.Logger().Error(fmt.Sprintf("Error upgrading to WebSocket: %v", err))
		return
	}

	client := w.addClient(conn)

	for data := range client.ReadJSON() {
		if cmd, ok := data["cmd"].(string); ok && cmd == "get" {
			if key, ok := data["key"].(string); ok {
				schemaWrapper := reflect.ValueOf(w.schema).Elem()
				schemaType := schemaWrapper.Type()

				for i := 0; i < schemaWrapper.NumField(); i++ {
					field := schemaWrapper.Field(i)
					tag := schemaType.Field(i).Tag.Get("qmq")

					if tag == key {
						response := DataUpdateResponse{}
						response.Data.Key = key
						w.schemaMutex.Lock()
						response.Data.Value = reflect.ValueOf(field.Interface()).FieldByName("Value").Interface()
						w.schemaMutex.Unlock()

						client.WriteJSON(response)

						break
					}
				}
			} else {
				schemaWrapper := reflect.ValueOf(w.schema).Elem()
				schemaType := schemaWrapper.Type()

				for i := 0; i < schemaWrapper.NumField(); i++ {
					field := schemaWrapper.Field(i)
					tag := schemaType.Field(i).Tag.Get("qmq")

					w.app.Logger().Trace(fmt.Sprintf("Field: %s", tag))

					response := DataUpdateResponse{}
					response.Data.Key = tag
					w.schemaMutex.Lock()
					if reflect.ValueOf(field.Interface()).Kind() == reflect.Ptr {
						response.Data.Value = reflect.Indirect(reflect.ValueOf(field.Interface())).FieldByName("Value").Interface()
					} else {
						response.Data.Value = reflect.ValueOf(field.Interface()).FieldByName("Value").Interface()
					}
					w.schemaMutex.Unlock()

					client.WriteJSON(response)
				}
			}
		} else if cmd, ok := data["cmd"].(string); ok && cmd == "set" {
			if key, ok := data["key"].(string); ok {
				if value, ok := data["value"]; ok {
					response := DataUpdateResponse{}

					schemaWrapper := reflect.ValueOf(w.schema).Elem()
					schemaType := schemaWrapper.Type()

					for i := 0; i < schemaWrapper.NumField(); i++ {
						field := schemaWrapper.Field(i)
						tag := schemaType.Field(i).Tag.Get("qmq")

						if tag == key {
							fieldValue := reflect.ValueOf(field.Interface())
							if fieldValue.Kind() != reflect.ValueOf(value).Kind() {
								w.app.Logger().Error("Invalid 'set' command: value type mismatch")
								break
							}

							w.schemaMutex.Lock()
							fieldValue.FieldByName("Value").Set(reflect.ValueOf(value))
							writeRequest := NewWriteRequest(field.Interface().(proto.Message))
							w.app.Db().Set(key, writeRequest)
							for _, handler := range w.setHandlers {
								handler.OnSet(w, key, value)
							}

							response.Data.Key = key
							response.Data.Value = value

							w.NotifyClients(response)

							break
						}
					}
				} else {
					w.app.Logger().Error("Invalid 'set' command: missing 'value'")
				}
			} else {
				w.app.Logger().Error("Invalid 'set' command: missing 'key'")
			}
		} else {
			w.app.Logger().Error("Invalid WebSocket command")
		}
	}
}

func (w *WebService) addClient(conn *websocket.Conn) *WebSocketClient {
	w.clientsMutex.Lock()
	defer w.clientsMutex.Unlock()

	onClientDisconnect := func(clientId uint64) {
		w.clientsMutex.Lock()
		delete(w.clients, clientId)
		w.clientsMutex.Unlock()
	}

	client := NewWebSocketClient(conn, w.app, onClientDisconnect)
	w.clients[client.clientId] = client

	return client
}
