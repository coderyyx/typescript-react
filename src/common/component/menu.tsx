import * as React from 'react';
import { Menu, Icon ,Button} from 'antd';
import {Tool} from '../../config/tool';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

interface state_shape{
    current:string;
    collapsed:boolean;
}

export default class App extends React.Component<{},state_shape> {
  constructor(props){
      super(props)
      this.state={
        current: 'mail',
        collapsed : false
      }
      Tool.bind(this,['handleClick','toggleCollapsed']);
  }
  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  toggleCollapsed() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    let {current,collapsed} = this.state;
    console.log(collapsed);
    return (
      <div>
          <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
            <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
          </Button>
          <Menu
            onClick={this.handleClick}
            theme="dark"
            mode="inline"
            selectedKeys={[current]}
            inlineCollapsed={collapsed}
          >
            <Menu.Item key="mail">
              <Icon type="mail" />主页
            </Menu.Item>
            <Menu.Item key="app">
              <Icon type="appstore" />个人中心
            </Menu.Item>
            <SubMenu title={<span><Icon type="setting" />设置</span>}>
              <MenuItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
            <Menu.Item key="alipay">
              <a href="https://github.com/coderyyx" target="_blank" rel="noopener noreferrer">my github</a>
            </Menu.Item>
          </Menu>
      </div>
    );
  }
}