import { Icon, Menu } from 'antd';
import { style } from "typestyle";
import { Link } from 'react-router';
// import Redux from 'redux';
import { connect } from 'dva';
import {
  PREFIX as MainNamespace,
} from '../../models/main/index'
import { changeMenuKeysAction } from '../../models/main/changeMenuKeys'

// const Menus = (menuprops) => {
//   console.log(menuprops)
//   const menuStyle = style({
//     height: '100vh'
//   })
//   const handleClick = (e) => {
//     console.log('click', e.keyPath)
//     menuprops.dispatch(changeMenuKeysAction(e.keyPath))
//   }
//   return (
//     <Menu
//       className={menuStyle}
//       onClick={handleClick}
//       style={{ width: '200' }}
//       defaultSelectedKeys={menuprops.selectedKeys}
//       defaultOpenKeys={menuprops.openKeys}
//       mode={'inline'}
//     >
//       <Menu.SubMenu key={"sub1"} title={<span><Icon type="file-text" /><span>文章及评论管理</span></span>}>
//         <Menu.Item key={"1"}><Link to={"/main"}>查看所有文章及评论信息</Link></Menu.Item>
//       </Menu.SubMenu>
//       <Menu.SubMenu key={"sub2"} title={<span><Icon type="user" /><span>用户管理</span></span>}>
//         <Menu.Item key="2"><Link to={"/user"}>所有用户信息查看</Link></Menu.Item>
//         <Menu.Item key="3"><Link to={"/usdelete"}>用户详细信息</Link></Menu.Item>
//       </Menu.SubMenu>
//       {/*<Menu.SubMenu key={"sub3"} title={<span><Icon type="solution" /><span>评论管理</span></span>}>*/}
//         {/*<Menu.Item key={"4"}>查看所有评论</Menu.Item>*/}
//       {/*</Menu.SubMenu>*/}
//     </Menu>
//   )
// }

// const Menuss = Menus(MainModelState)
class Menuss extends React.Component {
  constructor(props) {
    // console.log(MainState)
    // console.log(MainNamespace)
    super(props)
    // console.log(this.props)
    // console.log(this.props.selectedKeys)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick = (e) => {
    // console.log('click', e.keyPath)
    this.props.dispatch(changeMenuKeysAction(e.keyPath))
  }
  render() {
    const menuStyle = style({
      height: '100vh'
    })
    return (
      <div>
        <Menu
          className={menuStyle}
          onClick={this.handleClick}
          style={{ width: '200' }}
          defaultSelectedKeys={this.props.SelectedKeys}
          defaultOpenKeys={this.props.OpenKeys}
          mode={'inline'}
        >
          <Menu.SubMenu key={"sub1"} title={<span><Icon type="file-text" /><span>文章及评论管理</span></span>}>
            <Menu.Item key={"1"}><Link to={"/main"}>文章及评论</Link></Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key={"sub2"} title={<span><Icon type="user" /><span>用户管理</span></span>}>
            <Menu.Item key="2"><Link to={"/user"}>所有用户信息查看</Link></Menu.Item>
            <Menu.Item key="3"><Link to={{ pathname: "/usdetail" }}>用户详细信息</Link></Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu key={"sub3"} title={<span><Icon type="database" /><span>训练营管理</span></span>}>
            <Menu.Item key="4"><Link to={"/camp"}>训练营管理</Link></Menu.Item>
          </Menu.SubMenu>
          {/*<Menu.SubMenu key={"sub3"} title={<span><Icon type="solution" /><span>评论管理</span></span>}>*/}
          {/*<Menu.Item key={"4"}>查看所有评论</Menu.Item>*/}
          {/*</Menu.SubMenu>*/}
        </Menu>
        {/*<Menus selectedKeys={this.props.SelectedKeys} openKeys={this.props.OpenKeys} />*/}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state[MainNamespace]
}

// console.log(connect(mapStateToProps)(Menuss))

// export default connect()(Menus)
export default connect(mapStateToProps)(Menuss)
