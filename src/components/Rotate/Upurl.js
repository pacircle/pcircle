import { Upload, Button, Icon, Form, Input } from 'antd';
import React, {Component} from 'react';
import {addNewAddressAction} from "../../models/rotate/addNewAddress";

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

class Upurl extends React.Component {
  state = {
    fields: {
      content: {
        value: '',
      },
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      console.log(fieldsValue)
      // const data = {
      //   address: fieldsValue['answer-content']
      // }
      // console.log(data)
      this.props.dispatch(addNewAddressAction(fieldsValue['answer-content']))
      // const data = {
      //   campId: this.props.campId,
      //   content: fieldsValue['answer-content']
      // }
      // this.props.dispatch(addNewAnswerAction(data))
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>

        <Form.Item
          {...formItemLayout}
          label="对应文章地址："
        >
          {/*<span className="ant-form-text">训练营题目优质答案：</span>*/}
          {getFieldDecorator('answer-content', {
            rules: [{
              required: true,
              message: '请填入更新的图片对应文章地址',
            }],
          })(
            <Input />
          )}
        </Form.Item>
        <Button type="primary" htmlType="submit">添加图片对应文章地址</Button>
      </Form>)
  }
}

const UrlAdd = Form.create({ name: 'url_related' })(Upurl);

export default UrlAdd;

