module.exports = {
    name: 'default',
    entry: './lib/index.js',
    output: {
        library: 'sio',
        libraryTarget: 'umd',
        filename: 'socket.io.dev.js'
    },
    externals: {
        global: glob(),
        json3: 'JSON'
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {presets: ['es2015']}
        }, {
            test: /\json3.js/,
            loader: 'imports?define=>false'
        }, {
            test: /\.js$/,
            loader: 'strip-loader?strip[]=debug'
        }]
    }
};

/**
 * Populates `global`.
 *
 * @api private
 */

function glob() {
    return 'typeof self !== "undefined" ? self : ' +
        'typeof window !== "undefined" ? window : ' +
        'typeof global !== "undefined" ? global : {}';
}
