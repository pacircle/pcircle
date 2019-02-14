import {createAction,Action} from "redux-actions";
import {articleProps, ArticleState, PREFIX} from "../article/index";
import * as DVA from 'dva';
import {BackendResponse, request, RequestResponse} from "../../utils/request";
import {message} from "antd";
const requests:any = request
import {articleItem} from "../article/index";

export function addNewActicleAction(articleItem: articleItem) {
  console.log('addNewActicleAction')
  return createAction<articleItem>(`${PREFIX}/addNewActicle`)(articleItem)
}

export function* addNewActicle(action: Action<articleItem>,effects: DVA.EffectsCommandMap) {
  console.log('addNewArticle')
  let url= "http://127.0.0.1:7979/super/article/add?"
  let sub = action.payload.content.substring(0,20)
  let params = `&&name=admin&&password=admin&&openid=${action.payload.openid}&&title=${action.payload.title}&&content=${action.payload.content}&&sub=${sub}`
  console.log(`${url} ` + `${params}`)
  const response:RequestResponse = yield (() => {
    return requests(`${url} ` + `${params}`  )
  })()

  const backendData:BackendResponse = response.data
  console.log('response',response)
  console.log('state',backendData)
  if (!response || response.err || !backendData || 200 !== backendData.state){
    message.error('出错啦')
    return null
  }

  yield effects.put(updateArticleInfoAction())
}

export function updateArticleInfoAction() {
  console.log('updateArticleInfoActio')
  return createAction(`${PREFIX}/updateArticleInfo`)()
}

export function updateArticleInfo(state: ArticleState, action: Action<null>) {
  console.log('updateArticleInfo')
  let newState = {...state}
  // const articles = action.payload
  // newState.articles = articles
  message.success('文章添加成功')
  return newState
}

