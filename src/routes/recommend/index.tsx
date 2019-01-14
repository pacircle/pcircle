import * as React from 'react';
import {connect} from 'dva';
import * as Redux from 'redux';
import Mainview from '../../components/Layout/mainview';

import {
  RecommendState as RecommendModelState, PREFIX as RecommendNamespace,
} from '../../models/recommend/index'
import AddPic from "../../components/Recommend/addPic"

import {style} from "typestyle"

import {Menu,Icon,Layout, Upload, Button,Input} from 'antd';

declare function require(path: string): any;
type RecommendProps = RecommendModelState

interface RecommendDispatcherProps {
  dispatch: Redux.Dispatch<any>
}
const fileList = [{
  uid: '-1',
  name: 'xxx.png',
  status: 'done',
  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}, {
  uid: '-2',
  name: 'yyy.png',
  status: 'done',
  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}];

const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  defaultFileList: [...fileList],
};


class Recommend extends React.Component<RecommendProps & RecommendDispatcherProps, {}> {


  componentDidMount(){

  }

  render() {

    return (
      <div>
        <Mainview dispatch={this.props.dispatch}>
          <div>Recommend</div>
          <AddPic/>
        </Mainview>
      </div>
    )
  }


}

function mapStateToProps(state: any): RecommendProps {
  return state[RecommendNamespace]
}

export default connect(mapStateToProps)(Recommend)
