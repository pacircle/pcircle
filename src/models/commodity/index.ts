import {location} from "../main";

export const PREFIX = 'commodity'

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

export interface CommodityState {
  shopProps: shopProps
}
export const initState: CommodityState = {
  shopProps: null
}
export default {
  namespace: PREFIX,
  state: initState,
  effects: {
  },
  reducers: {
  }
}
