import { createAction, Action} from 'redux-actions'
import {MainState, PREFIX} from "./index";
import {RequestResponse, request, BackendResponse} from "../../utils/request";
import {message} from "antd";
import * as DVA from 'dva'
const requests:any = request

export function updateArticlesInfoAction(id:string) {
  return createAction<string>(`${PREFIX}/updateArticlesInfo`)(id)
}

export function* updateArticlesInfo(action: Action<string>, effects: DVA.EffectsCommandMap) {
  let response:RequestResponse = yield (() => {
    let params = `?id=${action.payload}`;
    return requests({
      url: `http://result.eolinker.com/2iwkBiged241c5a42bdfb8b083224dbf190f8b770cac539?uri=/super/article${params}`
    })
  })

  let BackendResponse: BackendResponse = response.data
  if(!response || response.err || !BackendResponse || 200 !== BackendResponse.state){
    message.error("删除文章失败，检查网络")
    return null
  }
  yield effects.put(deleteArticleAction(action.payload))
}

export function deleteArticleAction(payload:string) {
  return createAction<string>(`${PREFIX}/deleteArticle`)(payload)
}

export function deleteArticle(state: MainState, action: Action<string>) {
  let newState = {...state}
  let id = action.payload
  let articles = newState.articles
  newState.articles = articles.filter(item => item.id !== id)
  return newState
}
