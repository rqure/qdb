package qmq

import (
	"fmt"
	"net/http"
	"os"
	"reflect"
	"sync"
	"sync/atomic"

	"github.com/gorilla/websocket"
	"google.golang.org/protobuf/encoding/protojson"
	"google.golang.org/protobuf/proto"
)

var webSocketClientIdCounter uint64

type WebSocketClient struct {
	clientId uint64
	readCh   chan proto.Message
	writeCh  chan proto.Message
	conn     *websocket.Conn
	app      *QMQApplication
	wg       sync.WaitGroup
	onClose  func(uint64)
}

func NewWebSocketClient(conn *websocket.Conn, app *QMQApplication, onClose func(uint64)) *WebSocketClient {
	newClientId := atomic.AddUint64(&webSocketClientIdCounter, 1)

	wsc := &WebSocketClient{
		clientId: newClientId,
		readCh:   make(chan proto.Message),
		writeCh:  make(chan proto.Message),
		conn:     conn,
		app:      app,
		onClose:  onClose,
	}

	app.Logger().Trace(fmt.Sprintf("WebSocket [%d] connected", wsc.clientId))

	go wsc.DoPendingWrites()
	go wsc.DoPendingReads()

	return wsc
}

func (wsc *WebSocketClient) Read() chan proto.Message {
	return wsc.readCh
}

func (wsc *WebSocketClient) Write(v proto.Message) {
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
			var request proto.Message = new(QMQWebServiceGetRequest)
			if err := protojson.Unmarshal(p, request); err == nil {
				wsc.app.Logger().Trace(fmt.Sprintf("WebSocket [%d] received get message: %v", wsc.clientId, request))
				wsc.readCh <- request
				continue
			}

			request = new(QMQWebServiceSetRequest)
			if err := protojson.Unmarshal(p, request); err == nil {
				wsc.app.Logger().Trace(fmt.Sprintf("WebSocket [%d] received set message: %v", wsc.clientId, request))
				wsc.readCh <- request
				continue
			}

			wsc.app.Logger().Trace(fmt.Sprintf("WebSocket [%d] received unknown message: %v", wsc.clientId, p))
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

type WebServiceContext interface {
	App() *QMQApplication
	Schema() WebServiceSchema
	NotifyClients(data interface{})
}

type WebServiceTickHandler interface {
	OnTick(c WebServiceContext)
}

type WebServiceSetHandler interface {
	OnSet(c WebServiceContext, key string, value interface{})
}

type WebServiceSchema interface {
	Get(key string) proto.Message
	Set(key string, value proto.Message)
	GetAllData(db *QMQConnection)
	SetAllData(db *QMQConnection)
}

type WebService struct {
	clients      map[uint64]*WebSocketClient
	clientsMutex sync.Mutex
	app          *QMQApplication
	schema       WebServiceSchema
	tickHandlers []WebServiceTickHandler
	setHandlers  []WebServiceSetHandler
}

func NewWebService() *WebService {
	return &WebService{
		clients: make(map[uint64]*WebSocketClient),
		app:     NewQMQApplication("garage"),
	}
}

func (w *WebService) Initialize(schema WebServiceSchema) {
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

	w.schema = schema
}

func (w *WebService) Deinitialize() {
	w.app.Deinitialize()
}

func (w *WebService) NotifyClients(keys []string) {
	w.clientsMutex.Lock()
	defer w.clientsMutex.Unlock()
	for clientId := range w.clients {
		for _, key := range keys {
			w.clients[clientId].Write(key)
		}
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

	for request := range client.Read() {
		switch request.(type) {
		case *QMQWebServiceGetRequest:
			request := request.(*QMQWebServiceGetRequest)
			response := new(QMQWebServiceGetResponse)
			break
		case *QMQWebServiceSetRequest:
			request := request.(*QMQWebServiceGetRequest)

			break
		}

		if cmd, ok := data["cmd"].(string); ok && cmd == "get" {
			if key, ok := data["key"].(string); ok {
				response := DataUpdateResponse{}
				response.Data.Key = key
				response.Data.Value = w.schema.Get(key)

				client.WriteJSON(response)
			} else {
				schemaWrapper := reflect.ValueOf(w.schema).Elem()
				schemaType := schemaWrapper.Type()

				for i := 0; i < schemaWrapper.NumField(); i++ {
					field := schemaWrapper.Field(i)
					tag := schemaType.Field(i).Tag.Get("qmq")

					if reflect.ValueOf(field.Interface()).Kind() != reflect.Ptr {
						w.app.Logger().Warn(fmt.Sprintf("Field '%s' should be a pointer (please update the schema)", tag))
						continue
					}

					response := DataUpdateResponse{}
					response.Data.Key = tag
					response.Data.Value = reflect.Indirect(reflect.ValueOf(field.Interface())).FieldByName("Value").Interface()

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

						if reflect.ValueOf(field.Interface()).Kind() != reflect.Ptr {
							w.app.Logger().Warn(fmt.Sprintf("Field '%s' should be a pointer (please update the schema)", tag))
							continue
						}

						if tag == key {
							fieldValue := reflect.Indirect(reflect.ValueOf(field.Interface())).FieldByName("Value")
							if fieldValue.Kind() != reflect.ValueOf(value).Kind() {
								w.app.Logger().Error(fmt.Sprintf("Invalid 'set' command: expected type '%s' for key '%s' but got type '%s'",
									fieldValue.Kind(), key, reflect.ValueOf(value).Kind()))
								break
							}

							fieldValue.Set(reflect.ValueOf(value))
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
