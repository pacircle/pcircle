import * as React from 'react';
import {connect} from 'dva';
import * as Redux from 'redux';
import Menus from '../../components/Layout/menus'
import AddArticle from '../../components/articlex/addArticle'
import Mainview from '../../components/Layout/mainview';

import {
  ArticleState as ArticleModelState, PREFIX as ArticleNamespace,
} from '../../models/article/index'

import {style} from "typestyle"

import {Menu,Icon,Layout} from 'antd';
import {changeMenuKeysAction} from "../../models/main/changeMenuKeys";
// import {queryActicleInfoAction} from "../../models/article/addNewArticle";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const MenuItem = Menu.Item;
const {Header,Footer,Sider,Content} = Layout;
declare function require(path: string): any;
type ArticleProps = ArticleModelState

interface ArticleDispatcherProps {
  dispatch: Redux.Dispatch<any>
}

class Article extends React.Component<ArticleProps & ArticleDispatcherProps, {}> {


  componentDidMount(){
    // this.props.dispatch(queryActicleInfoAction("http://127.0.0.1:7979/super/index"))
    // this.props.dispatch(queryActicleInfoAction("https://wechatx.offerqueens.cn/super/index"))
    this.props.dispatch(changeMenuKeysAction(["2", "sub1"]))
  }

  render() {
    return (
      <div>
        <Mainview dispatch={this.props.dispatch}>
          <AddArticle dispatch={this.props.dispatch}/>
        </Mainview>
      </div>
    )
  }


}

function mapStateToProps(state: any): ArticleProps {
  return state[ArticleNamespace]
}

export default connect(mapStateToProps)(Article)
