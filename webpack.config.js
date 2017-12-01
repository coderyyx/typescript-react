var glob = require('glob');
var path  = require('path');
var files = glob.sync('./src/page/**/*/index.tsx');
var entry = {};
/*
入口文件
*/
files.forEach(function(f) {
    var name = /.*\/src(\/.*?\/index)\.tsx/.exec(f)[1]; //
    entry[name] = f;
});

module.exports = {
    entry: "./src/page/TestUserInfo/index.tsx",
    output: {
        // publicPath: '/build/',
        path:path.resolve(__dirname,"build"),
        filename:"bundle.js"
    },
    devtool: "source-map",
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".less", ".css"]
    },
    module: {
        loaders: [{
                test: /\.less$/,
                loader: "style!css!less"
            },{
                test: /\.css$/,
                loader: "style!css"
            },
            {
                test: /\.tsx?$/,
                exclude: /(node_modules)/,
                loaders: [
                    'react-hot-loader',
                    'awesome-typescript-loader'
                ]
            }
        ]
    }
};