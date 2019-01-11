import React from 'react';
import { List, Avatar, Icon } from 'antd';
import { style } from "typestyle/lib/index";

import Articles from '../../components/Article/index'

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }}></Icon>
    {text}
  </span>
)

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

class UserDisplay extends React.Component {
  componentDidMount() {
    console.log('userInfo', this.props.userInfo)
  }
  render() {
    const articleStyle = style({
      fontSize: '25px'
    })
    return (
      <div>
        <div style={{ marginLeft: '10px' }}>
          {this.props.articles ? <div>
            <div className={articleStyle}>当前用户发表的文章总数：{this.props.articles.length}</div>
            <Articles listDatas={this.props.articles} dispatch={this.props.dispatch} />
          </div> : <div>暂无文章</div>}
          {/*<List*/}
            {/*itemLayout="vertical"*/}
            {/*size="large"*/}
            {/*// pagination={{*/}
            {/*//   onChange: (page) => {*/}
            {/*//     console.log(page);*/}
            {/*//   },*/}
            {/*//   pageSize: 3,*/}
            {/*// }}*/}
            {/*dataSource={[this.props.userInfo]}*/}
            {/*// footer={<div><b>ant design</b> footer part</div>}*/}
            {/*renderItem={item => (*/}
              {/*<List.Item*/}
                {/*key={item._id}*/}
                {/*// actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}*/}
              {/*>*/}
                {/*<List.Item.Meta*/}
                  {/*avatar={<Avatar src={item.avatarUrl} />}*/}
                  {/*title={<a href={item.href}>{item.nickName}</a>}*/}
                  {/*// description={item.description}*/}
                {/*/>*/}
                {/*/!*{item.content}*!/*/}
              {/*</List.Item>*/}
            {/*)}*/}
          {/*/>*/}
        </div>
      </div>
    )
  }
}

export default UserDisplay
