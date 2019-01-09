

export interface UserState {
  userInfos: userProps
}

export interface userProps {
  id: String,
  nickName: String,
  avatarUrl: String,
  city: String,
  province: String,
  country: String,
  gender: Number,
  language: String,
  password: String,
  phone: String,
  articleList?: Array<articleProps>,
  commentList?: Array<String>
}

export interface articleProps {
  id: String,
  // nickName: String,
  // src: String,
  time: String,
  title: String,
  sub: String,
  // agree: Number,
  // user_agree: Boolean,
  // user_collect: Boolean,
  // content: String,
  // commentList: Array<commentProps>
}

export interface commentProps {
  id: String,
  key: String,
  userId: String,
  src: String,
  nickName: String,
  time: String,
  zone?: String,
  company?: String,
  post?: String,
  content: String,
  answerList: Array<answerProps>
}

export interface answerProps {
  id: String,
  userId: String,
  src: String,
  nickName: String,
  content: String
}

export const initState:UserState = {
  userInfos: null
}
export const PREFIX = 'User'

export default {
  namespace: PREFIX,
  state: initState,
  effects: {

  },
  reducers: {

  }
}
