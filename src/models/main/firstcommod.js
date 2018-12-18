import { createAction } from "redux-actions";
import { PREFIX } from "./index";
import { somethingWrong } from "../../utils/error";
import { request } from "../../utils/request";
export function queryFirstCommodAction(url) {
    return createAction(`${PREFIX}/queryFirstCommod`)(url);
}
export function* queryFirstCommod(action, effects) {
    const response = yield (() => {
        return request(action.payload);
    })();
    const backendData = response.data;
    console.log(response);
    if (!response || response.err || !backendData || 200 != backendData.state) {
        somethingWrong();
        return;
    }
    const commodData = backendData.data;
    yield effects.put(updateFirstCommodAction(commodData));
    // const xhr = new XMLHttpRequest()
    // xhr.timeout = 3000
    // xhr.responseType = "json"
    // xhr.open("GET",action.payload,true)
    // xhr.onload = function () {
    //   if (xhr.status === 200 || xhr.status === 304){
    //     console.log('response.data')
    //     console.log(xhr.response)
    //     return xhr.response.data
    //   }
    // }
    // console.log('test')
    // xhr.ontimeout = function () {
    //   console.log('请求时间超时')
    // }
    // xhr.send(null)
    // xhr.onloadend = function* () {
    //   const commodProps: Array<commodProps> = xhr.response.data
    //   yield effects.put(updateFirstCommodAction(commodProps))
    // }
}
export function updateFirstCommodAction(payload) {
    return createAction(`${PREFIX}/updateFirstCommod`)(payload);
}
export function updateFirstCommod(state, action) {
    let newState = Object.assign({}, state);
    const commodList = action.payload;
    newState.commodList = commodList;
    return newState;
}
//# sourceMappingURL=firstcommod.js.map