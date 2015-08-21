"use strict";

var set = new Set();

set.add("Pesho");
set.add("Gosho");
set.add("Kiro");
set.add("Milolup");

console.log("Size: ", set.size);

for(var item of set) {
	console.log(item);
}