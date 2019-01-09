import {createAction,Action} from "redux-actions";
import { userProps, PREFIX, UserState} from "./index";
import * as DVA from 'dva';
import {BackendResponse, request, RequestResponse} from "../../utils/request";
import {message} from "antd";
const requests:any = request

export function queryUserInfoAction(url: string) {
  return createAction<string>(`${PREFIX}/queryUserInfo`)(url)
}

export function* queryUserInfo(action: Action<string>,effects: DVA.EffectsCommandMap) {
  let params = "?name=admin&&password=admin";
  // console.log(action.payload + `${params}`)
  const response:RequestResponse = yield (() => {
    return requests(action.payload + `${params}`)
  })()
  // let params = action.payload +"?name=admin&&password=admin"
  // console.log(params == "http://127.0.0.1:7979/super/user?name=admin&&password=admin")
  // const response:RequestResponse = yield (() => {
  //   return requests("http://127.0.0.1:7979/super/user?name=admin&&password=admin")
  // })()

  const backendData:BackendResponse = response.data
  // console.log('response',response)
  // console.log('backdata',backendData)
  if (!response || response.err || !backendData || 200 !== backendData.state){
    message.error('出错啦')
    return null
  }
  console.log('backData',backendData)
  const userData: Array<userProps> = backendData.data.userInfos
  yield effects.put(updateUserInfoAction(userData))
}

export function updateUserInfoAction(payload: Array<userProps>) {
  return createAction<Array<userProps>>("updateUserInfo")(payload)
}

export function updateUserInfo(state: UserState, action: Action<Array<userProps>>) {
  let newState = {...state}
  const articles = action.payload
  newState.userInfos = articles
  return newState
}

