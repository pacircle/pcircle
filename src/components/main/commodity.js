import { connect } from 'dva'
import { style } from 'typestyle'
import AutoImage from '../autoImage'

function Commodity(props) {
  const mainStyle = style({
    borderWidth: '2px',
    height: '220px',
    width: '180px',
    borderColor: '#C8C8C8',
    background: 'red',
  })
  // const imgStyle = style({
  //   width: '100%',
  //   height: 0,
  // })
  return (
    <div className={mainStyle}>
      {console.log(typeof props.image)}
      <AutoImage image={<img src={props.image} alt={'image'} />} maxWidth={200} maxHeigh={200} />
      <div>{props.price}</div>
      <div>{props.description}</div>
      <div>{props.shop}</div>
      <div>{props.location}</div>
    </div>
  )
}

export default connect()(Commodity)
