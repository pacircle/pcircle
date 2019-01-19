import {createAction,Action} from "redux-actions";
import { userProps, PREFIX, UsdetailState} from "./index";
import * as DVA from 'dva';
import {BackendResponse, request, RequestResponse} from "../../utils/request";
import {message} from "antd";
const requests:any = request

export function queryUserDetailAction(userId: string) {
  return createAction<string>(`${PREFIX}/queryUserDetail`)(userId)
}

export function* queryUserDetail(action: Action<string>,effects: DVA.EffectsCommandMap) {
  console.log('*****')
  const response:RequestResponse = yield (() => {
    return requests(`http://127.0.0.1:7979/super/user/one?name=admin&&password=admin&&userId=${action.payload}`)
  })()
  // let params = action.payload +"?name=admin&&password=admin"
  // console.log(params == "http://127.0.0.1:7979/super/user?name=admin&&password=admin")
  // const response:RequestResponse = yield (() => {
  //   return requests("http://127.0.0.1:7979/super/user?name=admin&&password=admin")
  // })()

  const backendData:BackendResponse = response.data
  console.log('response',response)
  console.log('backdata',backendData)
  if (!response || response.err || !backendData || 200 !== backendData.state){
    message.error('出错啦')
    return null
  }
  console.log('backData',backendData)
  const userData: userProps = backendData.data.userInfo
  yield effects.put(updateUserInfoAction(userData))
}

export function updateUserInfoAction(payload: userProps) {
  return createAction<userProps>(`${PREFIX}/updateUserDetail`)(payload)
}

export function updateUserDetail(state: UsdetailState, action: Action<userProps>) {
  let newState = {...state}
  const userInfo = action.payload
  // console.log(action.payload)
  newState.userInfo = userInfo
  return newState
}

