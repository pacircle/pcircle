import * as React from 'react'
import {connect} from 'dva'
import * as Redux from 'redux'
import Commodity from "../../components/main/commodity"
import { changeTestAction } from '../../models/main/changeTest'
import {queryShopInfoAction} from "../../models/main/shopinfo";
import {queryFirstCommodAction} from "../../models/main/firstcommod";
import {changeDetailAction} from "../../models/main/changeDetail";
import CommodDetail from "../../components/main/commodDetail"
import Menus from '../../components/Layout/menus'
import Articles from '../../components/Article/index'

import {
  MainState as MainModelState, PREFIX as MainNamespace,
} from '../../models/main/index'

import {style} from "typestyle"

import {Menu,Icon,Layout} from 'antd';
import {queryActicleInfoAction} from "../../models/main/queryArticles";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const MenuItem = Menu.Item;
const {Header,Footer,Sider,Content} = Layout;
declare function require(path: string): any;
type MainProps = MainModelState

interface MainDispatcherProps {
  dispatch: Redux.Dispatch<any>
}

class Main extends React.Component<MainProps & MainDispatcherProps, {}> {


  componentDidMount(){
    this.props.dispatch(queryActicleInfoAction("http://result.eolinker.com/2iwkBiged241c5a42bdfb8b083224dbf190f8b770cac539?uri=/super/index"))
  }

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
            <span><Icon type="pie-chart"/></span>
            <span>互联圈后台管理系统</span></Header>
          <Layout>
            <Sider style={{background: 'white'}}>
              <Menus></Menus>
            </Sider>
            <Content className={contentStyle}>
              <Articles listDatas={this.props.articles} dispatch={this.props.dispatch}/>
            </Content>
          </Layout>
        </Layout>
      </div>
    )
  }


}

function mapStateToProps(state: any): MainProps {
  return state[MainNamespace]
}

export default connect(mapStateToProps)(Main)
