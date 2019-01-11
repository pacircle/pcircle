import { connect } from "dva";
import * as React from 'react';
import Mainview from "../../components/Layout/mainview";
import * as Redux from 'redux';
import { Card, Avatar, Icon } from "antd";
import {UsdetailState as UsdetailModelState,PREFIX as UsdetailNamespace} from "../../models/usdetail";
import UserDisplay from '../../components/Usdetail/display'
import {queryUserDetailAction} from "../../models/usdetail/queryUserDetail";
import {changeMenuKeysAction} from "../../models/main/changeMenuKeys";

type UsdetailProps = UsdetailModelState
const { Meta } = Card;
interface UsdetailDispatcherProps {
  dispatch: Redux.Dispatch<any>
}

class Usdetail extends React.Component<UsdetailProps & UsdetailDispatcherProps,{}> {
  componentDidMount(){
    console.log(this.props.location)
    this.props.dispatch(queryUserDetailAction(this.props.location.query.userId))
  }
  render() {
    return (
      <Mainview dispatch={this.props.dispatch}>
        {this.props.userInfo?
          <div>
            <Card>
              <Meta
                avatar={<Avatar src={this.props.userInfo.avatarUrl.toString()} />}
                title={this.props.userInfo.nickName}
                description={"用户openId：" + this.props.userInfo._id}
              />
            </Card>
            {/*<Card>*/}
              {/*<Meta*/}
                {/*// avatar={<Avatar src={this.props.userInfo.avatarUrl.toString()} />}*/}
                {/*// title={this.props.userInfo.nickName}*/}
                {/*description={"用户性别：" + this.props.userInfo._id}*/}
              {/*/>*/}
            {/*</Card>*/}
            <UserDisplay articles={this.props.userInfo.articleDetail} dispatch={this.props.dispatch}/>
          </div> : null
          }

      </Mainview>
    )
  }
}

function mapStateToProps(state: any): UsdetailProps {
  return state[UsdetailNamespace]
}

export default connect(mapStateToProps)(Usdetail)
