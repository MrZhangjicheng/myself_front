function all_net(net){
	var net_data = net["data"]
	var net = "";
	for (var num=0;num <net_data.length;num++) { 
        net += "<tr><td>" + net_data[num]["name"] + "</td>";
        net += "<td class='text-danger'>" + net_data[num]["bytes_sent"]+ "</td>";
        net += "<td class='text-danger'>" + net_data[num]["bytes_recv"] + "</td>";
        net += "<td class='text-danger'>" + net_data[num]["packets_sent"] + "</td>";
        net += "<td class='text-danger'>" + net_data[num]["packets_recv"] + "</td>";
        net += "<td>" + net_data[num]["family"] + "</td>";
        net += "<td>" + net_data[num]["address"] + "</td>";
        net += "<td>" + net_data[num]["netmask"] + "</td>";
        if (net_data[num]['broadcast']) {
            net += "<td>" + net_data[num]['broadcast'] + "</td></tr>";
        } else {
            net += "<td>无</td></tr>";
        }
    
     
    }     

 	document.getElementById("tb_net").innerHTML = net;
}



var enol_data_pkg ;
var enol_data_byt;
var enol_data_pkg_dict1;
var enol_data_byt_dict1;
var enol_data_pkg_dict2;
var enol_data_byt_dict2;


var lo_data_pkg ;
var lo_data_byt ;
var lo_data_pkg_dict1;
var lo_data_byt_dict1;
var lo_data_pkg_dict2;
var lo_data_byt_dict2;



var tmp = function () {
$.ajax({
	url:"http://localhost:8000/index/net",
	type:"get",
	dataType:"json",
	async:false,
	success:function (data) {
		all_net(data)
		
		enol_data_pkg_dict1 = {"name":"发包数","value":data["data"][1]["packets_sent"]};
		enol_data_pkg_dict2 = {"name":"收包数","value":data["data"][1]["packets_recv"]};
		enol_data_pkg=[enol_data_pkg_dict1,enol_data_pkg_dict2];
		enol_data_byt_dict1={"name":"发字节","value":data["data"][1]["bytes_sent"]};
		enol_data_byt_dict2={"name":"收字节","value":data["data"][1]["bytes_recv"]};
		enol_data_byt=[enol_data_byt_dict1,enol_data_byt_dict2];
		
		
		lo_data_pkg_dict1 = {"name":"发包数","value":data["data"][0]["packets_sent"]};
		lo_data_pkg_dict2 = {"name":"收包数","value":data["data"][0]["packets_recv"]};
		lo_data_pkg=[lo_data_pkg_dict1,lo_data_pkg_dict2];
		lo_data_byt_dict1={"name":"发字节","value":data["data"][0]["bytes_sent"]};
		lo_data_byt_dict2={"name":"收字节","value":data["data"][0]["bytes_recv"]};
		lo_data_byt=[lo_data_byt_dict1,lo_data_byt_dict2];
		
		net1();
		net2();
		
		
		
		
		}
})
}

window.setInterval(tmp,1000);
var net1 = function () {
var myChart_net1 = echarts.init(document.getElementById('net1'), 'light', {renderer: 'canvas'});
var option_net1 = {
    title: [
        {
            text: "2019-04-22 12:07:49-eth0\u7f51\u5361\u4fe1\u606f",
            left: "center",
            top: "auto",
            textStyle: {
                color: "white",
                fontSize: 14
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
    series_id: 3666548,
  
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
            type: "pie",
            name: "发包数",
            
            radius: [
                "30%",
                "75%"
            ],
            center: [
                "25%",
                "50%"
            ],
            roseType: "area",
            label: {
                normal: {
                    show: true,
                    position: "outside",
                    textStyle: {
                        fontSize: 12
                    },
                    formatter: "{b}: {d}%"
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: 12
                    },
                    formatter: "{b}: {d}%"
                }
            },
            seriesId: 3666548,
            data:enol_data_pkg,
        },
        {
            type: "pie",
            name: "\u6536\u53d1\u5b57\u8282\u7edf\u8ba1",
            data: enol_data_byt,
            radius: [
                "30%",
                "75%"
            ],
            center: [
                "75%",
                "50%"
            ],
            roseType: "area",
            label: {
                normal: {
                    show: true,
                    position: "outside",
                    textStyle: {
                        "fontSize": 12
                    },
                    formatter: "{b}: {d}%"
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: 12
                    },
                    formatter: "{b}: {d}%"
                }
            },
            seriesId: 3260290
        }
       
    ],
    legend: [
        {
            data: [
                "\u6536\u5305\u6570",
                "\u53d1\u5305\u6570",
                "\u6536\u5b57\u8282",
                "\u53d1\u5b57\u8282"
            ],
            selectedMode: "multiple",
            show: false,
            left: "center",
            top: "top",
            orient: "horizontal",
            textStyle: {
                fontSize: 12
            }
        }
    ],
    animation: true,
    color: [
        "#749f83",
        "#546570",
        "#905a3d",
        "#726930",
        "#444693",
        "#2a5caa",
        "#b2d235",
        "#bda29a",
        "#c23531",
        "#ef5b9c",
        "#61a0a8",
        "#f47920",
        "#c4ccd3",
        "#ac6767",
        "#ca8622",
        "#1d953f",
        "#918597",
        "#f6f5ec",
        "#6e7074",
        "#6950a1",
        "#6d8346",
        "#2f4554",
        "#fab27b",
        "#d48265",
        "#f05b72"
    ]
};
	myChart_net1.setOption(option_net1);

}

var net2 = function () {
var myChart_net2 = echarts.init(document.getElementById('net2'), 'light', {renderer: 'canvas'});

var option_net2 = {
    title: [
        {
            text: "2019-04-22 14:51:49-lo\u7f51\u5361\u4fe1\u606f",
            left: "center",
            top: "auto",
            textStyle: {
                color: "white",
                fontSize: 14
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
    series_id: 2881948,
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
            type: "pie",
            name: "lo",
            data:lo_data_pkg,
            radius: [
                "30%",
                "75%"
            ],
            center: [
                "25%",
                "50%"
            ],
            roseType: "area",
            label: {
                normal: {
                    show: true,
                    position: "outside",
                    textStyle: {
                        fontSize: 12
                    },
                    formatter: "{b}: {d}%"
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: 12
                    },
                    formatter: "{b}: {d}%"
                }
            },
            seriesId: 2881948
        },
        {
            type: "pie",
            name: "\u6536\u53d1\u5b57\u8282\u7edf\u8ba1",
            data:lo_data_byt,
            radius: [
                "30%",
                "75%"
            ],
            center: [
                "75%",
                "50%"
            ],
            roseType: "area",
            label: {
                normal: {
                    show: true,
                    position: "outside",
                    textStyle: {
                        fontSize: 12
                    },
                    formatter: "{b}: {d}%"
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: 12
                    },
                    formatter: "{b}: {d}%"
                }
            },
            seriesId: 2881948
        }
    ],
  
    animation: true,
    color: [
        "#6d8346",
        "#546570",
        "#b2d235",
        "#6e7074",
        "#c4ccd3",
        "#749f83",
        "#f6f5ec",
        "#2a5caa",
        "#6950a1",
        "#918597",
        "#444693",
        "#ca8622",
        "#bda29a",
        "#c23531",
        "#d48265",
        "#ef5b9c",
        "#f05b72",
        "#2f4554",
        "#ac6767",
        "#f47920",
        "#fab27b",
        "#905a3d",
        "#61a0a8",
        "#1d953f",
        "#726930"
    ]
};
myChart_net2.setOption(option_net2);
}





