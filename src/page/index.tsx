import * as ReactDOM  from 'react-dom';
import * as React from 'react';
//项目样式表
import '../common/style/main.less';
//组件库样式表
import 'antd/dist/antd.less';
import routeConfig from '../route/route';

ReactDOM.render(routeConfig, document.getElementById('root'));

