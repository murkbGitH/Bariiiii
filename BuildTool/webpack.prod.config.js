var webpack = require("webpack");
var path = require('path');

var BUILD_DIR = path.resolve(__dirname) + "/dist/";
var APP_DIR = path.resolve(__dirname);
var config = {
    target: "electron",
    node: {
        __dirname: false,
        __filename: false
    },
    plugins: [
        // minify
        new webpack.optimize.UglifyJsPlugin({
            // 変数を省略しない
            mangle:false,
            // ライセンスコメントは残す
            output:{comments: require('uglify-save-license')}
        }),
    ],
    entry: {
        // build対象
        index: [APP_DIR + "/src/typescript/index.tsx"]
    },
    output: {
        // 出力先のディレクトリを指定する
        path: BUILD_DIR,
        // 出力するファイル名
        filename: "[name].js",
    },
    resolve: {
        root: [path.join(__dirname, 'node_modules')],
        // requireやimportしたときに省略を自動的に補完してくれる拡張子の一覧
        extensions: ['', '.tsx', '.ts', '.js', '.css', '.scss'],
        alias: {
            ons_css: __dirname + "/node_modules/onsenui/css/onsenui.css",
            ons_component_css: __dirname + "/node_modules/onsenui/css/onsen-css-components-purple-theme.css"
        }
    },
    module: {
        loaders: [
            {
                test: /\.ts(x?)$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "url-loader" 
            }
        ],
    },
};

module.exports = config;