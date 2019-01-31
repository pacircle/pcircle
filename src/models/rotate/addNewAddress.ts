import {createAction,Action} from "redux-actions";
import {AddressProps, PREFIX, RotateState} from "./index";
import * as DVA from 'dva';
import {BackendResponse, request, RequestResponse} from "../../utils/request";
import {message} from "antd";
const requests:any = request

export function addNewAddressAction(address: string) {
  console.log(address)
  return createAction<string>(`${PREFIX}/addNewAddress`)(address)
}

export function* addNewAddress(action: Action<string>,effects: DVA.EffectsCommandMap) {
  console.log('addNewAddress')
  // let url = "http://127.0.0.1:7979/super/rotate/add?name=admin&&password=admin";
  let url = "https://wechatx.offerqueens.cn/super/rotate/add?name=admin&&password=admin";
  // console.log(action.payload + `${params}`)
  console.log(action.payload)
  let params = `&&address=${action.payload}`
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
  console.log('backdata',backendData)
  if (!response || response.err || !backendData || 200 !== backendData.state){
    message.error('出错啦')
    return null
  }
  console.log('backData',backendData)
  message.success("添加地址成功")
  const userData: AddressProps = backendData.data
  yield effects.put(updateNewAddressAction(userData))
}

export function updateNewAddressAction(payload: AddressProps) {
  return createAction<AddressProps>("updateNewAddress")(payload)
}

export function updateNewAddress(state: RotateState, action: Action<AddressProps>) {
  let newState = {...state}
  const address = action.payload
  newState.addressProp = address
  return newState
}

