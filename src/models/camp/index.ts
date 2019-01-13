import {addNewCamp, updateNewCamp} from "./addNewCamp";
import {queryAllCamp, updateAllCamp} from "./queryAllCamp";

export interface answerProp {
  content: String
  nickName: String,
  userId: String,
  avatarUrl: String
}
export interface campProps {
  _id: JSON,
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
    queryAllCamp: queryAllCamp
  },
  reducers: {
    updateNewCamp: updateNewCamp,
    updateAllCamp: updateAllCamp
  }
}
