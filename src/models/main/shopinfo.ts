import * as DVA from 'dva'
import {createAction,Action} from "redux-actions";
import {PREFIX,MainState} from "./index";
import {request,RequestResponse,BackendResponse} from "../../utils/request";
import {somethingWrong} from "../../utils/error";
import {shopProps} from "./index";

/*
（mock）获取后端商户信息
*/
export function queryShopInfoAction(url: string) {
  return createAction<string>(`${PREFIX}/queryShopInfo`)(url)
}

export function* queryShopInfo(action: Action<string>,effects:DVA.EffectsCommandMap) {

  const response: RequestResponse = yield(() => {
    return request(action.payload)
  })()

  const backendData:BackendResponse = response.data
  if (!response || response.err || !backendData || 200 != backendData.state){
    somethingWrong()
    return
  }

  const shopInfoData: shopProps = backendData.data
  yield effects.put(updateShopInfoAction(shopInfoData))
}

function updateShopInfoAction(payload: shopProps) {
  return createAction<shopProps>('updateShopInfo')(payload)
}

export function updateShopInfo(state: MainState,action:Action<shopProps>) {
  let newState = {...state}
  const shop = action.payload
  newState.shop = shop
  return newState
}
