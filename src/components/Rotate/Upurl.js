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
const { TextArea } = Input;
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
      const data = {
        address: fieldsValue['answer-content']
      }
      console.log(data)
      this.props.dispatch(addNewAddressAction(fieldsValue['answer-content']))
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>

        <Form.Item
          {...formItemLayout}
          label="图片对应网址："
        >
          {/*<span className="ant-form-text">训练营题目优质答案：</span>*/}
          {getFieldDecorator('answer-content', {
            rules: [{
              required: true,
              message: '请输入图片对应网址',
            }],
          })(
            <TextArea style={{marginTop: '20px'}} rows={4} />
          )}
        </Form.Item>
        <Button type="primary" htmlType="submit" style={{marginTop: '20px'}}>添加图片对应网址内容</Button>
      </Form>)
  }
}

const UrlAdd = Form.create({ name: 'url_related' })(Upurl);

export default UrlAdd;

