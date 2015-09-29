/**
 * Created by Ian on 9/28/15.
 */

var SystemEvent = require('./../Constants').SystemEvent,
    AppDispatcher = require('./../AppDispatcher'),
    ServerProxy = require('./../utils/ServerProxy');

var SystemActionCreator = {

    handleAppLaunch() {
        AppDispatcher.broadcastSystemAction({
            type: SystemEvent.APP_LAUNCH
        });
    }

};

module.exports = SystemActionCreator;