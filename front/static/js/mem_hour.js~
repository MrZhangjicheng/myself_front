var myChart_c9cc51a97d6e4316988361be18be471f = echarts.init(document.getElementById('mem_hour'), 'light', {renderer: 'canvas'});

var data_mem;
var data_time;
$.ajax({
	url:"http://localhost:8000/log/select",
	type:"get",
	dataType:"json",
	async:false,
	success:function (data) {
		data_mem = data["data"]["data_mem"];
		data_time = data["data"]["data_time"];
		
		}
})




var option_c9cc51a97d6e4316988361be18be471f = {
    title: [
        {
            text: "\u5185\u5b58\u4f7f\u7528\u7387\u65e5\u5fd7[1\u5c0f\u65f6\u5185]",
            left: "center",
            top: "auto",
            textStyle: {
                fontSize: 18
            },
            subtextStyle: {
                fontSize: 12
            }
        }
    ],
    toolbox: {
        show: true,
        orient: "vertical",
        left: "95%",
        top: "center",
        feature: {
            saveAsImage: {
                show: true,
                title: "save as image"
            },
            restore: {
                show: true,
                title: "restore"
            },
            dataView: {
                show: true,
                title: "data view"
            }
        }
    },
    series_id: 7391233,
    tooltip: {
        trigger: "item",
        triggerOn: "mousemove|click",
        axisPointer: {
            type: "line"
        },
        textStyle: {
            fontSize: 14
        },
        backgroundColor: "rgba(50,50,50,0.7)",
        borderColor: "#333",
        borderWidth: 0
    },
    series: [
        {
            type: "line",
            symbol: "none",
            symbolSize: 4,
            smooth: false,
            step: false,
            showSymbol: true,
            data: data_mem,
            label: {
                normal: {
                    show: false,
                    position: "top",
                    textStyle: {
                        fontSize: 12
                    }
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: 12
                    }
                }
            },
            lineStyle: {
                normal: {
                    width: 1,
                    opacity: 0.2,
                    curveness: 0,
                    type: "solid"
                }
            },
            areaStyle: {
                opacity: 0.4,
                colo: "red"
            },
            markPoint: {
                data: [
                    {
                        type: "average",
                        name: "mean-Value",
                        symbol: "pin",
                        symbolSize: 50,
                        label: {
                            normal: {
                                textStyle: {
                                    color: "#fff"
                                }
                            }
                        }
                    },
                    {
                        type: "max",
                        name: "Maximum",
                        symbol: "pin",
                        symbolSize: 50,
                        label: {
                            normal: {
                                textStyle: {
                                    color: "#fff"
                                }
                            }
                        }
                    },
                    {
                        type: "min",
                        name: "Minimum",
                        symbol: "pin",
                        symbolSize: 50,
                        label: {
                            normal: {
                                textStyle: {
                                    color: "#fff"
                                }
                            }
                        }
                    }
                ]
            },
            markLine: {
                data: [
                    {
                        type: "average",
                        name: "mean-Value"
                    },
                    {
                        type: "max",
                        name: "Maximum"
                    },
                    {
                        type: "min",
                        name: "Minimum"
                    }
                ],
                symbolSize: 10
            },
            seriesId: 7391233
        }
    ],
    "legend": [
        {
            "data": [
                ""
            ],
            "selectedMode": "multiple",
            "show": true,
            "left": "center",
            "top": "top",
            "orient": "horizontal",
            "textStyle": {
                "fontSize": 12
            }
        }
    ],
    "animation": true,
    "xAxis": [
        {
            "show": true,
            "nameLocation": "middle",
            "nameGap": 25,
            "nameTextStyle": {
                "fontSize": 14
            },
            "axisTick": {
                "alignWithLabel": false
            },
            "inverse": false,
            "boundaryGap": true,
            "type": "category",
            "splitLine": {
                "show": false
            },
            "axisLine": {
                "lineStyle": {
                    "width": 1
                }
            },
            "axisLabel": {
                "interval": "auto",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            },
            data: data_time,
					
        }
    ],
    yAxis: [
        {
            show: true,
            nameLocation: "middle",
            nameGap: 25,
            nameTextStyle: {
                fontSize: 14
            },
            axisTick: {
                alignWithLabel: false
            },
            inverse: false,
            boundaryGap: true,
            type: "value",
            splitLine: {
                show: true
            },
            axisLine: {
                lineStyle: {
                    width: 1
                }
            },
            axisLabel: {
                interval: "auto",
                formatter: "{value} ",
                rotate: 0,
                margin: 8,
                textStyle: {
                    fontSize: 12
                }
            }
        }
    ],
    color: [
        "#c23531",
        "#2f4554",
        "#61a0a8",
        "#d48265",
        "#749f83",
        "#ca8622",
        "#bda29a",
        "#6e7074",
        "#546570",
        "#c4ccd3",
        "#f05b72",
        "#ef5b9c",
        "#f47920",
        "#905a3d",
        "#fab27b",
        "#2a5caa",
        "#444693",
        "#726930",
        "#b2d235",
        "#6d8346",
        "#ac6767",
        "#1d953f",
        "#6950a1",
        "#918597",
        "#f6f5ec"
    ],
    dataZoom: [
        {
            show: true,
            type: "slider",
            start: 0,
            end: 100,
            orient: "horizontal"
        }
    ]
};
myChart_c9cc51a97d6e4316988361be18be471f.setOption(option_c9cc51a97d6e4316988361be18be471f);