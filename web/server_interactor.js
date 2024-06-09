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
        const fileReader = new FileReader();

        fileReader.onload = function(event) {
            const message = proto.qmq.WebMessage.deserializeBinary(new Uint8Array(event.target.result));
            
            const responseTypes = {
                "qmq.WebGetResponse": proto.qmq.WebGetResponse,
                "qmq.WebNotification": proto.qmq.WebNotification,
            }
    
            for (const responseType in responseTypes) {
                const deserializer = responseTypes[responseType].deserializeBinary;
                const response = message.getPayload().unpack(deserializer, responseType);
    
                if (!response)
                    continue;

                return
            }
        }
        fileReader.readAsArrayBuffer(event.data);
    }

    onOpen(event) {

    }

    onClose(event) {
        this.connect();
    }

    connect() {
        this._ws = new WebSocket(this._url);
        
        this._ws.addEventListener('open', this.onOpen.bind(this));
        this._ws.addEventListener('message', this.onMessage.bind(this));
        this._ws.addEventListener('close', this.onClose.bind(this));
    }

    send(payload, payloadType) {
        if (!this.isConnected()) {
            return;
        }

        const header = new proto.qmq.WebHeader();
        header.setId();
        header.setTimestamp();

        const message = new proto.qmq.WebMessage();
        message.setPayload(new proto.google.protobuf.Any());
        message.getPayload().pack(payload, payloadType);

        this._ws.send(message.serializeBinary());
    }
}
