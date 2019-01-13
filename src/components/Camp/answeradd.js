import React from 'react';
import {
  Form, Input, Icon, Button, DatePicker, InputNumber
} from 'antd';

let id = 0;
const { RangePicker } = DatePicker;
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


class TimeRange extends React.Component {
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

    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const fields = this.state.fields;
    return (
      <Form onSubmit={this.handleSubmit}>

        <Form.Item
          {...formItemLayout}
          label="训练营答案："
        >
          {/*<span className="ant-form-text">训练营题目优质答案：</span>*/}
          {getFieldDecorator('content', {
            rules: [{
              required: true,
              message: '请填入训练营优质答案',
            }],
          })(
            <Input />
          )}
        </Form.Item>
        <Button type="primary" htmlType="submit">添加优质回答</Button>
      </Form>)
  }
}
const AnswerAdd = Form.create({ name: 'time_related_controls' })(TimeRange);


export default AnswerAdd
