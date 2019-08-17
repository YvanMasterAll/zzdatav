// 常量
var pcolor = yvan.pcolor // 主色
var pcolor50 = yvan.pcolor50
var pcolor400 = yvan.pcolor400 
var pcolor500 = yvan.pcolor500
var ncolor = yvan.ncolor // 中性色
var acolor_p = yvan.acolor_p // 辅色紫色
var acolor_p400 = yvan.acolor_p400
var acolor_c = yvan.acolor_c // 辅色青色
var acolor_c600 = yvan.acolor_c600 
var acolor_y = yvan.acolor_y // 辅色黄色
var acolor_y800 = yvan.acolor_y800 // 辅色橘黄色
var acolor_o = yvan.acolor_o // 辅色橙色
// 数据
var data = {}
// 取到数据
$.getJSON('sales.json', (json) => {
    let brand = json['2018']['brand']
    let brand_a = {sale: 0, ratio: 0} // 自主品牌
    let brand_b = {sale: 0, ratio: 0} // 日系品牌
    let brand_c = {sale: 0, ratio: 0} // 德系品牌
    let brand_d = {sale: 0, ratio: 0} // 美系品牌
    let brand_e = {sale: 0, ratio: 0} // 韩系品牌
    let brand_f = {sale: 0, ratio: 0} // 法系品牌
    let total = 0    // 总销量

    for (var i = 1; i <= 12; i ++) {
        brand_a.sale = parseFloat((brand_a.sale*1 + brand[i]['自主品牌']['sale']*1).toFixed(2))
        brand_b.sale = parseFloat((brand_b.sale*1 + brand[i]['日系']['sale']*1).toFixed(2))
        brand_c.sale = parseFloat((brand_c.sale*1 + brand[i]['德系']['sale']*1).toFixed(2))
        brand_d.sale = parseFloat((brand_d.sale*1 + brand[i]['美系']['sale']*1).toFixed(2))
        brand_e.sale = parseFloat((brand_e.sale*1 + brand[i]['韩系']['sale']*1).toFixed(2))
        brand_f.sale = parseFloat((brand_f.sale*1 + brand[i]['法系']['sale']*1).toFixed(2))
    }

    total = parseFloat((brand_a.sale + brand_b.sale + brand_c.sale + brand_d.sale + brand_e.sale + brand_f.sale).toFixed(2))

    brand_a.ratio = parseFloat((brand_a.sale/total).toFixed(3))
    brand_b.ratio = parseFloat((brand_b.sale/total).toFixed(3))
    brand_c.ratio = parseFloat((brand_c.sale/total).toFixed(3))
    brand_d.ratio = parseFloat((brand_d.sale/total).toFixed(3))
    brand_e.ratio = parseFloat((brand_e.sale/total).toFixed(3))
    brand_f.ratio = parseFloat((brand_f.sale/total).toFixed(3))

    data.brand = [{
            name: '日系',
            value: brand_b.sale, 
        },  {
            name: '美系',
            value: brand_d.sale, 
        }, {
            name: '韩系',
            value: brand_e.sale, 
        }, {
            name: '法系',
            value: brand_f.sale,
        }, {
            name: '德系',
            value: brand_c.sale, 
        }, {
            name: '自主品牌',
            value: brand_a.sale, 
        }
    ]
    data.ratio = [brand_a.ratio, brand_b.ratio, brand_c.ratio, brand_d.ratio, brand_e.ratio, brand_f.ratio]
    
    chart_init()
})
// 图表配置
function chart_init() {
    option = {
        // backgroundColor:"#0B1837",
        // color: ["#EAEA26", "#906BF9", "#FE5656", "#01E17E", "#3DD1F9", "#FFAD05"],
        color: [acolor_y, acolor_p400, acolor_o, acolor_c600, pcolor500, acolor_y800],
        // title: {
        //     text: '2018国内汽车销量品牌统计',
        //     left: '60',
        //     top: 0,
        //     textAlign: 'center',
        //     textStyle: {
        //         color: '#fff',
        //         fontSize: 14,
        //         fontWeight: 0
        //     }
        // },
        tooltip: {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
        },
        legend: {
            // orient: "vartical",
            bottom: "7%",
            itemWidth: 16,
            itemHeight: 8,
            itemGap: 16,
            textStyle: {
                color: '#A3E2F4',
                fontSize: 12,
                fontWeight: 0
            },
            data: ['自主品牌', '日系', '德系', '美系', '韩系', '法系']
        },
        polar: {
            radius: '70%'
        },
        angleAxis: {
            interval: 1,
            type: 'category',
            data: [],
            axisLine: {
                show: false,
                lineStyle: {
                    color: "#0B4A6B",
                    width: 1,
                    type: "solid"
                },
            },
            axisLabel: {
                interval: 0,
                show: true,
                color: "#0B4A6B",
                margin: 8,
                fontSize: 16
            },
        },
        radiusAxis: {
            min: 0,
            max: 80,
            interval: 10,
            axisLine: {
                show: false,
                lineStyle: {
                    color: pcolor400,
                    width: 1,
                    type: "dashed"
                },
            },
            axisLabel: {
                formatter: '{value} %',
                show: false,
                padding: [0, 0, 20, 0],
                color: pcolor400,
                fontSize: 16
            },
            splitLine: {
                lineStyle: {
                    color: pcolor400,
                    width: 2,
                    type: "dashed"
                }
            }
        },
        calculable: true,
        series: [{
            type: 'pie',
            radius: ["8%", "11%"],
            hoverAnimation: false,
            labelLine: {
                normal: {
                    show: false,
                    length: 30,
                    length2: 55
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    // color: '#c23531',
                    shadowBlur: 10,
                    shadowColor: '#ffffff'
                }
            },
            data: [{
                name: '',
                value: 0,
                itemStyle: {
                    normal: {
                        color: acolor_c
                    }
                }
            }]
        }, {
            type: 'pie',
            // radius: ["90%", "95%"],
            radius: ["70%", "71%"],
            hoverAnimation: false,
            labelLine: {
                normal: {
                    show: false,
                    length: 30,
                    length2: 55
                },
                emphasis: {
                    show: false
                }
            },
            name: "",
            data: [{
                name: '',
                value: 0,
                itemStyle: {
                    normal: {
                        color: pcolor
                    }
                }
            }]
        },{
            stack: 'a',
            type: 'pie',
            // radius: ['20%', '80%'],
            radius: ['16%', '61%'],
            roseType: 'radius',
            zlevel: 10,
            label: {
                normal: {
                    show: true,
                    formatter: "{d} %",
                    textStyle: {
                        fontSize: 15,
                    },
                    position: 'outside'
                },
                emphasis: {
                    show: true
                }
            },
            labelLine: {
                normal: {
                    show: true,
                    length: 30,
                    length2: 44
                },
                emphasis: {
                    // show: false
                }
            },
            itemStyle: {
                normal: {
                    // color: '#c23531',
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            },
            data: data.brand
        }, ]
    }
    let chart = echarts.init(document.getElementById('chart-pie-b'))
    chart.setOption(option)
}