import {changeTestAction, changeTest} from './changeTest'
import {changeNowListAction,changeNowList} from './changeNowList'

export interface listProps {
  name: string,
  id: number
}
export interface commodProps {
  id: string
  name: string
  price: number
  description : string
  location: string
  people: number
}

export interface MainState {
  test: number,
  list: Array<listProps>,
  nowList: number,
}

export const PREFIX = 'main'

export const initState: MainState = {
  test: 0,
  list: [
    {
      name: "商品列表",
      id: 0
    },
    {
      name: "商户列表",
      id: 1
    },
    {
      name: "购物车",
      id: 2
    },
    {
      name: "个人中心",
      id: 3
    }
    ],
  nowList: 0
}

export default {
  namespace: PREFIX,
  state: initState,
  effects: {
  },
  reducers: {
    changeTest: changeTest,
    changeNowList: changeNowList
  }
}
