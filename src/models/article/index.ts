import {addNewActicle, updateArticleInfo} from "./addNewArticle";

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
export interface ArticleState {
  articles: Array<articleProps>
  SelectedKeys: Array<String>
  OpenKeys: Array<String>
}

export interface articleItem {
  openid: String,
  title: String,
  content: String
}

export const PREFIX = 'Article'

export const initState: ArticleState = {
  articles: null,
  SelectedKeys: ['1'],
  OpenKeys: ['sub1']
}

export default {
  namespace: PREFIX,
  state: initState,
  effects: {
    addNewActicle: addNewActicle
  },
  reducers: {
    updateArticleInfo: updateArticleInfo
  }
}
