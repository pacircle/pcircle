import { createAction } from "redux-actions";
import { PREFIX } from "./index";
export function changeDetailAction(payload) {
    return createAction(`${PREFIX}/changedetail`)(payload);
}
export function changeDetail(state, action) {
    let newState = Object.assign({}, state);
    const detail = action.payload;
    newState.detail = detail;
    return newState;
}
//# sourceMappingURL=changeDetail.js.map