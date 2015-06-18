var array = [1, 2, 3, 4, 5];
var length = array.length;
var reversed = new Array(length);

for (var i = 0; i < length; i++) {
	reversed[length - i - 1] = array[i];
}

console.log("Array = [" + array.join(", ") + "]");
console.log("reversed = [" + reversed.join(", ") + "]");