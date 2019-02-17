import {createAction,Action} from "redux-actions";
import { userProps, PREFIX, UserState} from "./index";
import * as DVA from 'dva';
import {BackendResponse, request, RequestResponse} from "../../utils/request";
import {message} from "antd";
const requests:any = request

export function addNewUsersAction(userIds: Array<string>) {
  console.log(userIds)
  return createAction<Array<string>>(`${PREFIX}/addNewUsers`)(userIds)
}

export function* addNewUsers(action: Action<string>,effects: DVA.EffectsCommandMap) {
  console.log('addNewUsers')
  let url = "https://wechatx.offerqueens.cn/camp/user/add?name=admin&&password=admin";
  // let url = "http://127.0.0.1:7979/camp/user/add?name=admin&&password=admin";
  // console.log(action.payload + `${params}`)
  console.log(action.payload)
  let params = `&&userId=${action.payload}`
  const response:RequestResponse = yield (() => {
    return requests(`${url} ` + `${params}`  )
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
  message.success("添加用户成功")
  yield effects.put(updateNewUsersAction())
}

export function updateNewUsersAction() {
  return createAction("updateNewUsers")()
}

export function updateNewUsers(state: UserState, action: null) {
  let newState = {...state}
  return newState
}

