import * as React from 'react';
import {connect} from 'dva';
import * as Redux from 'redux';
import Menus from '../../components/Layout/menus'
import Articles from '../../components/Article/index'
import Mainview from '../../components/Layout/mainview';
import CampAdd from '../../components/Camp/campadd'
import CampItem from '../../components/Camp/campItem'

import {
  CampState as CampModelState, PREFIX as CampNamespace,
} from '../../models/camp/index'

import {style} from "typestyle"

import {Menu,Icon,Layout} from 'antd';
import {queryAllCampAction} from "../../models/camp/queryAllCamp";

declare function require(path: string): any;
type CampProps = CampModelState

interface MainDispatcherProps {
  dispatch: Redux.Dispatch<any>
}

class Camp extends React.Component<CampProps & MainDispatcherProps, {}> {


  componentDidMount(){
    this.props.dispatch(queryAllCampAction("http://127.0.0.1:7979/camp/all"))
  }


  render() {
    const campTestItem = []
    for (let i=0;i<2;i++){
      campTestItem.push({
        _id: `${i}`,
        order: `${i}`,
        name: `name${i}`,
        description: `description${i}`,
        startTime: "2019年1月4日 13：57：34",
        endTime: "2019年3月4日 13：37：01",
        answers: [{
          content: "答案描述",
          nickName: 'nickName',
          userId: "userID",
          avatarUrl: "http:////"
        }]
      })
    }
    return (
      <div>
        <Mainview dispatch={this.props.dispatch}>
          {this.props.campList.map(item => {
            return (
              <CampItem campProps={item} dispatch={this.props.dispatch}></CampItem>
            )
          })}
          <CampAdd dispatch={this.props.dispatch}/>
        </Mainview>
      </div>
    )
  }


}

function mapStateToProps(state: any): CampProps {
  return state[CampNamespace]
}

export default connect(mapStateToProps)(Camp)
