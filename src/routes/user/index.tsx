import * as React from 'react';
import * as Redux from 'redux';
import Mainview from "../../components/Layout/mainview";
import {UserState as UserModelState, PREFIX as UserNameSpace} from "../../models/user";
import {queryUserInfoAction} from "../../models/user/queryUserInfos";
import {connect} from "dva";
import UserTable from '../../components/User/usertable';
type UserProps = UserModelState
interface UserDispatchProps {
  dispatch: Redux.Dispatch<any>
}

class User extends React.Component<UserProps & UserDispatchProps,{}> {

  componentDidMount(){
    this.props.dispatch(queryUserInfoAction("http://result.eolinker.com/2iwkBiged241c5a42bdfb8b083224dbf190f8b770cac539?uri=/super/user"))
  }

  render(){
    return (
      <div>
        <Mainview dispatch={this.props.dispatch}>
          {this.props.userInfos? <UserTable userInfos={this.props.userInfos}/>: <div>暂无用户信息</div>}
        </Mainview>
      </div>
    )
  }
}

function mapStateToProps(state: any):UserProps {
  return state[UserNameSpace]
}
export default connect(mapStateToProps)(User)

