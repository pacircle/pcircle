import { createAction, Action} from 'redux-actions'
import {MainState, PREFIX} from "./index";
import {RequestResponse, request, BackendResponse} from "../../utils/request";
import {message} from "antd";
import * as DVA from 'dva'
const requests:any = request

export function deleteCommentInfoAction(id:string) {
  return createAction<string>(`${PREFIX}/deleteCommentInfo`)(id)
}

export function* deleteCommentInfo(action: Action<string>, effects: DVA.EffectsCommandMap) {

  let response:RequestResponse = yield (() => {
    // return requests(`http://127.0.0.1:7979/super/article/delete?name=admin&&password=admin&&articleId=${action.payload}`)
    return requests(`https://wechatx.offerqueens.cn/super/comment?name=admin&&password=admin&&commentId=${action.payload}`)
  })()

  let BackendResponse: BackendResponse = response.data
  console.log('response',response)
  if(!response || response.err || !BackendResponse || 200 !== BackendResponse.state){
    message.error("删除评论失败，检查网络")
    return null
  }
  yield effects.put(updateCommentInfoAction(action.payload))
}

export function updateCommentInfoAction(payload:string) {
  return createAction<string>("updateCommentInfo")(payload)
}

export function updateCommentInfo(state: MainState, action: Action<string>) {
  let newState = {...state}
  // let id = action.payload
  // let articles = newState.articles
  // newState.articles = articles.filter(item => item._id.$oid !== id)
  message.success('删除评论成功')
  return newState
}
