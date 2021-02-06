const path = require('path');

module.exports = {
    entry: {
        main: path.resolve(_dirname, './src/index.js'),
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
}