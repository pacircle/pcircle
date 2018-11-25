// import { connect } from 'dva'
import { style } from 'typestyle'
// import AutoImage from '../autoImage'

function Commodity(props) {
  const mainStyle = style({
    height: '300px',
    width: '195px',
    border: '2px solid #F5F5F5',
    margin: '10px',
  })
  const imgStyle = style({
    width: '100%',
    height: '70%',
  })
  const numberStyle = style({
    height: '8%',
  })
  const leftStyle = style({
    float: 'left',
    marginLeft: '10px',
    color: '#FF6347',
    fontSize: '16px',
  })
  const rightStyle = style({
    marginLeft: '100px',
    color: '#C8C8C8',
    fontSize: '12px',
  })
  const desStyle = style({
    height: '10%',
    float: 'left',
    width: '100%',
    paddingLeft: '10px',
    textAlign: 'left',
  })

  const shopStyle = style({
    fontSize: '14px',
    height: '100%',
    width: '100%',
    paddingLeft: '8px',
    textAlign: 'left',
    lineHeight: '100%',
    color: '#A8A8A8',
    textDecoration: 'underline',
  })
  const iconStyle = style({
    width: '20px',
    height: '14px',
    paddingLeft: '10px',
  })
  const serviceStyle = style({
    width: '14px',
    height: '14px',
    float: 'right',
    marginLeft: '85%',
  })
  const bottomStyle = style({
    width: '100px',
    display: 'flex',
    height: '10%',
  })
  return (
    <div className={mainStyle}>
      <img src={props.image} alt={'image'} className={imgStyle} />
      <div className={numberStyle}>
        <div className={leftStyle}>¥{props.price}</div>
        <div className={rightStyle}>{props.people}人付款</div>
      </div>
      <div className={desStyle}>{props.description}</div>
      <div className={bottomStyle}>
        <img src={require('../../assets/menu.png')} className={iconStyle} alt={'menu'} />
        <div className={shopStyle}>{props.shop}</div>
        <img src={require('../../assets/service.png')} className={serviceStyle} alt={'service'} />
      </div>
    </div>
  )
}

export default Commodity
