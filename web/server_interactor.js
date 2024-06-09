class ServerInteractor {
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
                Warn("[ServerInteractor::onMessage] Received response for unknown request '" + requestId + "'");
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
        this._isConnected = true;
    }

    onClose(event) {
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

    async send(request, requestType, responseType) {
        const requestId = uuidv4();
        const request = this._waitingResponses[requestId] = { "sent": +new Date(), "responseType": responseType };

        const header = new proto.qmq.WebHeader();
        header.setId(requestId);
        header.setTimestamp(new proto.google.protobuf.Timestamp.fromDate(new Date()));

        const message = new proto.qmq.WebMessage();
        message.setPayload(new proto.google.protobuf.Any());
        message.getPayload().pack(request, requestType);

        try {
            if (this.isConnected()) {
                this._ws.send(message.serializeBinary());
            }

            Trace("[ServerInteractor::send] Request '" + requestId + "' sent");

            const result = await new Promise((resolve, reject) => {
                request.resolve = resolve;
                request.reject = reject;
            });

            Trace("[ServerInteractor::send] Response for '" + requestId + "' received in " + (new Date() - request.sent) + "ms");

            return result;
        } finally {
            delete this._waitingResponses[requestId];
        }
    }
}
