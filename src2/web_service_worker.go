package qmq

import (
	"net/http"
	"os"

	"github.com/gorilla/websocket"
)

type WebServiceWorker struct {
}

func NewWebServiceWorker() *WebServiceWorker {
	return &WebServiceWorker{}
}

func (w *WebServiceWorker) Init() {
	// Serve static files from the "static" directory
	http.Handle("/css/", http.StripPrefix("/css/", http.FileServer(http.Dir("./web/css"))))
	http.Handle("/img/", http.StripPrefix("/img/", http.FileServer(http.Dir("./web/img"))))
	http.Handle("/js/", http.StripPrefix("/js/", http.FileServer(http.Dir("./web/js"))))

	// Handle WebSocket and other routes
	http.Handle("/", w)

	// Register_web_handler_notification_listener()
	// Register_web_handler_notification_manager()
	// Register_web_handler_server_interactor()
	// Register_web_handler_app()

	go func() {
		err := http.ListenAndServe("0.0.0.0:20000", nil)
		if err != nil {
			Panic("[WebServiceWorker::Init] HTTP server error: %v", err)
		}
	}()
}

func (w *WebServiceWorker) onIndexRequest(wr http.ResponseWriter, _ *http.Request) {
	index, err := os.ReadFile("web/index.html")

	if err != nil {
		Error("[WebServiceWorker::onIndexRequest] Error reading index.html: %v", err)
		return
	}

	wr.Header().Set("Content-Type", "text/html")
	wr.Write(index)
}

func (w *WebServiceWorker) onWSRequest(wr http.ResponseWriter, req *http.Request) {
	upgrader := websocket.Upgrader{
		CheckOrigin: func(r *http.Request) bool {
			return true
		},
	}

	conn, err := upgrader.Upgrade(wr, req, nil)
	if err != nil {
		Error("[WebServiceWorker::onWSRequest] Error upgrading to WebSocket: %v", err)
		return
	}

	client := w.addClient(conn)
	w.clientHandler.Handle(client, w)
}

func (w *WebServiceWorker) ServeHTTP(wr http.ResponseWriter, req *http.Request) {
	if req.URL.Path == "/" {
		w.onIndexRequest(wr, req)
	} else if req.URL.Path == "/ws" {
		w.onWSRequest(wr, req)
	} else {
		http.NotFound(wr, req)
	}
}

func (w *WebServiceWorker) Deinit() {

}

func (w *WebServiceWorker) DoWork() {

}
