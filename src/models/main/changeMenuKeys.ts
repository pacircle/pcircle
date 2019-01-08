import {Action, createAction} from "redux-actions";
import {MainState, PREFIX} from "./index";

export function changeMenuKeysAction(payload:Array<string>) {
  return createAction<Array<string>>(`${PREFIX}/changeMenuKeys`)(payload)
}

export function changeMenuKeys(state: MainState, action: Action<Array<string>>) {
  // console.log(action.payload)
  let newState = {...state}
  let SelectedKeys = []
  let OpenKeys = []
  SelectedKeys.push(action.payload[0])
  OpenKeys.push(action.payload[1])
  newState.SelectedKeys = SelectedKeys
  newState.OpenKeys = OpenKeys
  return newState
}
