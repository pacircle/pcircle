import * as React from 'react'
import {connect} from 'dva'
import * as Redux from 'redux'

import {
  MainState as MainModelState, PREFIX as MainNamespace,
} from '../models/main/index'

import {style} from "typestyle"

declare function require(path: string): any;
type MainProps = MainModelState

interface MainDispatcherProps {
  dispatch: Redux.Dispatch<any>
}

class Main extends React.Component<MainProps & MainDispatcherProps, any> {


  render() {
    const mainStyle = style({
      width: '100%',
      height: '100vh'
    })
    const searchStyle = style({
      width: '90%',
      margin: '0 auto',
      position: "absolute",
      top: "32px",
      left: 0,
      right: 0
    })

    return (

      <div className={mainStyle}>
        Hello
      </div>
    )
  }



}

function mapStateToProps(state: any): MainProps {
  return state[MainNamespace]
}

export default connect(mapStateToProps)(Main)
