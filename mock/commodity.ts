export default {
  ['GET /api/v1/commodity/index.json'](req,res){
    const response = {
      state: 200,
      data: [
        {
          "name": 'Disneys',
          "describe": '全球闻名遐迩的迪士尼，全称为The Walt Disney Company，取名自其创始人华特·迪士尼，是总部设在美国伯班克的大型跨国公司.',
          "fans": 3000,
          "location": {
            'lng': '31.2344',
            'lat': '144.222'
          },
          "serveScore": '4.7',
          "desScore": '4.7',
          "logiScore": '4.7',
          "id": "598c5f37609fdf1e2f4dd8c9",
          "type": 'play',
          "credit": 6,
          "owner": "personal"
        }
      ]
    }
    res.json(response)
  },
  ['GET /api/v1/commodity/598c5f37609fdf1e2f4dd8c9.json'](req,res){
    const response = {
      state: 200,
      data: [
        {
          id: '0',
          name: '雅诗兰黛小棕瓶面部精华 特润修护肌透精华露30/50ml 保湿修护',
          price: '590',
          taobaoPrice:'580',
          description : '平滑抚纹 匀净透亮',
          location: '浙江杭州',
          people: 33,
          image: "../assets/weini.jpg",
          shop: '雅诗兰黛官方旗舰店',
        },
        {
          id: '1',
          name: '雅诗兰黛唇膏口红 倾慕魅色唇膏 保湿滋润 防水 豆沙色 420',
          price: '270',
          taobaoPrice:'260',
          description : '持久滋润 丰唇塑型 魅色出众',
          location: '浙江杭州',
          people: 43,
          image: "../assets/weini.jpg",
          shop: '雅诗兰黛官方旗舰店',
        },
        {
          id: '2',
          name: '雅诗兰黛奢华眼霜 白金花菁萃紧颜眼霜 补水修护 淡化细纹',
          price: '980',
          taobaoPrice:'970',
          description : '柔润保湿 淡化眼纹 提亮眼周',
          location: '浙江杭州',
          people: 53,
          image: "../assets/weini.jpg",
          shop: '雅诗兰黛官方旗舰店',
        },
        {
          id: '3',
          name: '雅诗兰黛爽肤水 肌初赋活原生液 肌底微精华150/200ml 补水保湿',
          price: '420.00',
          taobaoPrice:'320',
          description : '修护肌底 加乘吸收力 深透深彻',
          location: '浙江杭州',
          people: 63,
          image: "../assets/weini.jpg",
          shop: '雅诗兰黛官方旗舰店',
        }
      ]
    }
    res.json(response)
  }

}
