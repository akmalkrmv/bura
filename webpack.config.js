var path = require('path');

module.exports = { 
    mode: 'development',
    entry: './src/js/main.ts',
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        publicPath: '/dist/',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    }
};