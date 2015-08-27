var Dispatcher = require('flux').Dispatcher,
    EventTypes = require('./Constants').EventType,
    assign = require('react/lib/Object.assign');

class AppDispatcher extends Dispatcher {

    //this thing is just a pass-through that provides an entry point in the data flow

    broadcastUserAction (action) {
        this.dispatch({
            type: EventTypes.USER_EVENT,
            action: action
        });
    }

    broadcastServerAction (action) {
        this.dispatch({
            type: EventTypes.SERVER_EVENT,
            action: action
        });
    }

    broadcastSystemAction (action) {
        this.dispatch({
            type: EventTypes.SYSTEM_EVENT,
            action: action
        });
    }

}

module.exports = new AppDispatcher();