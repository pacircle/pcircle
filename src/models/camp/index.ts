import {addNewCamp, updateNewCamp} from "./addNewCamp";
import {queryAllCamp, updateAllCamp} from "./queryAllCamp";
import {addNewAnswer, updateNewAnswer} from "./addNewAnswer";

export interface answerProp {
  content: String
  // nickName: String,
  // userId: String,
  // avatarUrl: String
}
interface idProps {
  $oid: String
}
export interface campProps {
  _id: any,
  order: Number
  content: String
  description: String
  startTime: String
  endTime:String
  answers?: Array<answerProp>
}
export interface CampState {
  campList: Array<campProps>
}

export const PREFIX = 'camp'

export const initState: CampState = {
  campList: []
}

export default {
  namespace: PREFIX,
  state: initState,
  effects: {
    addNewCamp: addNewCamp,
    queryAllCamp: queryAllCamp,
    addNewAnswer: addNewAnswer
  },
  reducers: {
    updateNewCamp: updateNewCamp,
    updateAllCamp: updateAllCamp,
    updateNewAnswer: updateNewAnswer,
  }
}
