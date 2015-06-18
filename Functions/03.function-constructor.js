var maxParams = "items";
var maxBody =
	"var maxItem = items[0];" +
	"for (var i = 1; i < items.length; i++) {" +
	"	if (maxItem < items[i]) {" +
	"		maxItem = items[i];" +
	"	}" +
	"}" +
	"return maxItem;";
var max = new Function(maxParams, maxBody);
console.log(max([1, 2, 3, 4]));