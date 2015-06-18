Array.prototype.sum = function () {
	var sum = 0;

	for (var i = 0; i < this.length; i++) {
		sum += this[i];
	};

	return sum;
}

console.log([1, 3, 12, 33, 2].sum());