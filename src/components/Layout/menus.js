import { Icon, Menu } from 'antd';
import { style } from "typestyle";
import { Link } from 'react-router';

const Menus = () => {
  const menuStyle = style({
    height: '100vh'
  })
  const handleClick = (e) => {
    console.log('click', e)
  }
  return (
    <Menu
      className={menuStyle}
      onClick={handleClick}
      style={{ width: '200' }}
      defaultSelectedKeys={['2']}
      defaultOpenKeys={['sub2']}
      mode={'inline'}
    >
      <Menu.SubMenu key={"sub1"} title={<span><Icon type="file-text" /><span>文章及评论管理</span></span>}>
        <Menu.Item key={"1"}><Link to={"/main"}>查看所有文章及评论信息</Link></Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key={"sub2"} title={<span><Icon type="user" /><span>用户管理</span></span>}>
        <Menu.Item key="2"><Link to={"/user"}>所有用户信息查看</Link></Menu.Item>
        <Menu.Item key="3"><Link to={"/usdelete"}>用户详细信息</Link></Menu.Item>
      </Menu.SubMenu>
      {/*<Menu.SubMenu key={"sub3"} title={<span><Icon type="solution" /><span>评论管理</span></span>}>*/}
        {/*<Menu.Item key={"4"}>查看所有评论</Menu.Item>*/}
      {/*</Menu.SubMenu>*/}
    </Menu>
  )
}

export default Menus
