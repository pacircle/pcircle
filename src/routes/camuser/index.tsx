import * as React from 'react';
import * as Redux from 'redux';
import Mainview from "../../components/Layout/mainview";
import {UserState as UserModelState, PREFIX as UserNameSpace} from "../../models/user";
import {queryUserInfoAction} from "../../models/user/queryUserInfos";
import {connect} from "dva";
import UserTable from '../../components/User/usertable';
import {style} from "typestyle";
type UserProps = UserModelState
interface UserDispatchProps {
  dispatch: Redux.Dispatch<any>
}
import CamTable from '../../components/Camuser/camtable.js'
import {changeMenuKeysAction} from "../../models/main/changeMenuKeys";

class Camuser extends React.Component<UserProps & UserDispatchProps, {}> {


  componentDidMount(){
    // this.props.dispatch(queryUserInfoAction("http://127.0.0.1:7979/camp/user/all"))
    this.props.dispatch(queryUserInfoAction("https://wechatx.offerqueens.cn/camp/user/all"))
    this.props.dispatch(changeMenuKeysAction(["6", "sub3"]))
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
          <CamTable userInfos={this.props.userInfos} dispatch={this.props.dispatch}/>
        </Mainview>
      </div>
    )
  }


}

function mapStateToProps(state: any): UserProps {
  return state[UserNameSpace]
}

export default connect(mapStateToProps)(Camuser)
