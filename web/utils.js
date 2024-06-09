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

function Log(level, message) {
    if (level < CURRENT_LOG_LEVEL) {
        return;
    }

    console.log(message);
}

function Trace(message) {
    Log(LOG_LEVELS.TRACE, message);
}

function Debug(message) {
    Log(LOG_LEVELS.DEBUG, message);
}

function Info(message) {
    Log(LOG_LEVELS.INFO, message);
}

function Warn(message) {
    Log(LOG_LEVELS.WARN, message);
}

function Error(message) {
    Log(LOG_LEVELS.ERROR, message);
}

function Panic(message) {
    Log(LOG_LEVELS.PANIC, message);
}