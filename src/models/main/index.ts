import {queryArticleInfo, updateArticleInfo} from "./queryArticles";
import {deleteArticle} from "./deletearticle";

export interface answerProps {
  content: String,
  user: String,
  src: String,
  nickName: String
}

export interface commentProps {
  id: String,
  user: String,
  src: String,
  nickName: String,
  time: String,
  zone?: String,
  company?: String,
  post?: String,
  content: String,
  answers: Array<answerProps>
}

export interface articleProps {
  id: String,
  nickName: String,
  src: String,
  time: String,
  title: String,
  sub: String,
  agree: Number,
  content: String,
  commentList: Array<commentProps>
}
export interface MainState {
  articles: Array<articleProps>
}

export const PREFIX = 'main'

export const initState: MainState = {
  articles: null
}

export default {
  namespace: PREFIX,
  state: initState,
  effects: {
    queryArticleInfo: queryArticleInfo
  },
  reducers: {
    updateArticleInfo: updateArticleInfo,
    deleteArticle: deleteArticle
  }
}
