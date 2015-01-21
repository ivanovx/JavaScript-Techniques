var numbers = [5, 4, 23, 2];
var reversed = numbers.reverse();

reversed.forEach(function (item) {
	console.log(item + ", ");
});

console.log('------------------------------');

var numbers2 = [1, 2, 3, 4, 5, 6];
var allNumbers = numbers.concat(numbers2);

allNumbers.forEach(function (item) {
	console.log(item + ", ");
});

console.log('------------------------------');
console.log('numbers: ' + numbers);

var deleted = numbers.splice(0, 2, 'one', 'two', 'three');


console.log('elements deleted: ' + deleted.join(', '));
console.log('numbers after: ' + numbers.join(', '));

var allNumbers = new Array();
for (var i = 0; i < 20; i++) {
	allNumbers.push(i);
}

var even = allNumbers.filter(function (item) {
	return item % 2 == 0;
});

console.log(even.join(', '));