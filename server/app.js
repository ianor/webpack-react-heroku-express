'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

console.log('Express is starting up...');
console.log('NODE_ENV: '+ process.env.NODE_ENV);


var express = require('express'),
    pth = require('path'),
    bodyParser = require('body-parser'),
    httpProxy = require('http-proxy');

var app = express(),
    proxy = httpProxy.createProxyServer(),
    server = require('http').createServer(app),
    config = require('./config');

var bundle = require('./../webpack.bundle.js');
bundle();


if(process.env.NODE_ENV !== 'production') {

    ////hook into the db
    //mongoose.connect('mongodb://127.0.0.1/', function(err) {
    //    if(err) {
    //        throw err;
    //    } else {
    //        //set up the models/schemas
    //        require('./api/playground/playground.utility').initializeModel();
    //
    //        //dev only
    //        //require('./api/das/das.model').seedDB();
    //        //require('./api/das/das.model').testSeed();
    //    }
    //});


    app.all('/build/*', function (req, res) {
        //proxy dev requests to webpack-dev-server
        proxy.web(req, res, {
            target: 'http://localhost:8080'
        });
    });

    proxy.on('error', function (err) {
        console.log('Could not connect to proxy, please try again...');
    });

}

//set up our static asset location
app.use('/build', express.static('client/build'));

//set ourselves up to parse POST body data
app.use(bodyParser.json());         // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

require('./config/express')(app);
require('./routes')(app);

server.listen(config.port, config.ip, function () {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

module.exports = app;