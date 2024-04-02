class ServerInteractor {
    constructor(url, notificationManager, context) {
        this._context = context;
        this._notificationManager = notificationManager;
        this._url = url;
        this._ws = null;
        this._connectionStatus = new proto.qmq.QMQConnectionState();

        this._connectionStatus.setValue(proto.qmq.QMQConnectionStateEnum.CONNECTION_STATE_DISCONNECTED);
        this.notifyConnectionStatus();
    }

    get notificationManager() { return this._notificationManager; }

    notifyConnectionStatus() {
        const value = new proto.google.protobuf.Any();
        value.pack(this._connectionStatus.serializeBinary(), 'proto.qmq.QMQConnectionState');
        const notification = new proto.qmq.QMQWebServiceNotification();
        notification.setKey('connected');
        notification.setValue(value);

        this._notificationManager.notifyListeners(notification, this._context);
    }

    onMessage(event) {
        const message = proto.qmq.QMQWebServiceMessage.deserializeBinary(event.data);

        const responseTypes = {
            "proto.qmq.QMQWebServiceGetResponse": proto.qmq.QMQWebServiceGetResponse,
            "proto.qmq.QMQWebServiceNotification": proto.qmq.QMQWebServiceNotification,
        }

        for (const responseType in responseTypes) {
            const deserializer = responseTypes[responseType].deserializeBinary;
            const response = message.getContent().unpack(deserializer, responseType);

            if (!response)
                continue;

            this._notificationManager.notifyListeners(response, this._context);
            return
        }
    }

    onOpen(event) {
        this._connectionStatus.setValue(proto.qmq.QMQConnectionStateEnum.CONNECTION_STATE_CONNECTED);
        this.notifyConnectionStatus();
    }

    onClose(event) {
        this._connectionStatus.setValue(proto.qmq.QMQConnectionStateEnum.CONNECTION_STATE_DISCONNECTED);
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
        if (this._connectionStatus.getValue() !== proto.qmq.QMQConnectionStateEnum.CONNECTION_STATE_CONNECTED)
            return;
        
        const request = new proto.qmq.QMQWebServiceGetRequest();
        request.setKey(key);

        const message = new proto.qmq.QMQWebServiceMessage();
        message.setContent(new proto.google.protobuf.Any());
        message.getContent().pack(request.serializeBinary(), 'proto.qmq.QMQWebServiceGetRequest');

        this._ws.send(message.serializeBinary());
    }

    set(key, value) {
        if (this._connectionStatus.getValue() !== proto.qmq.QMQConnectionStateEnum.CONNECTION_STATE_CONNECTED)
            return;

        const request = new proto.qmq.QMQWebServiceSetRequest();
        request.setKey(key);
        request.setValue(value);

        const message = new proto.qmq.QMQWebServiceMessage();
        message.setContent(new proto.google.protobuf.Any());
        message.getContent().pack(request.serializeBinary(), 'proto.qmq.QMQWebServiceSetRequest');

        this._ws.send(message.serializeBinary());
    }
}