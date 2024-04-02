package qmq

import (
	"fmt"
	"net/http"
	"os"
	reflect "reflect"
	"sync"
	"sync/atomic"

	"github.com/gorilla/websocket"
	"google.golang.org/protobuf/proto"
	"google.golang.org/protobuf/types/known/anypb"
)

var webSocketClientIdCounter uint64

type WebSocketClient struct {
	clientId uint64
	readCh   chan *QMQWebServiceMessage
	writeCh  chan *QMQWebServiceMessage
	conn     *websocket.Conn
	app      *QMQApplication
	wg       sync.WaitGroup
	onClose  func(uint64)
}

func NewWebSocketClient(conn *websocket.Conn, app *QMQApplication, onClose func(uint64)) *WebSocketClient {
	newClientId := atomic.AddUint64(&webSocketClientIdCounter, 1)

	wsc := &WebSocketClient{
		clientId: newClientId,
		readCh:   make(chan *QMQWebServiceMessage),
		writeCh:  make(chan *QMQWebServiceMessage),
		conn:     conn,
		app:      app,
		onClose:  onClose,
	}

	app.Logger().Trace(fmt.Sprintf("WebSocket [%d] connected", wsc.clientId))

	go wsc.DoPendingWrites()
	go wsc.DoPendingReads()

	return wsc
}

func (wsc *WebSocketClient) Read() chan *QMQWebServiceMessage {
	return wsc.readCh
}

func (wsc *WebSocketClient) Write(v proto.Message) {
	content, err := anypb.New(v)

	if err != nil {
		wsc.app.Logger().Error(fmt.Sprintf("Failed to marshal message before send: %v", err))
		return
	}

	message := new(QMQWebServiceMessage)
	message.Content = content
	wsc.writeCh <- message
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
			request := new(QMQWebServiceMessage)

			if err := proto.Unmarshal(p, request); err != nil {
				continue
			}

			wsc.app.Logger().Trace(fmt.Sprintf("WebSocket [%d] received message: %v", wsc.clientId, request))
			wsc.readCh <- request
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

		b, err := proto.Marshal(v)
		if err != nil {
			wsc.app.Logger().Error(fmt.Sprintf("WebSocket [%d] error marshalling message: %v", wsc.clientId, err))
			continue
		}

		if err := wsc.conn.WriteMessage(websocket.TextMessage, b); err != nil {
			wsc.app.Logger().Error(fmt.Sprintf("WebSocket [%d] error sending message: %v", wsc.clientId, err))
		}
	}
}

type WebServiceContext interface {
	App() *QMQApplication
	Schema() WebServiceSchema
	NotifyClients(keys []string)
}

type WebServiceTickHandler interface {
	OnTick(c WebServiceContext)
}

type WebServiceSetHandler interface {
	OnSet(c WebServiceContext, key string, value proto.Message)
}

type WebServiceSchema interface {
	Get(key string) proto.Message
	Set(key string, value proto.Message)
	Initialize(db *QMQConnection)
}

type Schema struct {
	db *QMQConnection
	kv map[string]proto.Message
}

func NewSchema(kv map[string]proto.Message) *Schema {
	s := new(Schema)
	s.kv = kv

	return s
}

func (s *Schema) Get(key string) proto.Message {
	v := s.kv[key]

	if v != nil {
		s.db.GetValue(key, v)
	}

	return v
}

func (s *Schema) Set(key string, value proto.Message) {
	v := s.kv[key]
	if v != nil && reflect.TypeOf(v) != reflect.TypeOf(value) {
		return
	}

	s.kv[key] = value
	s.db.SetValue(key, value)
}

func (s *Schema) Initialize(db *QMQConnection) {
	s.db = db

	for key := range s.kv {
		s.Get(key)
	}

	for key := range s.kv {
		s.Set(key, s.kv[key])
	}
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

	// Handle generated files
	Register_web_handler_notification_listener()
	Register_web_handler_notification_manager()
	Register_web_handler_server_interactor()
	Register_web_handler_app()

	go func() {
		err := http.ListenAndServe("0.0.0.0:20000", nil)
		if err != nil {
			w.app.Logger().Panic(fmt.Sprintf("HTTP server error: %v", err))
		}
	}()

	w.schema = schema
	w.schema.Initialize(w.app.Db())
}

func (w *WebService) Deinitialize() {
	w.app.Deinitialize()
}

func (w *WebService) NotifyClients(keys []string) {
	w.clientsMutex.Lock()
	defer w.clientsMutex.Unlock()
	for clientId := range w.clients {
		for _, key := range keys {
			value, err := anypb.New(w.schema.Get(key))

			if err != nil {
				w.app.Logger().Error(fmt.Sprintf("Error marshalling value for key '%s': %v", key, err))
				continue
			}

			w.clients[clientId].Write(&QMQWebServiceNotification{
				Key:   key,
				Value: value,
			})
		}
	}
}

func (w *WebService) App() *QMQApplication {
	return w.app
}

func (w *WebService) Schema() WebServiceSchema {
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

	for message := range client.Read() {
		if request := new(QMQWebServiceGetRequest); message.Content.MessageIs(request) {
			response := new(QMQWebServiceGetResponse)
			value, err := anypb.New(w.schema.Get(request.Key))

			if err != nil {
				w.app.Logger().Error(fmt.Sprintf("Error marshalling value for key '%s': %v", request.Key, err))
				break
			}

			response.Key = request.Key
			response.Value = value

			client.Write(response)
		} else if request := new(QMQWebServiceSetRequest); message.Content.MessageIs(request) {
			response := new(QMQWebServiceSetResponse)
			w.schema.Set(request.Key, request.Value)
			client.Write(response)

			for _, handler := range w.setHandlers {
				handler.OnSet(w, request.Key, request.Value)
			}
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
