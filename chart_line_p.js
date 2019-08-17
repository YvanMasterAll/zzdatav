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
    let province = json['2018']['nation']
    for (k in province) {
        data.push({
            name: k,
            value: province[k]
        })
    }
    let _p = data.pop()
    data.unshift(_p)
    chart_init()
})
// 图表配置
function chart_init() {
    option = {
        tooltip: {                          
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器, 坐标轴触发有效
                type: 'shadow' // 默认为直线, 可选为: 'line' | 'shadow'
            }
        },
        legend: {
            data: ['汽车产量', '同比增长'],
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
            containLabel: true, // 防标签溢出
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
        yAxis: [ 
            {
                // name: '汽车产量(万辆)',
                type: 'value',
                interval: 50,
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
                }
            },
            {
                show: false,
                name: '同比增长(%)',
                // nameLocation: 'start',
                splitLine: { // 网格线y轴对应的是否显示
                    show: false
                },
                min: -40,
                max: 30, // growing rate upper limit
                type: 'value',
                // top:10,
                inverse: false,
                axisLine: {
                    lineStyle: {
                        color: '#2f4554'
                    }
            }
        }],
        series: [
            {
                name: '汽车产量',
                type: 'bar',
                color: '#00BFFF',
                barWidth:'50%',
                itemStyle: {
                    normal: {
                        barBorderRadius: 4,
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{ offset: 0, color: '#00feff' },
                                { offset: 0.5, color: '#027eff' },
                                { offset: 1, color: '#0286ff' }
                            ]
                        )
                    }
                },
                // stack: '总量',
                // markPoint: {
                //     data: [
                //         { type: 'max', name: '最大值' },
                //         { type: 'min', name: '最小值' }
                //     ]
                // },
                // markLine: {
                //     data: [
                //         {type: 'average', name: '平均值'}
                //     ]
                // },
                data: data.map(d => {
                    return d.value['produce']
                })
            },
            {
                name: '同比增长',
                type: 'line',
                yAxisIndex: 1, // yAxisIndex为1表示第二个y轴, 默认为0
                color: 'yellow',
                // stack: '总量',
                markPoint: {
                    symbol: 'circle',
                    symbolSize: 32,
                    data: [
                        { type: 'max', name: '最大值'},
                        { type: 'min', name: '最小值' }
                    ],
                    label: {
                        color: pcolor
                    }
                },
                data: data.map(d => {
                    return d.value["increase"]
                })
            }
        ]
    }
    let chart = echarts.init(document.getElementById('chart-line-p'))
    chart.setOption(option)
}