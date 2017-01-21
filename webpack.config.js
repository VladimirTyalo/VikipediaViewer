const path = require('path');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'build.js',
        publicPath: '/dist/'
    },
    resolve: {
        // for webpack version < 2.0 use ['', '.js', '.jsx']
        extensions: ['*', '.js', '.jsx']
    },
    module: {

        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ["react", "es2015", "stage-0"]
                }
            }
        ]
    }
}