function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    );
}

const LOG_LEVELS = {
    TRACE: 0,
    DEBUG: 1,
    INFO: 2,
    WARN: 3,
    ERROR: 4,
    PANIC: 5,
}

const CURRENT_LOG_LEVEL = LOG_LEVELS.DEBUG;

function qLog(level, message) {
    if (level < CURRENT_LOG_LEVEL) {
        return;
    }

    console.log(message);
}

function qTrace(message) {
    qLog(LOG_LEVELS.TRACE, message);
}

function qDebug(message) {
    qLog(LOG_LEVELS.DEBUG, message);
}

function qInfo(message) {
    qLog(LOG_LEVELS.INFO, message);
}

function qWarn(message) {
    qLog(LOG_LEVELS.WARN, message);
}

function qError(message) {
    qLog(LOG_LEVELS.ERROR, message);
}

function qPanic(message) {
    qLog(LOG_LEVELS.PANIC, message);
}

function getQmqMessageType(message) {
    for (const key in proto.qmq) {
        if (message instanceof proto.qmq[key]) {
            return key
        }
    }

    return null
}
