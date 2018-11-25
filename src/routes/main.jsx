import * as React from 'react';
import { connect } from 'dva';
import Commodity from "../components/main/commodity";
import { queryShopInfoAction } from "../models/main/shopinfo";
import { queryFirstCommodAction } from "../models/main/firstcommod";
import { PREFIX as MainNamespace, } from '../models/main/index';
import { style } from "typestyle";
import Header from "../components/main/header";
class Main extends React.Component {
    componentDidMount() {
        this.props.dispatch(queryShopInfoAction('/api/v1/commodity/index.json'));
        this.props.dispatch(queryFirstCommodAction('/api/v1/commodity/598c5f37609fdf1e2f4dd8c9.json'));
    }
    renderPage() {
        if (this.props.commodList && this.props.commodList.length > 0) {
            console.log(this.props.commodList);
        }
        else {
            console.log('列表为空');
        }
        const commodStyle = style({
            margin: 'auto'
        });
        if (this.props.nowList === 0) {
            return (<Commodity dispatch={this.props.dispatch} className={commodStyle} commodProps={this.props.commodList} image={require("../assets/weini.jpg")} name={"test"} price={1.0} description={"cartoon picture"} shop={"Disney"} location={"BeiJing"} people={33}/>);
        }
        else if (this.props.nowList === 1) {
            return (<div>{this.props.list[this.props.nowList].name}</div>);
        }
        else if (this.props.nowList === 2) {
            return (<div>{this.props.list[this.props.nowList].name}</div>);
        }
        else if (this.props.nowList === 3) {
            return (<div>{this.props.list[this.props.nowList].name}</div>);
        }
    }
    render() {
        const mainStyle = style({
            width: '100%',
            height: '100vh',
            background: "linear-gradient(to bottom,#A9A9A9,white)"
        });
        const centerStyle = style({
            width: '60%',
            height: '100vh',
            margin: 'auto',
            textAlign: 'center',
            background: 'white'
        });
        return (<div className={mainStyle}>
        <div className={centerStyle}>
          <Header list={this.props.list} nowList={this.props.nowList} dispatch={this.props.dispatch}/>
          {this.renderPage()}
        </div>
      </div>);
    }
}
function mapStateToProps(state) {
    return state[MainNamespace];
}
export default connect(mapStateToProps)(Main);
//# sourceMappingURL=main.jsx.map