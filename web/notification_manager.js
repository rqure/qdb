class NotificationManager {
    constructor() {
        this._topics = {};
    }

    addListener(topic, listener) {
        if ( !(topic in this._topics) ) {
            this._topics[topic] = [];
        }

        this._topics[topic].push(listener);

        return this;
    }

    notifyListeners(message, context) {
        if (message.getKey() in this._topics) {
            this._topics[message.getKey()].forEach(listener => {
                listener.onNotification(message.getKey(), message, context);
            });
        }
    }

    get topics() {
        return Object.keys(this._topics);
    }
};