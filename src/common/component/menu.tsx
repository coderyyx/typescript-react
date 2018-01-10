import * as React from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

interface menu_props{
    current:string
}

export default class App extends React.Component<{},menu_props> {
  constructor(props){
      super(props)
      this.state={
        current: 'mail'
      }
  }
  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    let {current} = this.state;
    return (
      <Menu
        onClick={this.handleClick}
        theme="dark"
        selectedKeys={[current]}
        mode="horizontal"
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
    );
  }
}