
安装依赖：
```
npm install
```

使用typescript 来写react，基于 webpack1 和 webpack-dev-server 搭建的项目脚手架，当运行`npm run dev`启动开发模式后，可以在浏览器不刷新页面的情况下热加载代码。（为啥没有使用webpack2呢，因为我自己也没有搭建起基于webpack2的热加载 ^_^）

关键配置是这几行：
```
test: /\.tsx?$/,
exclude: /(node_modules)/,
loaders: [
    'react-hot-loader',
    'awesome-typescript-loader'
]
```

打包：
```
npm run build
```

除了`index.html`页面，其他所有源码都放在src目录下，编译之后会把代码生成到build目录下。
此项目是多页面的形式，src目录下的`page`文件夹用来放各个业务模块的页面，webpack的配置会自动读取此目录及其任意子目录下的`index.tsx`作为各页面的入口文件。
我也建议同一个页面的相关代码放到同一个文件夹下面。比如TestUserInfo相关的tsx、css文件等都放在TestUserInfo目录下。
src目录下的common放的是公共业务代码。
src目录下还有一个lib目录，准备用来放引入的不能用npm管理的外部库，和common的区别是，lib里放的是外面第三方写的库，common里放自己写的代码。

各个页面公用同一个`index.html`，通过参数js加载不同的入口js文件。
比如：
```
http://localhost:8123/index.html?js=page/TestUserInfo/index
```

我这个例子拿的是antd库来举例，如果不需要，你可以删除相关的代码。


