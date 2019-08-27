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
    // 图表配置
    chart_init()
    function chart_init() {
        option = {
            color: [pcolor, acolor_p],
            legend: {
                show: true,
                icon: 'circle', // 图例形状
                bottom: "7%",
                center: 0,
                itemWidth: 14, // 图例标记的图形宽度。[default: 25]
                itemHeight: 14, // 图例标记的图形高度。[default: 14]
                itemGap: 21, // 图例每项之间的间隔。[default: 10]横向布局时为水平间隔，纵向布局时为纵向间隔。
                textStyle: {
                    color: '#A3E2F4',
                    fontSize: 12,
                    fontWeight: 0
                },
                data: ['产品满意度(分)', '产品关注度(%)']
            },
            tooltip: {
                show: true,
                trigger: "item"
            },
            radar: [{
                shape: 'circle',
                indicator: [
                    {text: '安全性', max: 120},
                    {text: '驾驶性', max: 120},
                    {text: '舒适性', max: 120},
                    {text: '经济性', max: 120},
                    {text: '造型及品质', max: 120},
                    {text: '故障率', max: 120}
                ],
                // center: ['50%', '50%'],
                radius: '60%',
                startAngle: 90,
                splitNumber: 9,
                orient: 'horizontal', // 图例列表的布局朝向,默认'horizontal'为横向,'vertical'为纵向.
                name: {
                    formatter: '{value}',
                    textStyle: {
                        fontSize: 14, // 外圈标签字体大小
                        color: '#A3E2F4' // 外圈标签字体颜色
                    }
                },
                splitArea: { // 坐标轴在grid区域中的分隔区域，默认不显示。
                    show: true,
                    areaStyle: { // 分隔区域的样式设置。
                        // color: ['#141c42', '#333333'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
                        color: ['rgba(190, 99, 255, 0.34)', 'rgba(190, 99, 255, 0.26)']
                    },
                },
                axisLine: { // 指向外圈文本的分隔线样式
                    show: false,
                    lineStyle: {
                        color: '#153269'
                    }
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: pcolor400, // 分隔线颜色
                        width: 1, // 分隔线线宽
                    }
                }
            },{
                zlevel: 1,
                shape: 'circle',
                indicator: [
                    {text: '安全性', max: 25},
                    {text: '驾驶性', max: 25},
                    {text: '舒适性', max: 25},
                    {text: '经济性', max: 25},
                    {text: '造型及品质', max: 25},
                    {text: '故障率', max: 25}
                ],
                name: {
                    formatter: '{value}',
                    textStyle: {
                        fontSize: 14, // 外圈标签字体大小
                        color: '#A3E2F4' // 外圈标签字体颜色
                    }
                },
                radius: '60%',
                splitNumber: 1,
                splitArea: { // 坐标轴在grid区域中的分隔区域，默认不显示。
                    show: false
                },
                axisLine: { // 指向外圈文本的分隔线样式
                    show: false,
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        // color: 'rgba(64, 151, 229, 0.6)', // 分隔线颜色
                        color: pcolor,
                        width: 2, // 分隔线线宽
                    }
                }
            }],
            series: [{
                name: '雷达图',
                type: 'radar',
                itemStyle: {
                    emphasis: {
                        lineStyle: {
                            width: 4
                        }
                    }
                },
                symbolSize: 0, // 单个数据标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如[20, 10] 表示标记宽为20，高为10。
                // label: { // 单个拐点文本的样式设置                            
                //     normal: {  
                //         show: true,             // 单个拐点文本的样式设置。[ default: false ]
                //         position: 'top',        // 标签的位置。[ default: top ]
                //         distance: 2,            // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。[ default: 5 ]
                //         color: '#6692e2',       // 文字的颜色。如果设置为 'auto'，则为视觉映射得到的颜色，如系列色。[ default: "#fff" ]
                //         fontSize: 14,           // 文字的字体大小
                //         formatter:function(params) {  
                //             return params.value;  
                //         }  
                //     }  
                // },
                data: [{
                    name: '产品满意度(分)',
                    value: [77.49, 80.69, 75.82, 70.34, 77.46, 97.99],
                    lineStyle: {
                        color: 'transparent'
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                                    offset: 1,
                                    color: pcolor50
                                },
                                {
                                    offset: 0,
                                    color: pcolor500
                                }
                            ], false)
                        }
                    },
                    symbolSize: 8
                }]
            }, {
                name: '雷达图',
                type: 'radar',
                itemStyle: {
                    emphasis: {
                        lineStyle: {
                            width: 4
                        }
                    }
                },
                radarIndex: 1,
                symbolSize: 0, // 单个数据标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如[20, 10] 表示标记宽为20，高为10。
                data: [{
                    name: '产品关注度(%)',
                    value: [22, 20, 18, 16, 14, 10],
                    lineStyle: {
                        normal: {
                            type: 'dashed',
                            color: acolor_p400
                        }
                    }
                }]
            }]
        }
        let chart = echarts.init(document.getElementById('chart-radar'))
        chart.setOption(option)
        $(window).resize(function() {
            chart.resize()
        })
    }
}())

