import {createAction,Action} from "redux-actions";
import {AddressProps, PREFIX, RotateState} from "./index";
import * as DVA from 'dva';
import {BackendResponse, request, RequestResponse} from "../../utils/request";
import {message} from "antd";
const requests:any = request

export function queryNowAddressAction(url: string) {
  return createAction<string>(`${PREFIX}/queryNowAddress`)(url)
}

export function* queryNowAddress(action: Action<string>,effects: DVA.EffectsCommandMap) {
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
  const userData: AddressProps = backendData.data
  yield effects.put(updateNowAddressAction(userData))
}

export function updateNowAddressAction(payload: AddressProps) {
  return createAction<AddressProps>("updateNowAddress")(payload)
}

export function updateNowAddress(state: RotateState, action: Action<AddressProps>) {
  let newState = {...state}
  const address = action.payload
  newState.addressProp = address
  return newState
}

