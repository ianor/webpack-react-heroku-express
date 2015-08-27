var Webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');
var fs = require('fs');
var mainPath = path.resolve(__dirname, 'server', 'app.js');

module.exports = function () {

    var configFilePath = './webpack.config.js';
    var webpackConfig = require(configFilePath);

    // First we fire up Webpack an pass in the configuration we
    // created
    var bundleStart = Date.now();
    var compiler = Webpack(webpackConfig);

    compiler.plugin('compile', function() {
        console.log('* Bundling...');
        bundleStart = Date.now();
    });

    compiler.plugin('done', function() {
        console.log('* Bundled in ' + (Date.now() - bundleStart) + 'ms!');
    });


    //if we're in development, launch the dev server
    if(process.env.NODE_ENV === 'development') {
        var bundler = new WebpackDevServer(compiler, {

            // We need to tell Webpack to serve our bundled application
            // from the build path. When proxying:
            // http://localhost:3000/build -> http://localhost:8080/build
            publicPath: '/build/',

            // Configure hot replacement
            hot: true,

            // The rest is terminal configurations
            quiet: false,
            noInfo: false,
            stats: {
                colors: true
            }
        });

        // We fire up the development server and give notice in the terminal
        // that we are starting the initial bundle
        bundler.listen(8080, 'localhost', function () {
            console.log('Bundling project, please wait...');
        });
        
    } else {

        compiler.run(function(err) {
            if(err) {
                console.log('*** Error: Error while bundling!');
            }
        });

    }

};