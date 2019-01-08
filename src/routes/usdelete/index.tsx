import { connect } from "dva";
import * as React from 'react';
import Mainview from "../../components/Layout/mainview";
import * as Redux from 'redux';
interface UsdeleteDispatcherProps {
  dispatch: Redux.Dispatch<any>
}

class Usdelete extends React.Component<UsdeleteDispatcherProps,{}> {
  render() {
    return (
      <Mainview dispatch={this.props.dispatch}>
        <div>Delete User</div>
      </Mainview>
    )
  }
}


export default connect()(Usdelete)
