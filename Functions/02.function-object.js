function numberToDigitNames(number) {
	var numberString = number.toString();
	var digitNames = [
		"zero", 
		"one",
		"two",
		"three",
		"four",
		"five",
		"six",
		"seven",
		"eight",
		"nine"
	];
	var numberWithDigitNames = [];

	for (var i = 0; i < numberString.length; i += 1) {
		numberWithDigitNames.push(digitNames[numberString[i]]);
	}

	return numberWithDigitNames.join("-");
}

var numbers = [
	1,
	12,
	123,
	1234,
	12345,
	123456,
	1234567,
	12345678,
	123456789,
	1234567890
];
var numbersWithDigitNames = numbers.map(numberToDigitNames);

console.log(numbersWithDigitNames.join("\n"));