import {createAction,Action} from "redux-actions";
import {PREFIX,CommodityState,shopProps} from "./index";
import {RequestResponse,BackendResponse,request} from "../../utils/request";
import * as DVA from 'dva'
import {somethingWrong} from "../../utils/error";

export function queryCommodInfoAction(url: string) {
  return createAction<string>(`${PREFIX}/queryCommodInfo`)(url)
}

export function* queryCommodInfo(action: Action<string>,effects: DVA.EffectsCommandMap) {

  const response:RequestResponse = yield (() => {
    return request(action.payload)
  })

  const backendData: BackendResponse = response.data
  if (!response || response.err || !backendData || 200 !== backendData.state){
    somethingWrong()
    return null
  }
  const commodInfo:shopProps = backendData.data
  yield effects.put(updateCommodInfoAction(commodInfo))
}

export function updateCommodInfoAction(payload: shopProps) {
  return createAction<shopProps>(`${PREFIX}/updatecommod`)(payload)
}

export function updateCommodInfo(state: CommodityState, action: Action<shopProps>) {
  let newState = {...state}
  const shopInfo = action.payload
  newState.shopProps = shopInfo
  return newState
}
