import * as Redux from 'redux';
import * as DVA from 'dva';
import {createAction,Action} from "redux-actions";
import { PREFIX ,MainState} from "./index";

export function changeTestAction(payload:number){
  return createAction<number>(`${PREFIX}/changeTest`)(payload)
}

export function changeTest(state: MainState,action: Action<number>) {
  let newState = {...state}
  const changeNumber = action.payload
  newState.test = changeNumber
  return newState
}
