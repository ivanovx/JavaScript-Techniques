var array = [1, 2, 3, 4, 5];
var length = array.length;
var reversed = new Array(length);

for (var index = 0; index < length; index++) {
	reversed[length - index - 1] = array[index];
}

console.log('array = [' + array.join(', ') + ']');
console.log('reversed = [' + reversed.join(', ') + ']');