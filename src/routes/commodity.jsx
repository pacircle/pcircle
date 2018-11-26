import React from 'react';
import { PREFIX as CommodityNamespaces } from "../models/commodity";
import { connect } from "dva";
class Commodity extends React.Component {
    componentDidMount() {
    }
    render() {
        return (<div>
        Test
      </div>);
    }
}
function mapStateToProps(state) {
    return state[CommodityNamespaces];
}
export default connect(mapStateToProps)(Commodity);
//# sourceMappingURL=commodity.jsx.map