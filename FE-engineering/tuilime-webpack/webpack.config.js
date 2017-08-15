var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: './app.js',
    output: {
        filename: 'merge.js',
        path: path.resolve(__dirname,'dist')
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            }
        })
    ]
}