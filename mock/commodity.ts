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
          name: 'cartoon pictures',
          price: '0.9',
          taobaoPrice:'0.8',
          description : 'cartoon pictures',
          location: '北京',
          people: 33,
          image: "../assets/weini.jpg",
          shop: 'Disneys',
        },
        {
          id: '1',
          name: 'cartoon picture1',
          price: '1.9',
          taobaoPrice:'1.8',
          description : 'cartoon picture1',
          location: '北京',
          people: 43,
          image: "../assets/weini.jpg",
          shop: 'Disneys',
        },
        {
          id: '2',
          name: 'cartoon picture2',
          price: '2.9',
          taobaoPrice:'2.8',
          description : 'cartoon picture',
          location: '北京',
          people: 53,
          image: "../assets/weini.jpg",
          shop: 'Disneys',
        },
        {
          id: '3',
          name: 'cartoon picture3',
          price: '3.9',
          taobaoPrice:'3.8',
          description : 'cartoon picture3',
          location: '北京',
          people: 63,
          image: "../assets/weini.jpg",
          shop: 'Disneys',
        }
      ]
    }
    res.json(response)
  }

}
