var glob = require('glob');
var path  = require('path');
var webpack = require('webpack');
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
    entry: "./src/page/index.tsx",
    output: {
        path:path.resolve(__dirname,"build"),
        filename:"bundle.js"
            },
    watch: true,
    //生成映射，便于调试
    devtool: 'eval-source-map',
    resolve: {
          extensions: ['.js','.jsx',".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".less", ".css"]
    },
    module: {
      rules: [
        { 
          test: /\.tsx?$/, 
          use: ['react-hot-loader', 'awesome-typescript-loader'],
          exclude: /node_modules/
        },
        {
          test: /\.less$/,
          use: ['style-loader', 'css-loader',"less-loader"]
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|jpg|gif)$/,
          exclude: /^node_modules$/,
          use:'url-loader?limit=12000&name=./Layout/page/images/[name].[ext]'
          //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
        }
      ]
    },
    plugins: [
      new webpack.optimize.ModuleConcatenationPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        output:{
          comments:false//remove comments
        },
        compress: {
          warnings: false,
          drop_console: true, //移除console.log
          pure_funcs: ['console.log']
        }
  
      }),
      new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify("development")
        },
      }),
      new webpack.NoEmitOnErrorsPlugin()
  
    ]
  };