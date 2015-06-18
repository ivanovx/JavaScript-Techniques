if (true) {
	function print(msg) {
		console.log("--from if");
		console.log(msg);
	}
} else {
	function print(msg) {
		console.log("--from else");
		console.log(msg);
	}
}

print("Ivan Ivanov");