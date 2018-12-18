import * as DVA from 'dva'
import {Action,createAction} from "redux-actions";
import {MainState,PREFIX,commodProps} from "./index";
import {Effect} from "dva";
import {somethingWrong} from "../../utils/error";
import {BackendResponse, request, RequestResponse} from "../../utils/request";

export function queryFirstCommodAction(url: string) {
  return createAction<string>(`${PREFIX}/queryFirstCommod`)(url)
}

export function* queryFirstCommod(action: Action<string>,effects: DVA.EffectsCommandMap) {
  const response: RequestResponse = yield(() => {
    return request(action.payload)
  })()

  const backendData:BackendResponse = response.data
  console.log(response)
  if (!response || response.err || !backendData || 200 != backendData.state){
    somethingWrong()
    return
  }

  const commodData: Array<commodProps> = backendData.data
  yield effects.put(updateFirstCommodAction(commodData))

  // const xhr = new XMLHttpRequest()
  // xhr.timeout = 3000
  // xhr.responseType = "json"
  // xhr.open("GET",action.payload,true)
  // xhr.onload = function () {
  //   if (xhr.status === 200 || xhr.status === 304){
  //     console.log('response.data')
  //     console.log(xhr.response)
  //     return xhr.response.data
  //   }
  // }
  // console.log('test')
  // xhr.ontimeout = function () {
  //   console.log('请求时间超时')
  // }
  // xhr.send(null)
  // xhr.onloadend = function* () {
  //   const commodProps: Array<commodProps> = xhr.response.data
  //   yield effects.put(updateFirstCommodAction(commodProps))
  // }
}

export function updateFirstCommodAction(payload: Array<commodProps>) {
  return createAction<Array<commodProps>>(`${PREFIX}/updateFirstCommod`)(payload)
}

export function updateFirstCommod(state: MainState,action: Action<Array<commodProps>>) {
  let newState = {...state}
  const commodList = action.payload
  newState.commodList = commodList
  return newState
}


