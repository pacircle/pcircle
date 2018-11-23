import { changeTest } from './changeTest';
import { changeNowList } from './changeNowList';
import { queryShopInfo, updateShopInfo } from "./shopinfo";
export const PREFIX = 'main';
export const initState = {
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
        descripe: 'description',
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
};
export default {
    namespace: PREFIX,
    state: initState,
    effects: {
        queryShopInfo: queryShopInfo
    },
    reducers: {
        changeTest: changeTest,
        changeNowList: changeNowList,
        updateShopInfo: updateShopInfo
    }
};
//# sourceMappingURL=index.js.map