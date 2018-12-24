import { connect } from "dva";
import * as React from 'react';
import Mainview from "../../components/Layout/mainview";

class Usdelete extends React.Component {
  render(){
    return (
      <Mainview>
        <div>Delete User</div>
      </Mainview>
    )
  }
}


export default connect()(Usdelete)
