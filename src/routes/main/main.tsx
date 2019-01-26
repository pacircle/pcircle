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
    // this.props.dispatch(queryActicleInfoAction("http://127.0.0.1:7979/super/index"))
    this.props.dispatch(queryActicleInfoAction("https://wechatx.offerqueens.cn/super/index"))
  }

  render() {
    const articleStyle = style({
      fontSize: '25px'
    })
    return (
      <div>
        <Mainview dispatch={this.props.dispatch}>
          {this.props.articles ? <div>
            <div className={articleStyle}>当前文章总数：{this.props.articles.length}</div>
            <Articles listDatas={this.props.articles} dispatch={this.props.dispatch}/>
          </div> : <div>暂无文章</div>}
        </Mainview>
      </div>
    )
  }


}

function mapStateToProps(state: any): MainProps {
  return state[MainNamespace]
}

export default connect(mapStateToProps)(Main)
