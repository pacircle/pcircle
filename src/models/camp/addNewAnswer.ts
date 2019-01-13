import {createAction,Action} from "redux-actions";
import {campProps, CampState, PREFIX} from "./index";
import * as DVA from 'dva';
import * as Redux from 'redux';
import {BackendResponse, request, RequestResponse} from "../../utils/request";
import {message} from "antd";


const requests:any = request
export interface answerProp {
  campId: any,
  content: String
}

export function addNewAnswerAction(answerProp: answerProp) {
  console.log(answerProp)
  return createAction<answerProp>(`${PREFIX}/addNewAnswer`)(answerProp)
}

export function* addNewAnswer(action: Action<answerProp>,effects: DVA.EffectsCommandMap) {
  console.log(action.payload)
  let url = "http://127.0.0.1:7979/camp/answer/add?name=admin&&password=admin";
  let params = `&&content=${action.payload.content}&&campId=${action.payload.campId.$oid}`
  const response:RequestResponse = yield (() => {
    return requests(`${url} ` + `${params}`  )
  })()

  console.log(`${url} ` + `${params}`)
  const backendData:BackendResponse = response.data
  console.log('response',response)
  console.log('state',backendData)
  if (!response || response.err || !backendData || 200 !== backendData.state){
    message.error('出错啦')
    return null
  }
  const answerData: answerProp = action.payload
  yield effects.put(updateNewAnswerAction(answerData))
}

export function updateNewAnswerAction(payload: answerProp) {
  console.log(`${PREFIX}/updateNewAnswer`)
  return createAction<answerProp>("updateNewAnswer")(payload)
}

export function updateNewAnswer(state: CampState, action: Action<answerProp>) {
  let newState = {...state}
  const answerData = action.payload
  // console.log(answerData)
  let campList = newState.campList
  campList.map(item => {
    // console.log(item)
    // console.log(item._id.$oid.length)
    // console.log(action.payload.campId.$oid.length)
    if (item._id.$oid === action.payload.campId.$oid){
      let answers = item.answers
      answers.push({content: action.payload.content})
    }
  })
  // console.log(campList)
  newState.campList = campList
  // console.log(newState.campList)

  return newState
}

