import * as React from 'react'
import { connect } from 'dva'

class Hello extends React.Component<any, any> {

  render() {
    return (
      <h1>hello</h1>
    )
  }
}

export default connect()(Hello)
