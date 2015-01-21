function orderBy(a, b) {
	return a - b;
};

var numbers = [5, 4, 23, 2];

numbers.sort();
console.log(numbers.join(', '));

numbers.sort(orderBy);
console.log(numbers.join(', '));