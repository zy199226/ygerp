const path = require('path');

module.exports = {
    entry: {
        app: path.join(__dirname, '../src/main.js')
    },

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].js',
        publicPath: '/public'
    },

    module: {
        rules: [
            {
                test: /.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /.(js)$/,
                loader: 'babel-loader',
                exclude: [
                    path.join(__dirname, '../node_modules') // 由于node_modules都是编译过的文件，这里我们不让babel去处理其下面的js文件
                ]
            }
        ]
    }
};
