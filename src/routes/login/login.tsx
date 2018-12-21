import * as React from 'react'
import { connect } from 'dva'
import {Form,Icon, Input, Button, Checkbox} from 'antd';
const FormItem = Form.Item;
import {style} from "typestyle";

class Login extends React.Component<any, any> {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        if (values.userName === "sjtu_user" && values.password === "sjtu1225"){
          console.log('成功')
        }
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const mainStyle = style({
      maxWidth: "400px",
      margin: "auto",
      marginTop: '200px'
    })
    const loginStyle = style({
      maxWidth: "300px"
    })
    const forgotStyle = style({
      float: "right"
    })
    const buttonStyle = style({
      width: "100%"
    })
    const titleStyle = style({
      fontSize: '30px',
      textAlign: 'center'
    })
    return (
      <div className={mainStyle}>
        <Form onSubmit={this.handleSubmit} className={loginStyle}>
          <FormItem className={titleStyle}>
            互联圈用户管理系统
          </FormItem>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                     placeholder="Username"
                     onChange={e => console.log(e.target.value)}/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                     onChange={e => console.log(e.target.value)}
                     type="password"
                     placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            {/*<a className={forgotStyle} href="">Forgot password</a>*/}
            <Button type="primary" htmlType="submit" className={buttonStyle}>
              Log in
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default connect()(Form.create({})(Login))
