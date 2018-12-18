# 一.shopProperties:
name:商户名称 String
describe: 商户描述 String
fans: 商户粉丝数, number
location: {
    lng: 商户位置经度, String
    lat: 商户位置纬度  String
},
serveScore: 商户服务评分, String
desScore: 商户描述评分, String
logiScore: 商户物流评分, String
id: 商户id-----商户对应商品列表, String
type: 商户类型 String
credit:商户信誉度 number
owner: 商户掌柜 String

# 二.commodityProperties
id: 商品id  String
name: 商品名称 String
price: 商品价格, String
taobaoPrice：淘宝价格 String
description : 商品描述, String
location: 店铺城市, String
people: 商品收藏人数, number
commend：[ 商品评论列表
   avatar: 用户头像   String
   des：用户对商品描述 String
   time： 用户评论时间 String
]
