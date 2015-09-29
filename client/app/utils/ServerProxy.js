/**
 * Created by Ian on 9/28/15.
 */

var XHR = require('./../lib/xhr'),
    Constants = require('./../Constants'),
    ServerActionCreator = require('./../actions/ServerActionCreator');

//exports.login = function(email) {
//    XHR.getJSON(`${Constants.DATA_SERVER_URL}/login/${email}`, function(err, data) {
//        if(err) {
//            ServerActionCreator.handleServerError(err);
//        } else {
//            ServerActionCreator.handleUserInfoRetrieved(data);
//        }
//    });
//};