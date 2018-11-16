// import React from 'react'
import { connect } from 'dva'

function AutoImage() { // 图片比例适配
  // const image = new Image()
  // console.log(Img.image.props.src)
  // image.src = Img.image.props.src
  // image.alt = Img.image.props.alt
  // if (image.width < maxWidth && image.height < maxHeight) {
  //   image.width = Img.width
  //   image.height = Img.height
  // } else {
  //   if (maxWidth / maxHeight <= Img.width / Img.height) {
  //     image.width = maxWidth
  //     image.height = maxWidth * (Img.height / Img.width)
  //   } else {
  //     image.height = maxHeight
  //     image.width = maxHeight * (Img.width / Img.height)
  //   }
  // }
  // return <image />
}

export default connect()(AutoImage)
