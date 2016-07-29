const webpack = require('webpack')
module.exports = {
    entry: {
        react_fetch:[
            "./src/githubcardlist.js"
        ],
        router:[
        "./router.js"]
    },
    output: {
        path: __dirname,
        filename: "./dist/[name].bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            // { test: /\.(js|jsx)$/, loader: 'jsx-loader?harmony', exclude: /node_modules/ },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
            //ES6 and React transpile with Babel-Loader
            { test: /\.(js|jsx)$/,exclude:/node_modules/,loader:'babel',query:{presets:['react','es2015']}}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js')
    ],
    resolve: {
        extensions: ['', '.js', '.coffee', '.jsx', '.css', '.scss'],
        modulesDirectories: [
            'node_modules'
        ],
        alias: {
            Shop : 'app/ShopList.js',
            Moment : 'moment/MomentList.js'
        }
    }
};
