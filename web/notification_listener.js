class NotificationListener {
    constructor() {}
    listenTo(topic, manager) {
        manager.addListener(topic, this);
        return this;
    }
    onNotification(topic, message, context) {}
};