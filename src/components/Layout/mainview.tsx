import * as React from 'react';
import { Layout, Icon } from "antd/lib/index";
import { style } from "typestyle/lib/index";
import Menus from './menus';

const {Header,Sider,Content} = Layout;
class Mainview extends React.Component<{},{}> {
  render() {
    const headerStyle = style({
      color: 'white',
      fontSize: '25px'
    })
    const contentStyle = style({
      background: 'white',
      height: '100vh',
    })
    return (
      <div>
        <Layout>
          <Header className={headerStyle}>
            <span><Icon type="pie-chart" /></span>
            <span>互联圈后台管理系统</span>
          </Header>
          <Layout>
            <Sider style={{ background: 'white' }}>
              <Menus></Menus>
            </Sider>
            <Content className={contentStyle}>
              {/*<Articles listDatas={this.props.articles} dispatch={this.props.dispatch}/>*/}
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }
}

export default Mainview;
