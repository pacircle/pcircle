import {createAction,Action} from "redux-actions";
import {articleProps, MainState, PREFIX} from "./index";
import * as DVA from 'dva';
import {BackendResponse, request, RequestResponse} from "../../utils/request";
import {message} from "antd";

export function queryActicleInfoAction(url: string) {
  return createAction<string>(`${PREFIX}/queryArticleInfo`)(url)
}

export function* queryArticleInfo(action: Action<string>,effects: DVA.EffectsCommandMap) {
  const response:RequestResponse = yield (() => {
    return request(action.payload)
  })()

  const backendData:BackendResponse = response.data
  if (!response || response.err || !backendData || 200 == backendData.state){
    message.error('出错啦')
    return null
  }
  const articleData: Array<articleProps> = backendData.data.articleInfos
  yield effects.put(updateArticleInfoAction(articleData))
}

export function updateArticleInfoAction(payload: Array<articleProps>) {
  return createAction<Array<articleProps>>("updateArticleInfo")(payload)
}

export function updateArticleInfo(state: MainState, action: Action<Array<articleProps>>) {
  let newState = {...state}
  const articles = action.payload
  newState.articles = articles
  return newState
}

