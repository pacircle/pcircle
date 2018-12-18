import {createAction,Action} from "redux-actions";
import {MainState,PREFIX} from "./index";

export function changeDetailAction(payload:boolean) {
  return createAction<boolean>(`${PREFIX}/changedetail`)(payload)
}

export function changeDetail(state: MainState, action: Action<boolean>) {
  let newState = {...state}
  const detail = action.payload
  newState.detail = detail
  return newState
}
