function print(person) {
	console.log(person.name);
	
	for (var i in marks) {
		console.log( marks[i].subject + " : " + marks[i].score);
	}
	
	console.log("--------------------------");
}

var marks = [
	{ subject: "JavaScript", score: 5.50 },
	{ subject: "OOP", score: 5.00 },
	{ subject: "NodeJS", score: 6.00 },
	{ subject: "Photoshop", score: 4.00 }
];

var person = { 
	name: "Ivan Ivanov",
	marks: marks
};

print(person);

marks[2].score = 5.50;

print(person);