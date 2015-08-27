'use strict';

//var errors = require('./components/errors');

module.exports = function(app) {

    // Insert routes below
    app.use('/api/test', require('./api/test'));

    // All other routes should redirect to the index.html
    app.route('/*')
        .get(function(req, res) {
            res.sendFile(app.get('appPath') + '/'+ req.url);
        });
};