function printStudent(student) {
	console.log(student.name);
	
	for (var i in marks) {
		console.log( marks[i].subject + ' : ' + marks[i].score);
	}
	
	console.log('--------------------------');
}

var marks = [
	{ subject: 'JavaScript', score: 5.50 },
	{ subject: 'OOP', score: 5.00 },
	{ subject: 'Slice and Dice', score: 6.00 },
	{ subject: 'Photoshop', score: 4.00 }
];

var student = { name: 'Ivan Ivanov', marks: marks };

printStudent(student);
marks[2].score = 5.50;
printStudent(student);