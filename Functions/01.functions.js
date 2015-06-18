function sum(items) {
	var itemsSum = 0;

	for (var i = 0; i < items.length; i++) {
		itemsSum += items[i];
	}
	return itemsSum;
}

console.log(sum([1, 2, 3, 4, 5, 6]));