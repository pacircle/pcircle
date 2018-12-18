import React, { Component } from 'react'
import { shopProps } from "../../models/main";
import styles from "./commod.css"

class CommodDetail extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      control: "定金下单后，30分钟内完成付款，超时将自动关闭订单；定制类预售产品不接受七天內无条件付款"
    }
  }

  renderRotation() {
    const imgUrl = [
      "https://img.alicdn.com/imgextra/i2/2064892827/O1CN01SNqILc1Wko9nElwP5_!!0-item_pic.jpg_430x430q90.jpg",
      "https://img.alicdn.com/imgextra/i3/2064892827/O1CN011Wko8tWfYIxdbHo_!!2064892827.jpg_430x430q90.jpg",
      "https://img.alicdn.com/imgextra/i4/2064892827/O1CN011Wko9WwRoZfFRRN_!!2064892827.jpg_430x430q90.jpg",
      "https://img.alicdn.com/imgextra/i2/2064892827/O1CN011Wko9ZkLyDxK9FS_!!2064892827.jpg_430x430q90.jpg"
    ]
    const urlStyle = {
      // display: 'flex',
      textAlign: 'center'
    }
    return (
      <div style={urlStyle}>
        {imgUrl.map((item) => {
          return (
            <img
              src={item}
              alt={'item'}
              className={styles.img}
            />
          )
        })}
      </div>
    )
  }

  render() {
    const topStyle = {
      display: 'flex',
      width: '100%',
      height: '420px',
      marginTop: '20px',
    }
    const rotationStyle = {
      width: '35%',
      textAlign: 'center'
    }
    const bigStyle = {
      height: '100%',
      width: '100%',
    }
    const bigPicStyle = {
      width: '390px',
      height: '390px',
      marginTop: '10px'
    }
    const detailStyle = {
      // width: '45%',
      // marginLeft: '30px',
      marginTop: '20px',
    }
    const nameStyle = {
      fontSize: '18px',
      fontWeight: 'bold',
      color: 'black',
      marginLeft: '20px'
    }
    const desStyle = {
      color: '#ff4145',
      fontSize: '15px',
      marginLeft: '15px'
    }
    const itemStyle = {
      display: 'flex',
      flexDirection: 'row',
    }
    const tStyle = {
      width: '17%',
      fontSize: '14px',
      color: '#b1b1ae',
      marginLeft: '10px'
    }
    const pStyle = {
      // alignSelf: 'flex-end',
      // paddingRight: '400px',
      fontSize: '16px',
      textDecoration: 'line-through',
    }
    const yStyle = {
      // alignSelf: 'flex-end',
      // paddingRight: '400px',
      color: '#ff4145',
      fontSize: '20px'
    }
    const dStyle = {
      // alignSelf: 'flex-end',
      // paddingRight: '400px',
      color: '#ff4145',
      fontSize: '15px',
    }
    return (
      <div>
        <div style={topStyle}>
          <div style={rotationStyle}>
            <div style={bigStyle}>
              <img src={'https://img.alicdn.com/imgextra/i2/2064892827/O1CN011Wko9ZkLyDxK9FS_!!2064892827.jpg_430x430q90.jpg'}
                   alt={'image'}
                   style={bigPicStyle}
              />
            </div>
            <div>
              {this.renderRotation()}
            </div>
          </div>
          <div style={detailStyle}>
            <div style={nameStyle}>{this.props.shopProps.name}</div>
            <div style={desStyle}>{this.props.shopProps.description}</div>
            <div className={styles.priceStyle}>
              <div style={itemStyle}>
                <div style={tStyle}>价格</div>
                <div style={pStyle}>¥{this.props.shopProps.price}</div>
              </div>
              <div style={itemStyle}>
                <div style={tStyle}>预售价</div>
                <div style={yStyle}>¥{this.props.shopProps.taobaoPrice}</div>
              </div>
              <div style={itemStyle}>
                <div style={tStyle}>定金</div>
                <div style={dStyle}>¥100</div>
                <div className={styles.control}>预售规则V</div>
              </div>
            </div>
            <div className={styles.detail}>
              <div className={styles.detailItem}>
                <div className={styles.detailTag}>运费</div>
                <div className={styles.detailContent}>浙江杭州</div>
              </div>
              <div className={styles.detailItem}>
                <div className={styles.detailTag}>预定件数</div>
                <div className={styles.detailContent}>4420件</div>
              </div>
              <div className={styles.detailItem}>
                <div></div>
              </div>
              <div className={styles.detailItem}>
                <div className={styles.detailTag}>化妆品净含量</div>
                <div className={styles.detailContent}>化妆品净含量</div>
              </div>
              <div className={styles.detailItem}>
                <div className={styles.detailTag}>发货时间</div>
                <div className={styles.detailContent}>付款后7天内</div>
              </div>
              <div className={styles.detailItem}>
                <div className={styles.detailTag}>数量</div>
                <div className={styles.detailContent}>1 件</div>
                <div>库存360件</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

CommodDetail.PropTypes = {
  shopProps: shopProps
}

export default CommodDetail
