class ServerInteractor {
    constructor(url, notificationManager, context) {
        this._context = context;
        this._notificationManager = notificationManager;
        this._url = url;
        this._ws = null;
        this._connectionStatus = new pb.QMQConnectionState();

        this._connectionStatus.setValue(pb.QMQConnectionStateEnum.CONNECTION_STATE_DISCONNECTED);
        this._notificationManager.notifyListeners(this._connectionStatus, this._context);
    }

    get notificationManager() { return this._notificationManager; }

    onMessage(event) {
        const response = pb.QMQWebServiceGetResponse.deserializeBinary(event.data);
        
        if (!response)
            return;

        this._notificationManager.notifyListeners(response, this._context);
    }

    onOpen(event) {
        this._connectionStatus.setValue(pb.QMQConnectionStateEnum.CONNECTION_STATE_CONNECTED);
        this._notificationManager.notifyListeners(this._connectionStatus, this._context);

        this.sendCommand('get');
    }

    onClose(event) {
        this._connectionStatus.setValue(pb.QMQConnectionStateEnum.CONNECTION_STATE_DISCONNECTED);
        this._notificationManager.notifyListeners(this._connectionStatus, this._context);

        this.connect();
    }

    connect() {
        this._ws = new WebSocket(this._url);
        
        this._ws.addEventListener('open', this.onOpen.bind(this));
        this._ws.addEventListener('message', this.onMessage.bind(this));
        this._ws.addEventListener('close', this.onClose.bind(this));
    }

    get(key) {
        if (this._connectionStatus.getValue() !== pb.QMQConnectionStateEnum.CONNECTION_STATE_CONNECTED)
            return;
        
        const request = new pb.QMQWebServiceGetRequest();
        request.setKey(key);

        this._ws.send(request.serializeBinary());
    }

    set(key, value) {
        if (this._connectionStatus.getValue() !== pb.QMQConnectionStateEnum.CONNECTION_STATE_CONNECTED)
            return;

        const anyValue = new pb.google.protobuf.Any();
        anyValue.pack(value.serializeBinary(), value.constructor.name);

        const request = new pb.QMQWebServiceSetRequest();
        request.setKey(key);
        request.setValue(anyValue);

        this._ws.send(request.serializeBinary());
    }
}