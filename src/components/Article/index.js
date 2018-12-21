import { List, Avatar, Icon, Button, Popconfirm, message } from 'antd';
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }}></Icon>
    {text}
  </span>
)
const confirm = (e) => {
  console.log(e)
  message.success('删除成功')
}
const cancel = (e) => {
  console.log(e)
  message.error('取消删除')
}
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
const Articles = () => {
  return (
    <div style={{ marginLeft: '10px' }}>
      <List
        itemLayout={"vertical"}
        size={"large"}
        dataSource={listData}
        pagination={{
          onChange: (page) => {
            console.log(page)
          },
          pageSize: 10
        }}
        // footer={<div><b>ant design</b> footer part</div>}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />,
              <IconText type="message" text="2" />,
              <Popconfirm title="是否确定删除用户" onConfirm={confirm} onCancel={cancel} okText="Yes" cancelText="No">
                <Button type="primary">删除用户</Button>
              </Popconfirm>
            ]}
            // extra={<Icon type="close" />}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      >
      </List>
    </div>
  )
}

export default Articles
