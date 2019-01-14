import {
  Form, Button, Upload, Input, Icon
} from 'antd';

class Adds extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item {...formItemLayout} label="Name">
            {getFieldDecorator('username', {
              rules: [{
                required: true,
                message: '需要图片对应的跳转地址',
              }],
            })(
              <Input placeholder="图片对应的跳转地址" />
            )}
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="Upload"
          >
            {getFieldDecorator('upload', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <Upload name="logo" listType="picture">
                <Button>
                  <Icon type="upload" /> Click to upload
                </Button>
              </Upload>
            )}
          </Form.Item>

        </Form>
      </div>
    )
  }
}
const AddPic = Form.create({ name: 'validate_other' })(Adds);

export default AddPic
