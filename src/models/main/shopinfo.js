import { createAction } from "redux-actions";
import { PREFIX } from "./index";
import { request } from "../../utils/request";
import { somethingWrong } from "../../utils/error";
/*
（mock）获取后端商户信息
*/
export function queryShopInfoAction(url) {
    return createAction(`${PREFIX}/queryShopInfo`)(url);
}
export function* queryShopInfo(action, effects) {
    const response = yield (() => {
        return request(action.payload);
    })();
    const backendData = response.data;
    if (!response || response.err || !backendData || 200 != backendData.state) {
        somethingWrong();
        return;
    }
    const shopInfoData = backendData.data;
    yield effects.put(updateShopInfoAction(shopInfoData));
}
function updateShopInfoAction(payload) {
    return createAction('updateShopInfo')(payload);
}
export function updateShopInfo(state, action) {
    let newState = Object.assign({}, state);
    const shop = action.payload;
    newState.shop = shop;
    return newState;
}
//# sourceMappingURL=shopinfo.js.map