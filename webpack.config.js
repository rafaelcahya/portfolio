const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
entry: {
    main: [
        './src/index.js'
    ]
},
output: {
    filename: './public/[name].js'
},
module: {
    loaders: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {presets: ['env', 'react'] }
        }
        
    ]
},
}