export default {
    ['GET /api/v1/category/index.json'](req, res) {
        const response = {
            "state": 200,
            "data": [
                {
                    "name": "餐饮",
                    "color": "#123456",
                    "groups": [
                        {
                            "id": "598c5f37609fdf1e2f4dd8c9",
                            "name": "食堂"
                        },
                        {
                            "id": "598c5f37609fdf1e2f4dd8c9",
                            "name": "奶茶咖啡甜品"
                        },
                        {
                            "id": "598c5f37609fdf1e2f4dd8c9",
                            "name": "超市"
                        },
                        {
                            "id": "598c5f37609fdf1e2f4dd8c9",
                            "name": "水果"
                        }
                    ]
                },
                {
                    "name": "学习",
                    "color": "#654321",
                    "groups": [
                        {
                            "id": "598c5f37609fdf1e2f4dd8c9",
                            "name": "打印"
                        },
                        {
                            "id": "598c5f37609fdf1e2f4dd8c9",
                            "name": "自习"
                        },
                        {
                            "id": "598c5f37609fdf1e2f4dd8c9",
                            "name": "教学楼"
                        },
                        {
                            "id": "598c5f37609fdf1e2f4dd8c9",
                            "name": "图书馆"
                        },
                        {
                            "id": "598c5f37609fdf1e2f4dd8c9",
                            "name": "测试测试测"
                        },
                        {
                            "id": "598c5f37609fdf1e2f4dd8c9",
                            "name": "测试测试测试测试"
                        }
                    ]
                },
                {
                    "name": "生活",
                    "color": "#837621",
                    "groups": [
                        {
                            "id": "598c5f37609fdf1e2f4dd8c9",
                            "name": "银行"
                        },
                        {
                            "id": "598c5f37609fdf1e2f4dd8c9",
                            "name": "圈存"
                        },
                        {
                            "id": "598c5f37609fdf1e2f4dd8c9",
                            "name": "理发"
                        }
                    ]
                },
                {
                    "name": "其他",
                    "color": "#473622",
                    "groups": [
                        {
                            "id": "598c5f37609fdf1e2f4dd8c9",
                            "name": "银行"
                        },
                        {
                            "id": "598c5f37609fdf1e2f4dd8c9",
                            "name": "圈存"
                        },
                        {
                            "id": "598c5f37609fdf1e2f4dd8c9",
                            "name": "理发"
                        },
                        {
                            "id": "598c5f37609fdf1e2f4dd8c9",
                            "name": "洗衣"
                        },
                        {
                            "id": "598c5f37609fdf1e2f4dd8c9",
                            "name": "空调租赁"
                        },
                        {
                            "id": "598c5f37609fdf1e2f4dd8c9",
                            "name": "裁缝"
                        },
                        {
                            "id": "598c5f37609fdf1e2f4dd8c9",
                            "name": "眼镜"
                        },
                        {
                            "id": "598c5f37609fdf1e2f4dd8c9",
                            "name": "钥匙"
                        },
                        {
                            "id": "598c5f37609fdf1e2f4dd8c9",
                            "name": "修车"
                        }
                    ]
                }
            ]
        };
        res.json(response);
    },
    ['GET /api/v1/group/598c5f37609fdf1e2f4dd8c9.json'](req, res) {
        const response = { "state": 200, "data": { "name": "食堂", "locs": [{ "name": "第一餐饮大楼", "co": [121.438314, 31.028589], "area": [[121.438277, 31.028988], [121.438111, 31.028767], [121.437868, 31.028899], [121.437765, 31.028868], [121.43777, 31.028709], [121.437936, 31.02862], [121.43785, 31.028501], [121.437859, 31.028361], [121.437999, 31.028373], [121.438214, 31.028253], [121.438255, 31.02816], [121.438354, 31.028168], [121.438452, 31.028299], [121.438511, 31.028311], [121.438677, 31.028218], [121.43878, 31.028245], [121.43878, 31.028388], [121.438645, 31.028473], [121.438677, 31.028516], [121.438668, 31.028562], [121.438515, 31.028651], [121.438596, 31.028759], [121.438596, 31.028806]] }, { "name": "第二餐饮大楼", "co": [121.442707, 31.029355], "area": [[121.442126, 31.029506], [121.442122, 31.029394], [121.442234, 31.029154], [121.442625, 31.029286], [121.442764, 31.028988], [121.443043, 31.029077], [121.442971, 31.029324], [121.443205, 31.029402], [121.4432, 31.029487], [121.443065, 31.029792]] }, { "name": "第三餐饮大楼", "co": [121.439518, 31.033169], "area": [[121.439207, 31.033517], [121.439198, 31.03344], [121.439261, 31.033285], [121.439445, 31.032867], [121.439535, 31.032891], [121.439589, 31.03279], [121.439733, 31.03284], [121.439814, 31.032991], [121.439814, 31.033103], [121.439742, 31.033266], [121.439638, 31.033444], [121.439638, 31.033444], [121.439481, 31.033618]] }, { "name": "第四餐饮大楼", "co": [121.433751, 31.031529], "area": [[121.433377, 31.031665], [121.433377, 31.031665], [121.433804, 31.031181], [121.433961, 31.031231], [121.434127, 31.03134], [121.43388, 31.031955], [121.433813, 31.032001], [121.4334, 31.031866], [121.433377, 31.031773]] }, { "name": "第五餐饮大楼", "co": [121.447729, 31.030074], "area": [[121.44718, 31.030175], [121.44718, 31.030086], [121.447229, 31.029978], [121.447575, 31.030086], [121.447656, 31.030233], [121.447907, 31.030133], [121.447912, 31.030106], [121.447526, 31.029978], [121.447526, 31.029878], [121.447571, 31.029789], [121.448173, 31.029986], [121.448168, 31.030079], [121.448101, 31.030249], [121.447589, 31.030458], [121.447481, 31.030276]] }, { "name": "第六餐饮大楼", "co": [121.45103, 31.03564], "area": [[121.450836, 31.035595], [121.450832, 31.035498], [121.451056, 31.035428], [121.451227, 31.035788], [121.451223, 31.035881], [121.451128, 31.035908], [121.451088, 31.035838], [121.45094, 31.035892], [121.450891, 31.035791]] }] } };
        res.json(response);
    }
};
//# sourceMappingURL=category.js.map