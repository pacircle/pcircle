import * as React from 'react';
import {connect} from 'dva';
import * as Redux from 'redux';
import Menus from '../../components/Layout/menus'
import Articles from '../../components/Article/index'
import Mainview from '../../components/Layout/mainview';
import UrlAdd from '../../components/Rotate/Upurl.js'
import {
  RotateState as RotateModelState, PREFIX as RotateNamespace,
} from '../../models/rotate/index'
import Upitem from '../../components/Rotate/Uppage.js'

import {style} from "typestyle"

import {Menu,Icon,Layout,Card} from 'antd';
import {queryNowAddressAction} from "../../models/rotate/querynowaddress";
import {changeMenuKeysAction} from "../../models/main/changeMenuKeys";
declare function require(path: string): any;
type RotateProps = RotateModelState

interface RotateDispatcherProps {
  dispatch: Redux.Dispatch<any>
}
const {Meta} = Card;
const wechat = require('./wechat.jpeg')
class Rotate extends React.Component<RotateProps & RotateDispatcherProps, {}> {


  componentDidMount(){
    // this.props.dispatch(queryNowAddressAction('http://127.0.0.1:7979/super/rotate/index'))
    this.props.dispatch(queryNowAddressAction('https://wechatx.offerqueens.cn/super/rotate/index'))
    this.props.dispatch(changeMenuKeysAction(["7", "sub4"]))
  }

  render() {
    const articleStyle = style({
      fontSize: '25px'
    })
    return (
      <div>
        <Mainview dispatch={this.props.dispatch}>
          {/*<Upitem/>*/}
          <Card
            hoverable
            style={{ width: 600 }}
            cover={<img alt="example" src={wechat} />}
          >
            <Meta
              title="当前对应文章内容"
              description={this.props.addressProp? `${this.props.addressProp.address}`:"暂无当前网址"}
            />
          </Card>
          <UrlAdd dispatch={this.props.dispatch} />
        </Mainview>
      </div>
    )
  }


}

function mapStateToProps(state: any): RotateProps {
  return state[RotateNamespace]
}

export default connect(mapStateToProps)(Rotate)
