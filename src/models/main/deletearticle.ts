import { createAction, Action} from 'redux-actions'
import {MainState, PREFIX} from "./index";
import {RequestResponse, request, BackendResponse} from "../../utils/request";
import {message} from "antd";
import * as DVA from 'dva'
const requests:any = request

export function deleteArticlesInfoAction(id:string) {
  return createAction<string>(`${PREFIX}/deleteArticlesInfo`)(id)
}

export function* deleteArticlesInfo(action: Action<string>, effects: DVA.EffectsCommandMap) {

  let response:RequestResponse = yield (() => {
    return requests(`https://webackx.offerqueens.cn/super/article/delete?name=admin&&password=admin&&articleId=${action.payload}`)
  })()

  let BackendResponse: BackendResponse = response.data
  console.log('response',response)
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
  newState.articles = articles.filter(item => item._id.$oid !== id)
  message.success('删除成功')
  return newState
}
