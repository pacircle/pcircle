import React, { Component } from 'react'
import { shopProps } from "../../models/main";
import "./commod.css"

class CommodDetail extends Component {
  constructor(props) {
    super(props)
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
    const imgStyle = {
      width: '80px',
      height: '80px',
      margin: '10px',
      border: '2px solid black'
    }
    return (
      <div style={urlStyle}>
        {imgUrl.map((item) => {
          return (
            <img
              src={item}
              alt={'item'}
              style={imgStyle}
              // onMouseEnter={}
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
      marginTop: '20px'
    }
    const rotationStyle = {
      width: '45%',
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
      width: '45%',
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
            Test
          </div>
        </div>
        <div id={"all"} style={{marginTop: '200px' }}>Test222</div>
      </div>
    )
  }
}

CommodDetail.PropTypes = {
  shopProps: shopProps
}

export default CommodDetail
