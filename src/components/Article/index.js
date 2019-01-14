import { List, Avatar, Icon, Button, Popconfirm, message, Tag } from 'antd';
import { hashHistory } from 'react-router'
import { deleteArticlesInfoAction } from "../../models/main/deletearticle";
import Comments from './dearticle'
import { changeMenuKeysAction } from "../../models/main/changeMenuKeys";
import {changeEliteArticleAction} from "../../models/main/changeEliteArticle";
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }}></Icon>
    {text}
  </span>
)
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    id: i,
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}


const Articles = ({ listDatas, dispatch }) => {
  // console.log(listDatas)
  if (!listDatas) {
    return null
  }
  const confirm = (id) => {
    console.log('id', id)
    dispatch(deleteArticlesInfoAction(id))
  }
  const cancel = (e) => {
    console.log(e)
    message.error('取消删除')
  }

  const confirmUser = (id) => {
    console.log('id', id)
    // dispatch(deleteArticlesInfoAction(id))
    dispatch(changeMenuKeysAction(["3", "sub2"]))
    hashHistory.push({
      pathname: '/usdetail',
      query: { userId: id }
    })
  }
  const cancelUser = (e) => {
    console.log(e)
    message.error('取消查看')
  }

  const conElite = (id) => {
    console.log('id', id)
    // dispatch(deleteArticlesInfoAction(id))
    dispatch(changeEliteArticleAction(id))
  }
  const cancelElite = (e) => {
    console.log(e)
    message.error('取消删除')
  }
  return (
    <div style={{ marginLeft: '10px' }}>
      <List
        itemLayout={"vertical"}
        size={"large"}
        dataSource={listDatas}
        pagination={{
          onChange: (page) => {
            console.log(page)
          },
          pageSize: 10
        }}
        // footer={<div><b>ant design</b> footer part</div>}
        renderItem={item => (
          <List.Item
            key={item._id}
            actions={[<IconText type="like-o" text={item.agree || "0"} />, <IconText type="message" text={item.commentList.length || "0"} />,
              <Popconfirm title="是否确定删除用户" onConfirm={confirm.bind(this, item._id.$oid)} onCancel={cancel} okText="Yes" cancelText="No">
                <Button type="primary" >删除文章</Button>
              </Popconfirm>,
              <Popconfirm title="是否确定查看用户" onConfirm={confirmUser.bind(this, item.userId)} onCancel={cancelUser} okText="Yes" cancelText="No">
              <Button type="primary" >查看用户</Button>
              </Popconfirm>,
              <Popconfirm title="是否确定查看用户" onConfirm={conElite.bind(this, item._id.$oid)} onCancel={cancelElite} okText="Yes" cancelText="No">
                <Button type="primary" >文章加精</Button>
              </Popconfirm>
            ]}
            extra={item.time}
          >
            <List.Item.Meta
              avatar={<div>{item.elite ? <Tag color="volcano">精华</Tag> : null}<Avatar src={item.avatarUrl} /></div>}
              title={<a href={item.href}>{item.title}</a>}
              description={item.sub}
            />
            {item.content}
            <Comments commentList={item.commentList} />
          </List.Item>
        )}
      >
      </List>
    </div>
  )
}

export default Articles
