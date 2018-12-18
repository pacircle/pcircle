import React,{Component} from 'react'
import {CommodityState as CommodityProps,PREFIX as CommodityNamespaces} from "../models/commodity";
import {connect} from "dva";
import {style} from "typestyle";

class Commodity extends React.Component<CommodityProps,{}> {

  componentDidMount(){

  }
  render(){
    return (
      <div>
        Test
      </div>
    )
  }
}

function mapStateToProps(state: any):CommodityProps {
  return state[CommodityNamespaces]
}

export default connect(mapStateToProps)(Commodity)
