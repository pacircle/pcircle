import {createAction,Action} from "redux-actions";
import {campProps, CampState, PREFIX} from "./index";
import * as DVA from 'dva';
import * as Redux from 'redux';
import {BackendResponse, request, RequestResponse} from "../../utils/request";
import {message} from "antd";
import {queryAllCampAction} from "./queryAllCamp";
import {hashHistory} from "react-router";
const requests:any = request
export interface campItem {
  order: Number,
  content: String,
  description: String,
  startTime: String,
  endTime: String
}


export function addNewCampAction(campItem: campItem) {
  console.log('addNewCampAction')
  console.log(campItem)
  return createAction<campItem>(`${PREFIX}/addNewCamp`)(campItem)
}

export function* addNewCamp(action: Action<campItem>,effects: DVA.EffectsCommandMap) {
  let url = "http://127.0.0.1:7979/camp/index?name=admin&&password=admin";
  console.log('test' +action.payload)
  console.log(action.payload.order)
  let params = `&&order=${action.payload.order}&&content=${action.payload.content}&&description=${action.payload.description}&&startTime=${action.payload.startTime}&&endTime=${action.payload.endTime}`
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
  const campData: campProps = backendData.data.camp
  yield effects.put(updateNewCampAction(campData))
}

export function updateNewCampAction(payload: campProps) {
  return createAction<campProps>("updateNewCamp")(payload)
}

export function updateNewCamp(state: CampState, action: Action<campProps>) {
  let newState = {...state}
  const campData = action.payload
  const campList = newState.campList
  campList.push(campData)
  newState.campList = campList
  message.success("添加新一期训练营成功")
  // console.log(newState)
  // console.log(state)
  // console.log(newState.campList)
  // console.log(CampState.campList)
  // this.props.dispatch(queryAllCampAction("http://127.0.0.1:7979/camp/all"))
  // hashHistory.push({pathname: '/camp'})
  return newState
}

