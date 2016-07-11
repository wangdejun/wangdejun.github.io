
// 封装了一个时间转换器
function toDate(para){
	if(typeof(para)=="number" || typeof(para)=="string"){
		console.log("是字符串或数字");
		var dateNum = new Date(para);
		console.log(dateNum);
		return dateNum;
	}
	if(para instanceof Array){
		console.log("是一个数组，把数组转化为时间格式");
		var dateNum = new Date(0);
		dateNum.setYear(para[0]);
		dateNum.setMonth(para[1]-1);
		dateNum.setDate(para[2]);
		console.log(dateNum);
		return dateNum;
	}
	if(typeof(para)=="object"){
		console.log("是一个对象，把对象转化为日期格式");
		var dateNum = new Date(0);
		dateNum.setYear(para.y);
		dateNum.setMonth(para.m-1);
		dateNum.setDate(para.d);
		console.log(dateNum);
		return dateNum;

	}
}
// 测试
var date = 1234423452334;
var datearray = [2015,8,5];
var dateObject = {y:2016,m:8,d:5}
toDate(date);
toDate(datearray);
toDate(dateObject);