// THIS IS AN AUTOGENERATED FILE... See gen_web_handlers.sh for details.
package qmq

import (
    "net/http"
    "fmt"
)

func Register_web_handler_server_interactor() {

    http.HandleFunc("/js/qmq/server_interactor.js", func(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("Content-Type", "application/javascript")
        fmt.Fprint(w, `class ServerInteractor {
    constructor(url) {
        this._url = url;
        this._ws = null;
        this._isConnected = false;
        this._waitingResponses = {};
    }

    isConnected() {
        return this._isConnected;
    }

    onMessage(event) {
        const me = this;
        const fileReader = new FileReader();

        fileReader.onload = function(event) {
            const message = proto.qmq.WebMessage.deserializeBinary(new Uint8Array(event.target.result));
            const requestId = message.getHeader().getId();

            if (!me._waitingResponses[requestId]) {
                qWarn("[ServerInteractor::onMessage] Received response for unknown request '" + requestId + "'");
                return;
            }

            const request = me._waitingResponses[requestId];
            const response = requset.responseType.deserializeBinary(message.getPayload().getValue_asU8());
            if (response) {
                request.resolve(response);
            } else {
                request.reject(new Error('Invalid response'));
            }
        }
        fileReader.readAsArrayBuffer(event.data);
    }

    onOpen(event) {
        qInfo("[ServerInteractor::onOpen] Connection established with '" + this._url + "'");
        this._isConnected = true;
    }

    onClose(event) {
        qWarn("[ServerInteractor::onClose] Connection closed with '" + this._url + "'");
        this._isConnected = false;

        for (const requestId in this._waitingResponses) {
            const request = this._waitingResponses[requestId];
            request.reject(new Error('Connection closed'));
        }
        this._waitingResponses = {};

        this.connect();
    }

    connect() {
        this._ws = new WebSocket(this._url);
        
        this._ws.addEventListener('open', this.onOpen.bind(this));
        this._ws.addEventListener('message', this.onMessage.bind(this));
        this._ws.addEventListener('close', this.onClose.bind(this));
    }

    async send(requestProto, responseProtoType) {
        const requestId = uuidv4();
        const request = this._waitingResponses[requestId] = { "sent": +new Date(), "responseType": responseProtoType };

        const header = new proto.qmq.WebHeader();
        header.setId(requestId);
        header.setTimestamp(new proto.google.protobuf.Timestamp.fromDate(new Date()));

        const message = new proto.qmq.WebMessage();
        message.setPayload(new proto.google.protobuf.Any());
        message.getPayload().pack(requestProto, 'qmq.' + getQmqMessageType(requestProto));

        try {
            if (this.isConnected()) {
                this._ws.send(message.serializeBinary());
            }

            qTrace("[ServerInteractor::send] Request '" + requestId + "' sent");

            const result = await new Promise((resolve, reject) => {
                request.resolve = resolve;
                request.reject = reject;

                if (!this.isConnected()) {
                    reject(new Error('Connection closed'));
                }
            });

            qTrace("[ServerInteractor::send] Response for '" + requestId + "' received in " + (new Date() - request.sent) + "ms");

            return result;
        } finally {
            delete this._waitingResponses[requestId];
        }
    }
}`)
    })
}
