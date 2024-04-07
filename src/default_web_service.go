package qmq

import (
	"fmt"
	"net/http"
	"os"
	sync "sync"

	"github.com/gorilla/websocket"
	anypb "google.golang.org/protobuf/types/known/anypb"
)

type DefaultWebService struct {
	logger       Logger
	schema       Schema
	clients      map[uint64]*WebClient
	clientsMutex sync.Mutex
}

func NewDefaultWebService(logger Logger, schema Schema) WebService {
	return &DefaultWebService{
		logger:  logger,
		schema:  schema,
		clients: make(map[uint64]*WebClient),
	}
}

func (w *DefaultWebService) Start(componentProvider EngineComponentProvider) {
	// Serve static files from the "static" directory
	http.Handle("/css/", http.StripPrefix("/css/", http.FileServer(http.Dir("./web/css"))))
	http.Handle("/img/", http.StripPrefix("/img/", http.FileServer(http.Dir("./web/img"))))
	http.Handle("/js/", http.StripPrefix("/js/", http.FileServer(http.Dir("./web/js"))))

	// Handle WebSocket and other routes
	http.Handle("/", w)

	Register_web_handler_notification_listener()
	Register_web_handler_notification_manager()
	Register_web_handler_server_interactor()
	Register_web_handler_app()

	go func() {
		err := http.ListenAndServe("0.0.0.0:20000", nil)
		if err != nil {
			componentProvider.WithLogger().Panic(fmt.Sprintf("HTTP server error: %v", err))
		}
	}()
}

func (w *DefaultWebService) onWSRequest(wr http.ResponseWriter, req *http.Request) {
	upgrader := websocket.Upgrader{
		CheckOrigin: func(r *http.Request) bool {
			return true
		},
	}

	conn, err := upgrader.Upgrade(wr, req, nil)
	if err != nil {
		w.logger.Error(fmt.Sprintf("Error upgrading to WebSocket: %v", err))
		return
	}

	client := w.addClient(conn)

	for message := range client.Read() {
		if request := new(WebServiceGetRequest); message.Content.MessageIs(request) {
			message.Content.UnmarshalTo(request)
			response := new(WebServiceGetResponse)
			value, err := anypb.New(w.schema.Get(request.Key))

			if err != nil {
				w.logger.Error(fmt.Sprintf("Error marshalling value for key '%s': %v", request.Key, err))
				break
			}

			response.Key = request.Key
			response.Value = value

			client.Write(response)
		} else if request := new(WebServiceSetRequest); message.Content.MessageIs(request) {
			message.Content.UnmarshalTo(request)
			response := new(WebServiceSetResponse)
			w.schema.Set(request.Key, request.Value)
			client.Write(response)

			for _, handler := range w.setHandlers {
				handler.OnSet(w, request.Key, request.Value)
			}
		}
	}
}

func (w *DefaultWebService) ServeHTTP(wr http.ResponseWriter, req *http.Request) {
	if req.URL.Path == "/" {
		w.onIndexRequest(wr, req)
	} else if req.URL.Path == "/ws" {
		w.onWSRequest(wr, req)
	} else {
		http.NotFound(wr, req)
	}
}

func (w *DefaultWebService) NotifyAll(keys []string) {
	w.clientsMutex.Lock()
	defer w.clientsMutex.Unlock()
	for clientId := range w.clients {
		for _, key := range keys {
			value, err := anypb.New(w.schema.Get(key))

			if err != nil {
				w.logger.Error(fmt.Sprintf("Error marshalling value for key '%s': %v", key, err))
				continue
			}

			w.clients[clientId].Write(&WebServiceNotification{
				Key:   key,
				Value: value,
			})
		}
	}
}

func (w *DefaultWebService) onIndexRequest(wr http.ResponseWriter, req *http.Request) {
	index, err := os.ReadFile("web/index.html")

	if err != nil {
		w.logger.Error(fmt.Sprintf("Error while reading file for path '/': %v", err))
		return
	}

	wr.Header().Set("Content-Type", "text/html")
	wr.Write(index)
}

func (w *DefaultWebService) addClient(conn *websocket.Conn) *WebClient {
	w.clientsMutex.Lock()
	defer w.clientsMutex.Unlock()

	onClientDisconnect := func(clientId uint64) {
		w.clientsMutex.Lock()
		delete(w.clients, clientId)
		w.clientsMutex.Unlock()
	}

	client := NewWebClient(conn, w, onClientDisconnect)
	w.clients[client.clientId] = client

	return client
}

func (w *DefaultWebService) WithLogger() Logger {
	return w.logger
}

func (w *DefaultWebService) WithSchema() Schema {
	return w.schema
}

func (w *DefaultWebService) WithWebClientNotifier() WebClientNotifier {
	return w
}

func (w *DefaultWebService) WithComponentProvider() WebServiceComponentProvider {
	return w
}
