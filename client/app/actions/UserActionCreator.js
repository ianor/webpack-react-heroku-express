/**
 * Created by Ian on 9/28/15.
 */

var UserEvent = require('./../Constants').UserEvent,
    AppDispatcher = require('./../AppDispatcher'),
    ServerProxy = require('./../utils/ServerProxy');

var UserActionCreator = {

    handleLogin(email) {
        AppDispatcher.broadcastUserAction({
            type: UserEvent.APP_LAUNCH,
            data: email
        });

        ServerProxy.login(email);
    },

    handleGetList(listName) {
        AppDispatcher.broadcastUserAction({
            type: UserEvent.GET_LIST,
            data: listName
        });

        ServerProxy.getList(listName);
    }

};

module.exports = UserActionCreator;