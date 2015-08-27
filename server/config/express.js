/**
 * Created by Ian on 8/22/15.
 */

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var errorHandler = require('errorhandler');

module.exports = function(app) {

    var env = app.get('env');

    //app.set('views', config.root + '/server/views');
    //app.engine('html', require('ejs').renderFile);
    //app.set('view engine', 'html');
    app.use(compression());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(cookieParser());
    app.set('appPath', path.resolve(__dirname+ '../../../client/build/'));
    app.use(morgan('dev'));
    app.use(errorHandler()); // Error handler - has to be last
};