import {createAction,Action} from "redux-actions";
import {PREFIX,MainState} from "./index";

export function changeNowListAction(payload: number) {
  return createAction<number>(`${PREFIX}/changeNowList`)(payload)
}

export function changeNowList(state: MainState,action: Action<number>) {
  let newState = {...state}
  const changeNowList = action.payload
  newState.nowList = changeNowList
  return newState
}
