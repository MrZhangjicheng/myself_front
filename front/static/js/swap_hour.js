

var myChart_a18e8671eb6349c08bd665c9567fe366 = echarts.init(document.getElementById('swap_hour'), 'light', {renderer: 'canvas'});

var option_a18e8671eb6349c08bd665c9567fe366 = {
    "title": [
        {
            "text": "\u4ea4\u6362\u5206\u533a\u4f7f\u7528\u7387\u65e5\u5fd7[1\u5c0f\u65f6\u5185]",
            "left": "center",
            "top": "auto",
            "textStyle": {
                "fontSize": 18
            },
            "subtextStyle": {
                "fontSize": 12
            }
        }
    ],
    "toolbox": {
        "show": true,
        "orient": "vertical",
        "left": "95%",
        "top": "center",
        "feature": {
            "saveAsImage": {
                "show": true,
                "title": "save as image"
            },
            "restore": {
                "show": true,
                "title": "restore"
            },
            "dataView": {
                "show": true,
                "title": "data view"
            }
        }
    },
    "series_id": 8528056,
    "tooltip": {
        "trigger": "item",
        "triggerOn": "mousemove|click",
        "axisPointer": {
            "type": "line"
        },
        "textStyle": {
            "fontSize": 14
        },
        "backgroundColor": "rgba(50,50,50,0.7)",
        "borderColor": "#333",
        "borderWidth": 0
    },
    "series": [
        {
            "type": "line",
            "symbol": "none",
            "symbolSize": 4,
            "smooth": false,
            "step": false,
            "showSymbol": true,
            "data": [
                [
                    "09:16:44",
                    0.0
                ],
                [
                    "09:16:49",
                    0.0
                ],
                [
                    "09:16:54",
                    0.0
                ],
                [
                    "09:16:59",
                    0.0
                ],
                [
                    "09:17:04",
                    0.0
                ],
                [
                    "09:17:09",
                    0.0
                ],
                [
                    "09:17:15",
                    0.0
                ]
            ],
            "label": {
                "normal": {
                    "show": false,
                    "position": "top",
                    "textStyle": {
                        "fontSize": 12
                    }
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": 12
                    }
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1,
                    "opacity": 0.2,
                    "curveness": 0,
                    "type": "solid"
                }
            },
            "areaStyle": {
                "opacity": 0.4,
                "color": "blue"
            },
            "markPoint": {
                "data": [
                    {
                        "type": "average",
                        "name": "mean-Value",
                        "symbol": "pin",
                        "symbolSize": 50,
                        "label": {
                            "normal": {
                                "textStyle": {
                                    "color": "#fff"
                                }
                            }
                        }
                    },
                    {
                        "type": "max",
                        "name": "Maximum",
                        "symbol": "pin",
                        "symbolSize": 50,
                        "label": {
                            "normal": {
                                "textStyle": {
                                    "color": "#fff"
                                }
                            }
                        }
                    },
                    {
                        "type": "min",
                        "name": "Minimum",
                        "symbol": "pin",
                        "symbolSize": 50,
                        "label": {
                            "normal": {
                                "textStyle": {
                                    "color": "#fff"
                                }
                            }
                        }
                    }
                ]
            },
            "markLine": {
                "data": [
                    {
                        "type": "average",
                        "name": "mean-Value"
                    },
                    {
                        "type": "max",
                        "name": "Maximum"
                    },
                    {
                        "type": "min",
                        "name": "Minimum"
                    }
                ],
                "symbolSize": 10
            },
            "seriesId": 8528056
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
            "data": [
                "09:16:44",
                "09:16:49",
                "09:16:54",
                "09:16:59",
                "09:17:04",
                "09:17:09",
                "09:17:15"
            ]
        }
    ],
    "yAxis": [
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
            "type": "value",
            "splitLine": {
                "show": true
            },
            "axisLine": {
                "lineStyle": {
                    "width": 1
                }
            },
            "axisLabel": {
                "interval": "auto",
                "formatter": "{value} ",
                "rotate": 0,
                "margin": 8,
                "textStyle": {
                    "fontSize": 12
                }
            }
        }
    ],
    "color": [
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
    "dataZoom": [
        {
            "show": true,
            "type": "slider",
            "start": 0,
            "end": 100,
            "orient": "horizontal"
        }
    ]
};
myChart_a18e8671eb6349c08bd665c9567fe366.setOption(option_a18e8671eb6349c08bd665c9567fe366);

