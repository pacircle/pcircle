import {createAction,Action} from "redux-actions";
import { userProps, PREFIX, UserState} from "./index";
import * as DVA from 'dva';
import {BackendResponse, request, RequestResponse} from "../../utils/request";
import {message} from "antd";

export function queryUserInfoAction(url: string) {
  return createAction<string>(`${PREFIX}/queryUserInfo`)(url)
}

export function* queryUserInfo(action: Action<string>,effects: DVA.EffectsCommandMap) {
  const response:RequestResponse = yield (() => {
    return request(action.payload)
  })()
  const backendData:BackendResponse = response.data

  if (!response || response.err || !backendData || 200 !== backendData.state){
    message.error('出错啦')
    return null
  }
  console.log(backendData)
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

