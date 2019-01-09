import { connect } from "dva";
import * as React from 'react';
import Mainview from "../../components/Layout/mainview";
import * as Redux from 'redux';
import {UsdetailState as UsdetailModelState,PREFIX as UsdetailNamespace} from "../../models/usdetail";
import UserDisplay from '../../components/Usdetail/display'
import {queryUserDetailAction} from "../../models/usdetail/queryUserDetail";
type UsdetailProps = UsdetailModelState

interface UsdetailDispatcherProps {
  dispatch: Redux.Dispatch<any>
}

class Usdetail extends React.Component<UsdetailProps & UsdetailDispatcherProps,{}> {
  componentDidMount(){
    console.log(this.props.location)
    this.props.dispatch(queryUserDetailAction("oX9m94sf5rxQ37n96pNFODb-HNWs"))
  }
  render() {
    return (
      <Mainview dispatch={this.props.dispatch}>
        <UserDisplay userInfo={this.props.userInfo}/>
      </Mainview>
    )
  }
}

function mapStateToProps(state: any): UsdetailProps {
  return state[UsdetailNamespace]
}

export default connect(mapStateToProps)(Usdetail)
