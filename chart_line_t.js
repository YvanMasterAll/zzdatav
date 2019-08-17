// 常量
var pcolor = yvan.pcolor // 主色
var pcolor50 = yvan.pcolor50
var pcolor400 = yvan.pcolor400 
var ncolor = yvan.ncolor // 中性色
var acolor_p = yvan.acolor_p // 辅色紫色
var acolor_c = yvan.acolor_c // 辅色青色
var acolor_y = yvan.acolor_y// 辅色黄色
// 数据
var data = []
// 取到数据
$.getJSON('produces.json', (json) => {
    let province = json['2018']['type']
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
        tooltip: {                          
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器, 坐标轴触发有效
                type: 'shadow', // 默认为直线, 可选为: 'line' | 'shadow'
                label: {
                    show: true,
                    backgroundColor: '#7B7DDC'
                }
            },
            // formatter: function (params) {
            //     console.log(params[0])
            //     return ''
            //     // if (typeof(params.value)[2] == "undefined") {
            //     //     if (!params.data) {
            //     //         return params.name + ' : -';
            //     //     }
            //     //     return params.name + ' : ' + params.data.value['produce'] + '<br/>同比 : ' + params.data.value['increase'];
            //     // } else {
            //     //     return params.name + ' : ' + params.value[2]['produce'] + '<br/>同比 : ' + params.value[2]['increase'];
            //     // }
            // }
        },
        legend: {
            data: ['轿车', 'MPV', 'SUV', '交叉型乘用车'],
            bottom: '1%',
            itemGap: 40,
            textStyle: {
                color: pcolor50
            }
        },
        grid: {
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true,
            show: false // 网格边框是否显示, 上和右边框 
        },
        // toolbox: {  
        //     feature: {
        //         dataView: {show: false, readOnly: false}, // 数据试图是否在控件中显示
        //         magicType: {show: true, type: ['stack', 'tiled']},
        //         restore: {show: true},
        //         saveAsImage: {show: true}
        //     }
        // },
        xAxis: {
            type: 'category',
            boundaryGap: true, // 坐标轴两边留白
            splitLine: { // 网格线x轴对应的是否显示
                show: true,
                lineStyle: {
                    width: 1.2,
                    color: pcolor400
                }
            },
            data: data.map(d => {
                return d.name + '月'
            }),
            axisLine: {
                lineStyle: {
                    width: 1.2,
                    color: pcolor400
                }
            },
            axisLabel: {
                show: true,
                color: pcolor50,
                fontSize: 12
            }
        },
        yAxis: {
            type: 'value',
            // name: '份额(%)',
            // top:10,
            // nameLocation: 'start',
            min: 0,
            max: 50,
            splitLine: { // 网格线y轴对应的是否显示
                show: true,
                lineStyle: {
                    width: 1.2,
                    color: pcolor400
                }
            },
            axisLine: {
                lineStyle: {
                    width: 1.2,
                    color: pcolor400
                }
            },
            axisLabel: {
                formatter: '{value}',
                show: true,
                color: pcolor50,
                fontSize: 12
            },
            inverse: false,
        },
        series: [
            {
                name: '轿车',
                type: 'line',
                smooth: true, //是否平滑曲线显示
                showAllSymbol: true,
                symbol: 'circle',
                symbolSize: 6,
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#fff',
                    }
                },
                itemStyle: {
                    borderColor: "#fff",
                    borderWidth: 2
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#89A170'
                            },
                            {
                                offset: 1,
                                color: '#3fbbff0d'
                            }
                        ], false),
                    }
                },
                color: 'yellow',
                data: data.map(d => {
                    return d.value["轿车"]["ratio"]
                })
            },
            {
                name: 'MPV',
                type: 'line',
                smooth: true, //是否平滑曲线显示
                showAllSymbol: true,
                symbol: 'circle',
                symbolSize: 6,
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#fff',
                    }
                },
                itemStyle: {
                    borderColor: "#fff",
                    borderWidth: 2
                },
                color: '#e86c66',
                data: data.map(d => {
                    return d.value["MPV"]["ratio"]
                })
            },
            {
                name: 'SUV',
                type: 'line',
                smooth: true, //是否平滑曲线显示
                showAllSymbol: true,
                symbol: 'circle',
                symbolSize: 6,
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#fff',
                    }
                },
                itemStyle: {
                    borderColor: "#fff",
                    borderWidth: 2
                },
                color: '#47a0fb',
                data: data.map(d => {
                    return d.value["SUV"]["ratio"]
                })
            },
            {
                name: '交叉型乘用车',
                type: 'line',
                smooth: true, //是否平滑曲线显示
                showAllSymbol: true,
                symbol: 'circle',
                symbolSize: 6,
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#fff',
                    }
                },
                itemStyle: {
                    borderColor: "#fff",
                    borderWidth: 2
                },
                color: '#6c13a6',
                data: data.map(d => {
                    return d.value["交叉型乘用车"]["ratio"]
                })
            }
        ]
    }
    let chart = echarts.init(document.getElementById('chart-line-t'))
    chart.setOption(option)
}