 const path = require('path');

module.exports = {
    entry: path.resolve(_dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(_dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}