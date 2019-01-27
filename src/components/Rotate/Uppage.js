import { Upload, Button, Icon } from 'antd';
import React, {Component} from 'react';
import './Uppage.css'

const fileList = [{
  uid: '-1',
  name: 'xxx.png',
  status: 'done',
  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}, {
  uid: '-2',
  name: 'yyy.png',
  status: 'done',
  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}];

const props = {
  action: 'https://wechatx.offerqueens.cn/super/rotate/create?',
  listType: 'picture',
  defaultFileList: [...fileList],
  className: 'upload-list-inline',
  headers: {'Access-Control-Allow-Methods': 'GET'} //TODO 暂时还是有问题
};

class Upitem extends React.Component {
  render() {
    return (
      <div>
        <Upload {...props}>
          <Button>
            <Icon type="upload" /> Upload
          </Button>
        </Upload>
      </div>
    )
  }
}

export default Upitem;
