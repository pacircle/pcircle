import { List, Avatar, Icon, Button, Popconfirm, message } from 'antd';
import { deleteArticleAction } from "../../models/main/deletearticle";
import Comments from './dearticle'
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
  console.log(listDatas)
  if (!listDatas) {
    return null
  }
  const confirm = (id) => {
    console.log(id)
    dispatch(deleteArticleAction(id))
    message.success('删除成功')
  }
  const cancel = (e) => {
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
            key={item.id}
            actions={[<IconText type="like-o" text={item.agree || "0"} />, <IconText type="message" text={item.commentList.length || "0"} />,
              <Popconfirm title="是否确定删除用户" onConfirm={confirm.bind(this, item.id)} onCancel={cancel} okText="Yes" cancelText="No">
                <Button type="primary" >删除文章</Button>
              </Popconfirm>
            ]}
            extra={item.time}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.src} />}
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
