/**
 * Created by Ian on 9/28/15.
 */

var ServerEvent = require('./../Constants').ServerEvent,
    AppDispatcher = require('./../AppDispatcher'),
    ServerProxy = require('./../utils/ServerProxy');

var SystemActionCreator = {

    handleServerError(err) {
        AppDispatcher.broadcastServerAction({
            type: ServerEvent.ERROR,
            data: err
        });
    },

    handleUserInfoRetrieved(data) {
        AppDispatcher.broadcastServerAction({
            type: ServerEvent.USER_DATA_RETRIEVED,
            data: data
        });
    },

    handleListRetrieved(list) {
        AppDispatcher.broadcastServerAction({
            type: ServerEvent.LIST_RETRIEVED,
            data: list
        });
    }

};

module.exports = SystemActionCreator;