//1.定义长连接
var conn = null;

//进度条变化
function progress_status(val) {
    var data = "";
    if (val >= 0 && val < 25) {
        data = " bg-success";
    } else if (val >= 25 && val < 50) {
        data = "";
    } else if (val >= 50 && val < 75) {
        data = " bg-warning";
    } else if (val >= 75 && val <= 100) {
        data = " bg-success";
    }
    return data
}

//连接提示信息
function log(cls, msg) {
    document.getElementById("monitor_status").innerHTML = "<div class='alert alert-" + cls + "'>" + msg + "</div>";
}
//开机时间
function start_time (time_json) {
	var data = time_json["data"];
	time = "<div  class='alert alert-info'> 开机时间: "+data + "</div>";
	document.getElementById("time").innerHTML= time
	}
//用户信息
function user_info (user_info) {
	var data = user_info["data"][0]
	user_info =data['name'] + "<br>" + data['terminal'] + "<br>" + data['host'] + "<br>" + data['started']
       
	document.getElementById("user").innerHTML= user_info
	
}




$.ajax({
	url:"http://localhost:8000/time/logined_users",
	type:"get",
	dataType:"json",
	success:function (data) {
		user_info(data) 
		}
})
$.ajax({
	url:"http://localhost:8000/time/lastest_start_time",
	type:"get",
	dataType:"json",
	
	success:function (data) {
		start_time(data)
		}
})




