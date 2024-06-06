class ServerInteractor {
    constructor(url, notificationManager, context) {
        this._context = context;
        this._notificationManager = notificationManager;
        this._url = url;
        this._ws = null;
        this._connectionStatus = new proto.qmq.ConnectionState();

        this._connectionStatus.setValue(proto.qmq.ConnectionState.ConnectionStateEnum.DISCONNECTED);
        this.notifyConnectionStatus();
    }

    get notificationManager() { return this._notificationManager; }

    notifyConnectionStatus() {
        const value = new proto.google.protobuf.Any();
        value.pack(this._connectionStatus.serializeBinary(), 'qmq.ConnectionState');
        const notification = new proto.qmq.WebNotification();
        notification.setKey('connected');
        notification.setValue(value);

        this._notificationManager.notifyListeners(notification, this._context);
    }

    onMessage(event) {
        const fileReader = new FileReader();
        const me = this;
        fileReader.onload = function(event) {
            const message = proto.qmq.WebMessage.deserializeBinary(new Uint8Array(event.target.result));
            
            const responseTypes = {
                "qmq.WebGetResponse": proto.qmq.WebGetResponse,
                "qmq.WebNotification": proto.qmq.WebNotification,
            }
    
            for (const responseType in responseTypes) {
                const deserializer = responseTypes[responseType].deserializeBinary;
                const response = message.getContent().unpack(deserializer, responseType);
    
                if (!response)
                    continue;
    
                me._notificationManager.notifyListeners(response, me._context);
                return
            }            
        }
        fileReader.readAsArrayBuffer(event.data);
    }

    onOpen(event) {
        this._connectionStatus.setValue(proto.qmq.ConnectionState.ConnectionStateEnum.CONNECTED);
        this.notifyConnectionStatus();
    }

    onClose(event) {
        this._connectionStatus.setValue(proto.qmq.ConnectionState.ConnectionStateEnum.DISCONNECTED);
        this.notifyConnectionStatus();

        this.connect();
    }

    connect() {
        this._ws = new WebSocket(this._url);
        
        this._ws.addEventListener('open', this.onOpen.bind(this));
        this._ws.addEventListener('message', this.onMessage.bind(this));
        this._ws.addEventListener('close', this.onClose.bind(this));
    }

    get(key) {
        if (this._connectionStatus.getValue() !== proto.qmq.ConnectionState.ConnectionStateEnum.CONNECTED)
            return;
        
        const request = new proto.qmq.WebGetRequest();
        request.setKey(key);

        const message = new proto.qmq.WebMessage();
        message.setContent(new proto.google.protobuf.Any());
        message.getContent().pack(request.serializeBinary(), 'qmq.WebGetRequest');

        this._ws.send(message.serializeBinary());
    }

    set(key, value) {
        if (this._connectionStatus.getValue() !== proto.qmq.ConnectionState.ConnectionStateEnum.CONNECTED)
            return;

        const request = new proto.qmq.WebSetRequest();
        request.setKey(key);
        request.setValue(value);

        const message = new proto.qmq.WebMessage();
        message.setContent(new proto.google.protobuf.Any());
        message.getContent().pack(request.serializeBinary(), 'qmq.WebSetRequest');

        this._ws.send(message.serializeBinary());
    }
}
