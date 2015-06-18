function Animal() { }

Animal();

var cat = new Animal();
console.log(cat);

var fakeDog = Animal();
console.log(fakeDog); 

console.log(cat instanceof Animal);
console.log(fakeDog instanceof Animal);

function Person(name, age) {
	console.log("My name is " + name + " and I'm " + age + "-years");
}

var pesho = new Person("Pesho", 44);
var minka = new Person("Minka", 18);