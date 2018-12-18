import {changeTestAction, changeTest} from './changeTest'
import {changeNowListAction,changeNowList} from './changeNowList'
import {queryShopInfo,updateShopInfo} from "./shopinfo";
import {queryFirstCommod,updateFirstCommod} from "./firstcommod";
import {queryCommodInfoAction, updateCommodInfo} from "../commodity/querycommod";
import {changeDetailAction,changeDetail} from "./changeDetail";

export interface commodProps {
  id: string,
  name: string,
  price: string,
  taobaoPrice: string,
  description : string,
  location: string,
  people: number,
  image: string,
  shop: string,
}

export interface listProps {
  name: string,
  id: number,
  key: number
}
export interface location {
  lng: string
  lat: string
}
export interface shopProps {
  id: string
  name: string
  price: string
  fans:number
  descripe : string
  location: location
  serveScore: string
  desScore: string
  logiScore: string
  type: string
  credit: number
  owner: string
}

export interface MainState {
  test: number,
  list: Array<listProps>,
  nowList: number,
  shop: shopProps,
  commodList: Array<commodProps>
  detail: boolean
}

export const PREFIX = 'main'

export const initState: MainState = {
  test: 0,
  list: [
    {
      name: "商品列表",
      key: 0,
      id: 0
    },
    {
      name: "商户列表",
      key: 1,
      id: 1
    },
    {
      name: "购物车",
      key: 2,
      id: 2
    },
    {
      name: "个人中心",
      key: 3,
      id: 3
    }
    ],
  nowList: 0,
  shop: null,
  commodList: [],
  detail: false
}

export default {
  namespace: PREFIX,
  state: initState,
  effects: {
    queryShopInfo: queryShopInfo,
    queryFirstCommod: queryFirstCommod
  },
  reducers: {
    changeTest: changeTest,
    changeNowList: changeNowList,
    updateShopInfo: updateShopInfo,
    updateFirstCommod: updateFirstCommod,
    updateCommodInfo: updateCommodInfo,
    changedetail: changeDetail
  }
}
