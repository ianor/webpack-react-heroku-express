
var keyMirror = require('react/lib/keyMirror');

module.exports = {

    DATA_SERVER_URL: 'http://127.0.0.1:9000/api',

    UserEvent: keyMirror({

    }),

    SystemEvent: keyMirror({
        APP_LAUNCH: null
    }),

    ServerEvent: keyMirror({
        ERROR: null
    }),

    ModelEvent: keyMirror({
        STATE_CHANGE: null
    }),

    EventType: keyMirror({
        USER_EVENT: null,
        SERVER_EVENT: null,
        SYSTEM_EVENT: null,
        MODEL_EVENT: null
    })
};