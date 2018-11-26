import * as React from 'react';
import { connect } from 'dva';
import Commodity from "../components/main/commodity";
import { queryShopInfoAction } from "../models/main/shopinfo";
import { queryFirstCommodAction } from "../models/main/firstcommod";
import { changeDetailAction } from "../models/main/changeDetail";
import CommodDetail from "../components/main/commodDetail";
import { PREFIX as MainNamespace, } from '../models/main/index';
import { style } from "typestyle";
import Header from "../components/header";
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
        const containStyle = style({
            width: '100%',
            overflowX: 'auto',
            textAlign: 'center'
        });
        const commodStyle = style({
            // margin: 'auto',
            width: '220px',
            height: '300px',
            whiteSpace: "nowrap",
            float: 'left'
        });
        if (this.props.nowList === 0) {
            return (<div className={containStyle}>
          {this.props.commodList.map((items) => {
                return (<div className={commodStyle} key={items.id} onClick={this.commodClick.bind(this)}>
                <Commodity key={items.id} commodProps={items} image={require("../assets/weini.jpg")}/>
              </div>);
            })}
        </div>);
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
    renderDetailPage() {
        return (<div>
        <CommodDetail />
      </div>);
    }
    render() {
        const mainStyle = style({
            width: '100%',
            height: '100vh',
        });
        const centerStyle = style({
            width: '80%',
            height: '100vh',
            margin: 'auto',
            textAlign: 'center',
            background: 'white'
        });
        return (<div className={mainStyle}>
        <Header list={this.props.list} nowList={this.props.nowList} dispatch={this.props.dispatch}/>
        {this.props.detail ? this.renderDetailPage() : this.renderPage()}
      </div>);
    }
    commodClick(event) {
        if (this.props.dispatch) {
            this.props.dispatch(changeDetailAction(true));
            console.log(this.props.detail);
        }
    }
}
function mapStateToProps(state) {
    return state[MainNamespace];
}
export default connect(mapStateToProps)(Main);
//# sourceMappingURL=main.jsx.map