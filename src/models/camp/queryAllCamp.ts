import {createAction,Action} from "redux-actions";
import {campProps, CampState, PREFIX} from "./index";
import * as DVA from 'dva';
import {BackendResponse, request, RequestResponse} from "../../utils/request";
import {message} from "antd";
const requests:any = request

export function queryAllCampAction(url: string) {
  return createAction<string>(`${PREFIX}/queryAllCamp`)(url)
}

export function* queryAllCamp(action: Action<string>,effects: DVA.EffectsCommandMap) {
  // let params = "?name=admin&&password=admin"
  // console.log(action.payload + `${params}`)
  // const response:RequestResponse = yield (() => {
  //   return requests({
  //     url: "http://127.0.0.1:7979/super/index?name=admin&&password=admin"
  //   })
  // })()
  let params = "?name=admin&&password=admin";
  console.log(action.payload + `${params}`)
  const response:RequestResponse = yield (() => {
    return requests(action.payload + `${params}`)
  })()

  const backendData:BackendResponse = response.data
  console.log('response',response)
  console.log('state',backendData)
  if (!response || response.err || !backendData || 200 !== backendData.state){
    message.error('出错啦')
    return null
  }
  const articleData: Array<campProps> = backendData.data.camps
  yield effects.put(updateAllCampAction(articleData))
}

export function updateAllCampAction(payload: Array<campProps>) {
  return createAction<Array<campProps>>(`${PREFIX}/updateAllCamp`)(payload)
}

export function updateAllCamp(state: CampState, action: Action<Array<campProps>>) {
  let newState = {...state}
  const camps = action.payload
  newState.campList = camps
  console.log(newState.campList)
  return newState
}

