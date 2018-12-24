import * as React from 'react';
import {connect} from 'dva';
import * as Redux from 'redux';
import Menus from '../../components/Layout/menus'
import Articles from '../../components/Article/index'
import Mainview from '../../components/Layout/mainview';

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
    return (
      <div>
        <Mainview>
          <Articles listDatas={this.props.articles} dispatch={this.props.dispatch}/>
        </Mainview>
      </div>
    )
  }


}

function mapStateToProps(state: any): MainProps {
  return state[MainNamespace]
}

export default connect(mapStateToProps)(Main)
