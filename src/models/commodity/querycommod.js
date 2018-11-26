import { createAction } from "redux-actions";
import { PREFIX } from "./index";
import { request } from "../../utils/request";
import { somethingWrong } from "../../utils/error";
export function queryCommodInfoAction(url) {
    return createAction(`${PREFIX}/queryCommodInfo`)(url);
}
export function* queryCommodInfo(action, effects) {
    const response = yield (() => {
        return request(action.payload);
    });
    const backendData = response.data;
    if (!response || response.err || !backendData || 200 !== backendData.state) {
        somethingWrong();
        return null;
    }
    const commodInfo = backendData.data;
    yield effects.put(updateCommodInfoAction(commodInfo));
}
export function updateCommodInfoAction(payload) {
    return createAction(`${PREFIX}/updatecommod`)(payload);
}
export function updateCommodInfo(state, action) {
    let newState = Object.assign({}, state);
    const shopInfo = action.payload;
    newState.shopProps = shopInfo;
    return newState;
}
//# sourceMappingURL=querycommod.js.map