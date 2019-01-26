import {createAction,Action} from "redux-actions";
import {articleProps, MainState, PREFIX} from "./index";
import * as DVA from 'dva';
import {BackendResponse, request, RequestResponse} from "../../utils/request";
import {message} from "antd";
const requests:any = request

export function changeEliteArticleAction(url: string) {
  return createAction<string>(`${PREFIX}/changeEliteArticle`)(url)
}

export function* changeEliteArticle(action: Action<string>,effects: DVA.EffectsCommandMap) {
  // let params = "?name=admin&&password=admin"
  // console.log(action.payload + `${params}`)
  // const response:RequestResponse = yield (() => {
  //   return requests({
  //     url: "http://127.0.0.1:7979/super/index?name=admin&&password=admin"
  //   })
  // })()
  let response:RequestResponse = yield (() => {
    // return requests(`http://127.0.0.1:7979/super/article/elite?name=admin&&password=admin&&articleId=${action.payload}`)
    return requests(`https://wechatx.offerqueens.cn/super/article/elite?name=admin&&password=admin&&articleId=${action.payload}`)

  })()

  const backendData:BackendResponse = response.data
  console.log('response',response)
  console.log('state',backendData)
  if (!response || response.err || !backendData || 200 !== backendData.state){
    message.error('出错啦')
    return null
  }
  yield effects.put(updateEliteArticleAction())
}

export function updateEliteArticleAction() {
  return createAction("updateEliteArticle")()
}

export function updateEliteArticle(state: MainState, action: Action<null>) {
  let newState = {...state}
  message.success("文章加精成功")
  return newState
}
