import {changeTestAction, changeTest} from './changeTest'

export interface MainState {
  test: number,
  list: Array<string>,
  nowList: number
}

export const PREFIX = 'main'

export const initState: MainState = {
  test: 0,
  list: ["商户列表","商品列表","购物车","个人中心"],
  nowList: 0
}

export default {
  namespace: PREFIX,
  state: initState,
  effects: {
  },
  reducers: {
    changeTest: changeTest
  }
}
