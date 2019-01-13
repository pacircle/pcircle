import React from 'react';
import {
  Form, Input, Icon, Button, DatePicker, InputNumber
} from 'antd';
import { addNewCampAction, campItem } from "../../models/camp/addNewCamp";

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
      username: {
        value: 'benjycui',
      },
      des: {
        value: 'beni',
      },
    },
  };


  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      // Should format date value before submit.
      const rangeValue = fieldsValue['range-picker'];
      // const valueName = fieldsValue['global_state']
      const values = {
        ...fieldsValue,
        'range-picker': [rangeValue[0].format('YYYY-MM-DD HH:mm:SS'), rangeValue[1].format('YYYY-MM-DD HH:mm:SS')],
        // 'global_state': valueName
      };
      console.log('Received values of form: ', values);
      const campItem = {
        order: fieldsValue['input-index'],
        content: fieldsValue['input-name'],
        description: fieldsValue['input-des'],
        startTime: rangeValue[0].format('YYYY-MM-DD HH:mm:SS'),
        endTime: rangeValue[1].format('YYYY-MM-DD HH:mm:SS')
      }
      this.props.dispatch(addNewCampAction(campItem))
      console.log(fieldsValue)

    });
  }
  render() {
    const rangeConfig = {
      rules: [{ type: 'array', required: true, message: 'Please select time!' }],
    };
    const { getFieldDecorator } = this.props.form;
    const fields = this.state.fields;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item
          {...formItemLayout}
          label="训练营期数"
        >
          <span className="ant-form-text">第</span>
          {getFieldDecorator('input-index', {
            rules: [{
              required: true,
              message: '请填入训练营期数',
            }],
          })(
            <InputNumber />
          )}
          <span className="ant-form-text"> 期</span>
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="训练营题目"
        >
          {getFieldDecorator('input-name', {
            rules: [{
              required: true,
              message: '请填入训练营题目',
            }],
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="训练营题目描述"
        >
          {getFieldDecorator('input-des', {
            rules: [{
              required: true,
              message: '请填入训练营描述',
            }],
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="训练营时间"
        >
          {getFieldDecorator('range-picker', rangeConfig)(
            <RangePicker />
          )}
        </Form.Item>
        <Button type="primary" htmlType="submit">创建最新一期训练营</Button>
      </Form>)
  }
}
const CampAdd = Form.create({ name: 'time_related_controls' })(TimeRange);


export default CampAdd
