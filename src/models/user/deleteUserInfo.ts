import {createAction,Action} from "redux-actions";
import { userProps, PREFIX, UserState} from "./index";
import * as DVA from 'dva';
import {BackendResponse, request, RequestResponse} from "../../utils/request";
import {message} from "antd";
const requests:any = request

export function deleteUserInfoAction(userId: string) {
  console.log(userId)
  return createAction<string>(`${PREFIX}/deleteUserInfo`)(userId)
}

export function* deleteUserInfo(action: Action<string>,effects: DVA.EffectsCommandMap) {
  console.log('deleteUserInfo')
  let url = "https://wechatx.offerqueens.cn/super/user/delete?name=admin&&password=admin";
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
  console.log('response',response)
  console.log('backdata',backendData)
  if (!response || response.err || !backendData || 200 !== backendData.state){
    message.error('出错啦')
    return null
  }
  console.log('backData',backendData)
  message.success("删除用户成功")
  yield effects.put(updateDeleteUserAction(action.payload))
}

export function updateDeleteUserAction(payload: string) {
  console.log('updateDeleteUser')
  return createAction<string>("updateDeleteUser")(payload)
}

export function updateDeleteUser(state: UserState, action: string) {
  // console.log(action)
  let newState = {...state}
  let userInfos = newState.userInfos
  const userId = action.payload
  for (let i=0;i<userInfos.length;i++){
    if (userInfos[i]._id == userId){
      let user = userInfos[i]
      userInfos.splice(i,1)
    }
  }
  console.log(userInfos)
  newState.userInfos = userInfos
  return newState
}

