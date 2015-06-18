var arr = new Array(1, 2, 3, 4, 5);
console.log("Array = " + arr.join(", "));

var arr2 = new Array(10);								
console.log("Array 2 = " + arr2.join(", "));
console.log("arr2[2] = " + arr2[2]);
		
var weekDays = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday"
];
console.log("weekDays = " + weekDays.join(", "));

var mixedArr = [1, new Date(), "Ivan"];
console.log("mixedArr = " + mixedArr.join(", "));