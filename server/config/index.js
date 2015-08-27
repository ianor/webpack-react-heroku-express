'use strict';

var pth = require('path');

module.exports = {
    env: process.env.NODE_ENV,
    root: pth.normalize(__dirname + '/../../..'),
    port: process.env.PORT || 9000
};