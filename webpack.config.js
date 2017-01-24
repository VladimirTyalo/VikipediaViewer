const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const PATHS = {
    app: path.join(__dirname, 'src/index.js'),
    dist: path.join(__dirname, 'dist'),
    src: path.join(__dirname, 'src')
};

// ---------- Common (development/production) webpack configuration -----------
const common = {
    entry: {
        app: PATHS.app
    },
    output: {
        path: PATHS.dist,
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        // for webpack version < 2.0 use ['', '.js', '.jsx']
        extensions: [
            '*', '.js', '.jsx', '.css'
        ],
        modules: ['node_modules', './src/components', './src/containers'],
        alias: {
            images: path.join(__dirname, 'src/assets/images')
        }
    },


    module: {

        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            }, {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders: 'style-loader!css-loader?modules&localIdentName=[name]__[local]--[hash:base64:7]'
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ title: 'Wikipedia Viewer', filename: 'index.html', template: 'src/templates/index.html', favicon: 'src/assets/images/favicons/favicon.ico' })]
};

const developmentConfig = {
    devtool: 'eval-source-map',
    devServer: {
        // Enable history API fallback so HTML5 History API based routing works. This is
        // a good default that will come in handy in more complicated setups.
        historyApiFallback: true,

        // Unlike the cli flag, this doesn't set HotModuleReplacementPlugin!
        hot: true,

        inline: true,

        // Display only errors to reduce the amount of output.
        stats: 'errors-only',
        // Parse host and port from env to allow customization.
        //
        // If you use Vagrant or Cloud9, set host: options.host || '0.0.0.0';
        //
        // 0.0.0.0 is available to all network devices unlike default `localhost`.
        host: process.env.HOST, // Defaults to `localhost`
        port: process.env.PORT, // Defaults to 8080

        watchOptions: {
            // Delay the rebuild after the first change
            aggregateTimeout: 300,
            // Poll using interval (in ms, accepts boolean too)
            poll: 1000
        }
    },
    plugins: [
        // Enable multi-pass compilation for enhanced performance in larger projects.
        // Good default.
        new webpack.HotModuleReplacementPlugin({
            // Disabled as this won't work with html-webpack-template yet multiStep: true,
        }),
        new webpack.NamedModulesPlugin(),
        // ignore node_modules so CPU usage with poll watching drops significantly
        new webpack.WatchIgnorePlugin([path.join(__dirname, 'node_modules')])
    ],

};

module.exports = function webpackConfig(env) {
    console.log(`env: ${env}`);

    if (env.toLowerCase() == 'production') {
        return common;
    }

    const dev = Object.assign({}, common, developmentConfig, {
        plugins: common
            .plugins
            .concat(developmentConfig.plugins)
    });

    return dev;
};
