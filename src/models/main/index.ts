import {changeTestAction, changeTest} from './changeTest'
import {changeNowListAction,changeNowList} from './changeNowList'

export interface listProps {
  name: string,
  id: number
}
export interface location {
  lng: string
  lat: string
}
export interface shopProps {
  id: string
  name: string
  price: string
  descripe : string
  location: location
  fans: string
  server: string
  des: string
  logistics: string
  type: string
}

export interface MainState {
  test: number,
  list: Array<listProps>,
  nowList: number,
  shop: shopProps
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
  nowList: 0,
  shop: {
    id: '0',
    name: 'Disney',
    price: '1',
    descripe : 'description',
    location: {
      lat: '31',
      lng: '144'
    },
    fans: '1',
    server: '4',
    des: '4',
    logistics: '4',
    type: 'play'

  }
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
