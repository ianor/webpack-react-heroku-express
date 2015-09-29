/**
 * Created by Ian on 9/28/15.
 */
var AppDispatcher = require('./../AppDispatcher'),
    EventEmitter = require('events'),
    SystemActionCreator = require('./../actions/SystemActionCreator'),
    UserActionCreator = require('./../actions/UserActionCreator'),
    Constants = require('./../Constants'),
    EventTypes = Constants.EventType,
    ServerEvents = Constants.ServerEvent,
    SystemEvents = Constants.SystemEvent,
    UserEvents = Constants.UserEvent,
    ModelEvents = Constants.ModelEvent,
    assign = require('react/lib/Object.assign');

var emitter = new EventEmitter();

var state = {
};

var setState = (newState) => {
    assign(state, newState);
    emitter.emit(Constants.ModelEvent.STATE_CHANGE);
};

var Model = {
    addStateChangeListener (callback) {
        emitter.addListener(ModelEvents.STATE_CHANGE, callback);
    },
    removeStateChangeListener (callback) {
        emitter.removeListener(ModelEvents.STATE_CHANGE, callback);
    },
    getState () {
        return state;
    }
};

Model.dispatchToken = AppDispatcher.register((payload) => {
    var action = payload.action,
        type   = payload.type;

    if(type === EventTypes.SERVER_EVENT) {

        //switch(action.type) {
        //
        //    case ServerEvents.USER_DATA_RETRIEVED :
        //
        //        setState({
        //        });
        //
        //        break;
        //}

    } else if(type === EventTypes.USER_EVENT) {

        //switch(action.type) {
        //
        //    case UserEvents.LOGIN :
        //
        //        setState({
        //        });
        //
        //        break;
        //}

    }
});

module.exports = Model;