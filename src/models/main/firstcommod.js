import { createAction } from "redux-actions";
import { PREFIX } from "./index";
export function queryFirstCommodAction(url) {
    return createAction(`${PREFIX}/queryFirstCommod`)(url);
}
export function* queryFirstCommod(action, effects) {
    const xhr = new XMLHttpRequest();
    xhr.timeout = 3000;
    xhr.responseType = "json";
    xhr.open("GET", action.payload, true);
    xhr.onload = function (e) {
        if (xhr.status === 200 || xhr.status === 304) {
            console.log('response.data');
            console.log(xhr.response.data);
            return xhr.response.data;
        }
    };
    console.log('test');
    xhr.ontimeout = function (e) {
        console.log('请求时间超时');
    };
    xhr.send(null);
    xhr.onloadend = function* () {
        const commodProps = xhr.response.data;
        yield effects.put(updateFirstCommodAction(commodProps));
    };
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