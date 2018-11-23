import { createAction } from "redux-actions";
import { PREFIX } from "./index";
export function changeNowListAction(payload) {
    return createAction(`${PREFIX}/changeNowList`)(payload);
}
export function changeNowList(state, action) {
    let newState = Object.assign({}, state);
    const changeNowList = action.payload;
    newState.nowList = changeNowList;
    return newState;
}
//# sourceMappingURL=changeNowList.js.map