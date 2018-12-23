const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: path.join(__dirname, 'demo/index.jsx'),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: '/node_modules'
            },
            {
                test: /\.css$/,
                use: ['css-loader', 'style-loader']
            }
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: path.join(__dirname, 'demo/index.html')
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        port: 7000,
        disableHostCheck: true
    }
}