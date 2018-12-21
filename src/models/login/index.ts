

export interface LoginState {
  name: String,
  pass: String
}

export const PREFIX = 'login'

export const initState: LoginState = {
  name: 'UserName',
  pass: 'Password'
}

export default {
  namespace: PREFIX,
  state: initState,
  effects: {

  },
  reducers: {

  }
}
