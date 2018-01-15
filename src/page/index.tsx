import * as ReactDOM  from 'react-dom';
import * as React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
//项目样式表
import '../common/style/main.less';
//组件库样式表
import 'antd/dist/antd.less';
import routeConfig from '../route/route';


ReactDOM.render(
    <Provider store={store}>
      {routeConfig}
    </Provider>,
    document.getElementById('root') as HTMLElement
  );

