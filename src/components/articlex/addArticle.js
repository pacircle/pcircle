import React from 'react';
import {Input, Button, Form} from 'antd';
import {addNewActicleAction} from "../../models/article/addNewArticle";
const { TextArea } = Input;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};
class AddArticle extends React.Component {
  state = {
    fields: {

    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return
      }
      console.log(fieldsValue)
      const articleItem = {
        openid: fieldsValue['input-openid'],
        title: fieldsValue['input-title'],
        content: fieldsValue['input-content'].replace(/\n/g, '↵')
      }

      this.props.dispatch(addNewActicleAction(articleItem))
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const fields = this.state.fields;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item
          {...formItemLayout}
          label="文章用户:"
        >
          {getFieldDecorator('input-openid', {
            rules: [{
              required: true,
              message: '请填入文章用户openid',
            }],
          })(
            <TextArea />
          )}
        </Form.Item>
        <div>例如：JAXX的openid:oX9m94ptsIueUmOZ1xyh0d-DOdew</div>
        <Form.Item
          {...formItemLayout}
          label="文章题目:"
        >
          {getFieldDecorator('input-title', {
            rules: [{
              required: true,
              message: '请填入文章题目',
            }],
          })(
            <TextArea />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="文章内容:"
        >
          {getFieldDecorator('input-content', {
            rules: [{
              required: true,
              message: '请填入文章内容',
            }],
          })(
            <TextArea rows={10} />
          )}
        </Form.Item>
        <Button type="primary" htmlType="submit">添加文章</Button>
      </Form>
    )
  }
}
const ArticleAdd = Form.create({ name: 'article_related_controls' })(AddArticle);

export default ArticleAdd
