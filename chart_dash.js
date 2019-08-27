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
    let data = {
        speed: [{value: 40, name: 'km/h'}],
        rpm: [{value: 1.5, name: 'x1000 r/min'}],
        gas: [{value: 0.5, name: 'gas'}],
        water: [{value: 0.5, name: 'water'}]
    }
    chart_init()
    // 图表配置
    function chart_init() {
        option = {
            // backgroundColor: '#1b1b1b',
            tooltip: {
                formatter: "{a} <br/>{c} {b}"
            },
            // toolbox: {
            //     show: true,
            //     feature: {
            //         mark: {show: true},
            //         restore: {show: true},
            //         saveAsImage: {show: true}
            //     }
            // },
            series: [
                { // 速度 - 外侧圆弧
                    name: '速度',
                    type: 'gauge',
                    center: ['50%', '50%'],
                    radius: '54%',
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 2,
                            color: [
                                [
                                    data.speed[0].value/220, new echarts.graphic.LinearGradient(
                                        0, 0, 1, 0, [{
                                                offset: 0,
                                                color: 'rgba(255,255,255,0)',
                                            },
                                            {
                                                offset: 1,
                                                color: 'white',
                                            }
                                        ]
                                    )
                                ],
                                [
                                    1, 'rgba(255,255,255, 0)'
                                ]
                            ]
                        }
                    },
                    axisTick: {
                        show: 0,
                    },
                    splitLine: {
                        show: 0,
                    },
                    axisLabel: {
                        show: 0
                    },
                    pointer: {
                        show: 0,
                    },
                    detail: {
                        show: 0
                    },
                    // data: [{
                    //     value: 60,
                    // }]
                }, { // 速度 - 外围刻度
                    name: '速度',
                    type: 'gauge',
                    min: 0,
                    max: 220,
                    splitNumber: 11,
                    radius: '48%',
                    axisLine: {
                        show: true,
                        lineStyle: {
                            width: 10,
                            color: [
                                [1, 'rgba(0,0,0,0)']
                            ]
                        }
                    }, // 仪表盘轴线
                    axisTick: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(255,255,255,0.6)',
                            width: 1
                        },
                        length: -6
                    }, // 刻度样式
                    splitLine: {
                        show: true,
                        length: 10,
                        lineStyle: {
                            color: 'rgba(255,255,255,0.6)'
                        }
                    }, // 分隔线样式
                    axisLabel: {
                        show: true,
                        distance: 2,
                        textStyle: {
                            color: 'white',
                            fontSize: '12',
                            fontWeight: 'bold'
                        }
                    },
                    pointer: {
                        show: 0
                    },
                    detail: {
                        show: 0
                    }
                }, { // 速度 - 内侧指针, 数值显示
                    name: '速度',
                    type: 'gauge',
                    center: ['50%', '50%'],
                    startAngle: 225,
                    endAngle: -45,
                    min: 0,
                    max: 220,
                    splitNumber: 11,
                    radius: '50%',
                    axisLine: {            // 坐标轴线
                        // lineStyle: {       // 属性lineStyle控制线条样式
                        //     color: [[0.09, 'lime'], [0.82, '#1e90ff'], [1, '#ff4500']],
                        //     width: 3,
                        //     shadowColor: '#fff', // 默认透明
                        //     shadowBlur: 10
                        // }
                        lineStyle: {
                            width: 50,
                            color: [
                                [
                                    data.speed[0].value/220, new echarts.graphic.LinearGradient(
                                        0, 0, 1, 0, [{
                                                offset: 0,
                                                color: 'rgba(0,0,0, 0)'
                                            },
                                            {
                                                offset: 1,
                                                color: 'rgba(242,166,200,0.6)'
                                            }
                                        ]
                                    )
                                ],
                                [
                                    1, 'rgba(255,255,255, 0)'
                                ]
                            ]
                        }
                    },
                    axisLabel: {            // 坐标轴小标记
                        // textStyle: {       // 属性lineStyle控制线条样式
                        //     fontWeight: 'bolder',
                        //     color: '#fff',
                        //     shadowColor: '#fff', // 默认透明
                        //     shadowBlur: 10
                        // }
                        show: 0
                    },
                    axisTick: {            // 坐标轴小标记
                        // length: 15,        // 属性length控制线长
                        // lineStyle: {       // 属性lineStyle控制线条样式
                        //     color: 'auto',
                        //     shadowColor: '#fff', // 默认透明
                        //     shadowBlur: 10
                        // }
                        show: 0
                    },
                    splitLine: {           // 分隔线
                        // length: 25,         // 属性length控制线长
                        // lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        //     width: 3,
                        //     color: '#fff',
                        //     shadowColor: '#fff', // 默认透明
                        //     shadowBlur: 10
                        // }
                        show: 0
                    },
                    pointer: {           // 分隔线
                        shadowColor: '#fff', // 默认透明
                        shadowBlur: 5,
                        length: '80%',
                        width: 5
                    },
                    title: {
                        // offsetCenter: [0, '65%'],
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontSize: 18,
                            fontStyle: 'italic',
                            color: '#fff',
                            shadowColor: '#fff', // 默认透明
                            shadowBlur: 10
                        }
                    },
                    itemStyle: { 
                        normal: {
                            color: 'white', // 可以调整指针颜色
                        }
                    },
                    detail: {
                        backgroundColor: 'rgba(30,144,255,0.1)',
                        // offsetCenter: [0, 0],
                        borderWidth: 1,
                        borderColor: '#fff',
                        shadowColor: '#fff', // 默认透明
                        shadowBlur: 5,
                        offsetCenter: [0, '50%'],       // x, y，单位px
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            color: '#fff'
                        },
                        formatter: '{value}'
                    },
                    data: data.speed
                },
                {
                    name: '转速',
                    type: 'gauge',
                    center: ['25%', '55%'],    // 默认全局居中
                    radius: '30%',
                    min: 0,
                    max: 7,
                    endAngle: 45,
                    splitNumber: 7,
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.29, 'lime'],[0.86, '#1e90ff'],[1, '#ff4500']],
                            width: 2,
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisLabel: {            // 坐标轴小标记
                        textStyle: {       // 属性lineStyle控制线条样式
                            fontWeight: 'bolder',
                            color: '#fff',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length: 12,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    splitLine: {           // 分隔线
                        length: 20,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width: 3,
                            color: '#fff',
                            shadowColor: '#fff', // 默认透明
                            shadowBlur: 10
                        }
                    },
                    pointer: {
                        width: 5,
                        shadowColor: '#fff', // 默认透明
                        shadowBlur: 5
                    },
                    title: {
                        offsetCenter: [0, '-30%'],       // x, y，单位px
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontStyle: 'italic',
                            color: '#fff',
                            shadowColor: '#fff', // 默认透明
                            shadowBlur: 10
                        }
                    },
                    detail: {
                        // backgroundColor: 'rgba(30,144,255,0.8)',
                        // borderWidth: 1,
                        borderColor: '#fff',
                        shadowColor: '#fff', // 默认透明
                        shadowBlur: 5,
                        width: 80,
                        height: 30,
                        offsetCenter: [25, '20%'],       // x, y，单位px
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            color: '#fff'
                        }
                    },
                    data: data.rpm
                },
                {
                    name: '油表',
                    type: 'gauge',
                    center: ['75%', '50%'],    // 默认全局居中
                    radius: '30%',
                    min:0,
                    max:2,
                    startAngle: 135,
                    endAngle: 45,
                    splitNumber: 2,
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],
                            width: 2,
                            shadowColor: '#fff', // 默认透明
                            shadowBlur: 10
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length: 12,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisLabel: {
                        textStyle: {       // 属性lineStyle控制线条样式
                            fontWeight: 'bolder',
                            color: '#fff',
                            shadowColor: '#fff', // 默认透明
                            shadowBlur: 10
                        },
                        formatter:function(v){
                            switch (v + '') {
                                case '0': return 'E';
                                case '1': return 'o';
                                case '2': return 'F';
                            }
                        }
                    },
                    splitLine: {           // 分隔线
                        length: 15,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width: 3,
                            color: '#fff',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    pointer: {
                        width: 2,
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 5
                    },
                    title: {
                        show: false
                    },
                    detail: {
                        show: false
                    },
                    data: data.gas
                },
                {
                    name: '水表',
                    type: 'gauge',
                    center: ['75%', '50%'],    // 默认全局居中
                    radius: '30%',
                    min: 0,
                    max: 2,
                    startAngle: 315,
                    endAngle: 225,
                    splitNumber: 2,
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],
                            width: 2,
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        show: false
                    },
                    axisLabel: {
                        textStyle: {       // 属性lineStyle控制线条样式
                            fontWeight: 'bolder',
                            color: '#fff',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        },
                        formatter:function(v){
                            switch (v + '') {
                                case '0': return 'H';
                                case '1': return 'Water';
                                case '2': return 'C';
                            }
                        }
                    },
                    splitLine: {           // 分隔线
                        length: 15,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width: 3,
                            color: '#fff',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    pointer: {
                        width: 2,
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 5
                    },
                    title: {
                        show: false
                    },
                    detail: {
                        show: false
                    },
                    data: data.water
                }
            ]
        }
        // 模拟数据动态变化
        setInterval(function (){
            // option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0
            // option.series[1].data[0].value = (Math.random()*7).toFixed(2) - 0
            // option.series[2].data[0].value = (Math.random()*2).toFixed(2) - 0
            // option.series[3].data[0].value = (Math.random()*2).toFixed(2) - 0
            data.speed[0].value = (Math.random()*100).toFixed(2) - 0
            data.rpm[0].value = (Math.random()*7).toFixed(2) - 0
            data.gas[0].value = (Math.random()*2).toFixed(2) - 0
            data.water[0].value = (Math.random()*2).toFixed(2) - 0
            chart.setOption(option)
        }, 3000)
        
        let chart = echarts.init(document.getElementById('chart-dash'))
        chart.setOption(option)
        $(window).resize(function() {
            chart.resize()
        })
    }
}())

