//所有cpu的使用率
function all_cpu(cpu){
	var avg_per = cpu["data"]["percent_per"];
	
	var cpu_per = "";
	for (var num=0;num <avg_per.length;num++) {
        
        cpu_per += "<tr><td class='text-primary' style='width: 30%'>CPU" + num + "</td>";
        cpu_per += "<td><div class='progress'><div class='progress-bar progress-bar-striped progress-bar-animated" + progress_status(avg_per[num]) + "' role='progressbar' aria-valuenow='" + avg_per[num] + "' aria-valuemin='0' aria-valuemax='100' style='width: " +  avg_per[num] + "%'>" +  avg_per[num] + "%</div></div></td></tr>";
    }
        
    
     
      

 	document.getElementById("tb_cpu_per").innerHTML = cpu_per;
}



var chart = echarts.init(document.getElementById("cpu_avg"));
var cpu_avg = [];





	
	$.ajax({
	url:"http://localhost:8000/index/cpu",
	type:"get",
	dataType:"json",
	async:false,
	success:function (data) {
		cpu_avg.push(data["data"]["percent_avg"]/100);
		
		var option = {	
			series:[{
			type: 'liquidFill',
      	data:cpu_avg,     
			}]
		};
		chart.setOption(option);
		all_cpu(data);
		
		}
		});







