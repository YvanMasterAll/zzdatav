$(function() {
    // 常量
    var mapName = 'china'
    var pcolor = yvan.pcolor // 主色
    var ncolor = yvan.ncolor // 中性色
    var acolor_p = yvan.acolor_p // 辅色紫色
    var acolor_c = yvan.acolor_c // 辅色青色
    var acolor_y = yvan.acolor_y// 辅色黄色
    var max = 480, min = 9, maxSize4Pin = 150, minSize4Pin = 20; // 气泡参数
    // 数据 
    // var data = [{name: "北京", value: 25866}, {name: "天津", value: 700}, {name: "上海", value: 7620}, {name: "重庆", value: 459}, {name: "河北", value: 344}, {name: "山西", value: 185}, {name: "辽宁", value: 142}, {name: "吉林", value: 32}, {name: "黑龙江", value: 24}, {name: "江苏", value: 521}, {name: "浙江", value: 1186}, {name: "安徽", value: 220}, {name: "福建", value: 251}, {name: "江西", value: 318}, {name: "山东", value: 533}, {name: "河南", value: 382}, {name: "湖北", value: 120}, {name: "湖南", value: 261}, {name: "广东", value: 786}, {name: "海南", value: 52}, {name: "四川", value: 225}, {name: "贵州", value: 46}, {name: "云南", value: 68}, {name: "陕西", value: 145}, {name: "甘肃", value: 66}, {name: "青海", value: 24}, {name: "台湾", value: 1}, {name: "内蒙古自治区", value: 7}, {name: "广西壮族自治区", value: 2}, {name: "西藏自治区", value: 0}, {name: "宁夏回族自治区", value: 1}, {name: "新疆维吾尔自治区", value: 6}, {name: "香港特别行政区", value: 0}, {name: "澳门特别行政区", value: 0}]
    var data = []
    // 提示数据
    var toolTipData = []
    // 地理位置
    var geoCoordMap = {}
    var mapFeatures = echarts.getMap(mapName).geoJson.features
    mapFeatures.forEach(function(v) {
        // 地区名称
        var name = v.properties.name;
        // 地区经纬度
        geoCoordMap[name] = v.properties.cp;
    });
    // 关联数据和地理位置
    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value),
                });
            }
        }
        return res;
    };
    // 取到数据
    $.getJSON('produces.json', (json) => {
        let province = json['2018']['province']
        for (k in province) {
            data.push({
                name: k,
                value: province[k]
            })
        }
        chart_init()
    })
    // 图表配置
    function chart_init() {
        option = {
            // title: {
            //     text: '2018 全国汽车产量',
            //     subtext: '',
            //     left: 'center',
            //     top: '40px',
            //     textStyle: {
            //         color: '#fff'
            //     }
            // },
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    if (typeof(params.value)[2] == "undefined") {
                        if (!params.data) {
                            return params.name + ' : -';
                        }
                        return params.name + ' : ' + params.data.value['produce'] + '<br/>同比 : ' + params.data.value['increase'];
                    } else {
                        return params.name + ' : ' + params.value[2]['produce'] + '<br/>同比 : ' + params.value[2]['increase'];
                    }
                }
            },
            // backgroundColor: {
            //     type: 'linear',
            //     x: 0,
            //     y: 0,
            //     x2: 1,
            //     y2: 1,
            //     colorStops: [{
            //         offset: 0, color: '#0f2c70' // 0% 处的颜色
            //     }, {
            //         offset: 1, color: '#091732' // 100% 处的颜色
            //     }],
            //     globalCoord: false // 缺省为 false
            // },
            legend: {
                orient: 'vertical',
                y: 'bottom',
                x: 'right',
                data: ['credit_pm2.5'],
                textStyle: {
                    color: '#fff'
                }
            },
            visualMap: {
                show: false,
                min: 0,
                max: 500,
                left: '5%',
                top: 'bottom',
                text: ['高', '低'], // 文本，默认为数值文本
                calculable: true,
                seriesIndex: [1],
                inRange: {
                    color: [ncolor]
                    // color: [ncolor, '#512a9d', '#0a2029']
                }
            },
            // 工具按钮组
            // toolbox: {
            //     show: true,
            //     orient: 'vertical',
            //     left: 'right',
            //     top: 'center',
            //     feature: {

            //         dataView: {
            //             readOnly: false
            //         },
            //         restore: {},
            //         saveAsImage: {}
            //     }
            // },
            geo: {
                show: true,
                map: mapName,
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false,
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: ncolor,
                        borderColor: pcolor,
                        borderWidth: 1.4,
                        shadowColor: 'rgba(64, 151, 229, 0.4)',
                        shadowBlur: 8,
                        opacity: 1,
                        // shadowOffsetX: -2,
                        // shadowOffsetY: -2
                    },
                    emphasis: {
                        areaColor: '#2B91B7',
                    }
                }
            },
            series: [
                { // 散点
                    name: '散点',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData(data),
                    symbolSize: function(val) {
                        return 10;
                    },
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: acolor_c
                        }
                    }
                },
                { // 区域颜色
                    type: 'map',
                    map: mapName,
                    geoIndex: 0,
                    aspectScale: 0.75, // 长宽比
                    showLegendSymbol: false, // 存在legend时显示
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#031525',
                            borderColor: '#3B5077',
                        },
                        emphasis: {
                            areaColor: '#2B91B7'
                        }
                    },
                    animation: false,
                    data: data
                },
                // { // 气泡
                //     name: '点',
                //     type: 'scatter',
                //     coordinateSystem: 'geo',
                //     symbol: 'pin', //气泡
                //     symbolSize: function(val) {
                //         var a = (maxSize4Pin - minSize4Pin) / (max - min);
                //         var b = minSize4Pin - a * min;
                //         b = maxSize4Pin - a * max;
                //         return 35  ;
                //     },
                //     label: {
                //         normal: {
                //             show: true,
                //             formatter: function(params) {
                //                 return params.data.value[2]['produce']
                //             },
                //             textStyle: {
                //                 color: '#fff',
                //                 fontSize: 9,
                //             }
                //         }
                    
                //     },
                //     itemStyle: {
                //         normal: {
                //             color: '#F62157', // 标志颜色
                //         }
                //     },
                //     zlevel: 6,
                //     data: convertData(data),
                // },
                {   
                    name: 'Top 5',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertData(data.sort(function(a, b) {
                        return b.value - a.value;
                    }).slice(0, 5)),
                    symbolSize: function(val) {
                        return 14;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: { 
                            formatter: '{b}',
                            position: 'right',
                            color: '#ffffff',
                            show: true // bug: 设置为true造成top5的省份名称重影
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: acolor_y,
                            shadowBlur: 10,
                            shadowColor: acolor_y
                        }
                    },
                    zlevel: 1
                }
            ]
        };
        let chart = echarts.init(document.getElementById("chart-map"))
        chart.setOption(option)
        // 自适应
        $(window).resize(function() {
            chart.resize()
        })
    }
}())