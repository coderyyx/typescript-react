import * as React from 'react';
import { Layout } from 'antd';
import TopMenu from '../common/component/menu';
const { Header, Footer, Sider, Content } = Layout;


class DefaultLayout extends React.Component {
    render() {
        return (
            <Layout className="my-demo">
                <Header>Welcome To Typescript World!</Header>
                <Layout>
                    <Sider>
                        <TopMenu/>
                    </Sider>
                    <Content>{this.props.children}</Content>
                </Layout>
                <Footer>@right my github</Footer>
            </Layout>
        );
    }
}

export default DefaultLayout;