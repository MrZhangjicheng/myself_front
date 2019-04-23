function all_disk(disk){
	var disk_data = disk["data"]
	var disk = "";
	for (var num=0;num <disk_data.length;num++) { 
        disk += "<tr><td>" + disk_data[num]['device'] + "</td>";
        disk += "<td>" + disk_data[num]['mountpoint'] + "</td>";
        disk += "<td>" + disk_data[num]['fstype'] + "</td>";
        disk += "<td>" + disk_data[num]['opts'] + "</td>";
        disk += "<td class='text-danger'>" + disk_data[num]['used']['total'] + "GB</td>";
        disk += "<td class='text-danger'>" + disk_data[num]['used']['used'] + "GB</td>";
        disk += "<td class='text-danger'>" + disk_data[num]['used']['free'] + "GB</td>";
        disk += "<td><div class='progress'><div class='progress-bar progress-bar-striped progress-bar-animated" + progress_status(disk_data[num]['used']['percent']) + "' role='progressbar' aria-valuenow='" + disk_data[num]['used']['percent'] + "' aria-valuemin='0' aria-valuemax='100' style='width: " + disk_data[num]['used']['percent'] + "%'>" + disk_data[num]['used']['percent'] + "%</div></div></td></tr>";
    }
    
     
     

 	document.getElementById("tb_disk").innerHTML = disk;
}





var tmp = function () {
$.ajax({
	url:"http://localhost:8000/index/disk",
	type:"get",
	dataType:"json",
	success:function (data) {
		all_disk(data)
		
		}
})
}

window.setInterval(tmp,1000)