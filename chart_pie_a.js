$(function() {
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
    var data1 = [{"name": "SUV", "value": "39.2"}, {"name": "三厢轿车", "value": "16.2"}, {"name": "纯越野车", "value": "12.0"}, {"name": "两厢轿车", "value": "9.0"}, {"name": "小型汽车/面包车", "value": "7.6"}, {"name": "MPV", "value": "6.2"}, {"name": "跑车", "value": "5.0"}, {"name": "房车", "value": "4.8"}]
    var data2 = [{"name": "汽油车", "value": "58.5"}, {"name": "混合动力汽车", "value": "22.1"}, {"name": "纯电动汽车", "value": "10.1"}, {"name": "其他新能源汽车", "value": "6.4"}, {"name": "柴油车", "value": "2.8"}]
    chart_init1()
    chart_init2()
    // 图表配置
    function chart_init1() {
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
            legend: [{
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
                data: data1.map(d => {
                    return d.name
                })
            }],
            series: [{
                type: 'pie',
                // center: ['20%', '50%'],
                radius: [100, 101],
                hoverAnimation: false,
                label: {
                    normal: {
                        show: true,
                        formatter: "{d}%",
                        textStyle: {
                            fontSize: 14,
                        },
                        position: 'outside'
                    },
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    normal: {
                        show: false,
                        length: 10,
                        length2: 0
                    },
                    emphasis: {
                        // show: false
                    }
                },
                name: "",
                // data: [{
                //     name: '',
                //     value: 0,
                //     itemStyle: {
                //         normal: {
                //             color: pcolor
                //         }
                //     }
                // }]
                data: data1
            },{
                stack: 'a',
                type: 'pie',
                // center: ['20%', '50%'],
                radius: [68, 82],
                // roseType: 'radius',
                zlevel: 10,
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        formatter: "关注车型",
                        textStyle: {
                            fontSize: 20,
                            color: pcolor
                        }
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false,
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
                data: data1
            }, ]
        }
        let chart = echarts.init(document.getElementById('chart-pie-a-left'))
        chart.setOption(option)
        $(window).resize(function() {
            chart.resize()
        })
    }

    function chart_init2() {
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
            legend: [{
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
                data: data2.map(d => {
                    return d.name
                })
            }],
            series: [{
                type: 'pie',
                // center: ['20%', '50%'],
                radius: [100, 101],
                hoverAnimation: false,
                label: {
                    normal: {
                        show: true,
                        formatter: "{d}%",
                        textStyle: {
                            fontSize: 14,
                        },
                        position: 'outside'
                    },
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    normal: {
                        show: false,
                        length: 10,
                        length2: 0
                    },
                    emphasis: {
                        // show: false
                    }
                },
                name: "",
                // data: [{
                //     name: '',
                //     value: 0,
                //     itemStyle: {
                //         normal: {
                //             color: pcolor
                //         }
                //     }
                // }]
                data: data2
            },{
                stack: 'a',
                type: 'pie',
                // center: ['20%', '50%'],
                radius: [68, 82],
                // roseType: 'radius',
                zlevel: 10,
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        formatter: "动力类型",
                        textStyle: {
                            fontSize: 20,
                            color: pcolor
                        }
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false,
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
                data: data2
            }, ]
        }
        let chart = echarts.init(document.getElementById('chart-pie-a-right'))
        chart.setOption(option)
        $(window).resize(function() {
            chart.resize()
        })
    }
}())
