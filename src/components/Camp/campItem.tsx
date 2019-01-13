import * as React from 'react';
import { Card,Comment,Avatar,Button,Form } from 'antd';
import {campProps} from "../../models/camp";
import AnswerAdd from "../../components/Camp/answeradd";

interface campitemProp {
  campProps:campProps
}
const Answer = ({ children, answers }) => (
  <Comment
    author={<a>{answers.nickName}</a>}
    avatar={(
      <Avatar
        src={answers.avatarUrl}
        alt={"User"}
      />
    )}
    content={<span>{answers.content}</span>}
  >
    {children}
  </Comment>
)
class CampItem extends React.Component<campitemProp,{}> {
  constructor(props){
    super(props)
  }

  handleSubmit = (e) => {
    console.log(e)
  }
  render(){

    return (
      <Card
        style={{margin: '20px'}}
        title={`第${this.props.campProps.order}期训练营`}
      >
        <div>训练营题目：{this.props.campProps.content}</div>
        <div>训练营描述：{this.props.campProps.description}</div>
        <div>训练营开始时间：{this.props.campProps.startTime}</div>
        <div>训练营开始时间：{this.props.campProps.endTime}</div>
        {this.props.campProps.answers ? <div>
          <span>训练营回答：</span>
          {this.props.campProps.answers.map((item) => (
            <Answer answers={item}/>
          ))}
        </div> : null}
        <AnswerAdd camp={this.props.campProps._id}/>
      </Card>
    )
  }
}


export default CampItem
