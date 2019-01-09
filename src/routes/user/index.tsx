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

class User extends React.Component<UserProps & UserDispatchProps,{}> {

  componentDidMount(){
    this.props.dispatch(queryUserInfoAction("http://127.0.0.1:7979/super/user/all"))
  }

  render(){
    const articleStyle = style({
      fontSize: '25px'
    })
    return (
      <div>
        <Mainview dispatch={this.props.dispatch}>
          {this.props.userInfos?
            <div>
              <div className={articleStyle}>当前用户总数：{this.props.userInfos.length}</div>
              <UserTable userInfos={this.props.userInfos}/>
            </div>: <div>暂无用户信息</div>}
        </Mainview>
      </div>
    )
  }
}

function mapStateToProps(state: any):UserProps {
  return state[UserNameSpace]
}
export default connect(mapStateToProps)(User)

