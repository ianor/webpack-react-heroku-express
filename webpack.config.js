var Webpack = require('webpack'),
    path = require('path'),
    nodeModulesPath = path.resolve(__dirname, 'node_modules'),
    buildPath = path.resolve(__dirname, 'client', 'build'),
    contentBase = path.resolve(__dirname, 'client'),
    mainPath = path.resolve(__dirname, 'client', 'app', 'main.js');

module.exports = {
    devtool: 'eval',
    //progress: true,
    //colors: true,
    context: contentBase,
    contentBase: contentBase,
    entry: [
        mainPath
    ],
    output: {
        path: buildPath,
        filename: "bundle.js",
        publicPath: '/build/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: nodeModulesPath,
                loader: 'babel'
            },
            {
                test: /\.js$/,
                loader: 'jsx-loader'
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass?sourceMap"
            },
            { test: /\.png$/, loader: "url-loader?limit=100000" },
            { test: /\.jpg$/, loader: "file-loader" }
        ]
    }
};

if(process.env.NODE_ENV === 'development') {
    module.exports.plugins = [new Webpack.HotModuleReplacementPlugin()];
    module.exports.entry.push("webpack/hot/dev-server");
}