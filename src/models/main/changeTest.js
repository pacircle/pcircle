import { createAction } from "redux-actions";
import { PREFIX } from "./index";
export function changeTestAction(payload) {
    return createAction(`${PREFIX}/changeTest`)(payload);
}
export function changeTest(state, action) {
    let newState = Object.assign({}, state);
    const changeNumber = action.payload;
    newState.test = changeNumber;
    return newState;
}
//# sourceMappingURL=changeTest.js.map