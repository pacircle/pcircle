import { Icon, Menu } from 'antd';
import { style } from "typestyle";

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
      defaultSelectedKeys={['3']}
      defaultOpenKeys={['sub2']}
      mode={'inline'}
    >
      <Menu.SubMenu key={"sub1"} title={<span><Icon type="user" /><span>用户管理</span></span>}>
        <Menu.Item key="1">用户信息查看</Menu.Item>
        <Menu.Item key="2">用户删除</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key={"sub2"} title={<span><Icon type="file-text" /><span>文章管理</span></span>}>
        <Menu.Item key={"3"}>查看所有文章</Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu key={"sub3"} title={<span><Icon type="solution" /><span>评论管理</span></span>}>
        <Menu.Item key={"4"}>查看所有评论</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  )
}

export default Menus
