var person = {
	firstname: "Ivan",
	lastname: "Ivanov",
	toString: function () {
		return this.firstname + " " + this.lastname;
	}
}

function renamePerson(personObj, fname, lname) {
	personObj.firstname = fname || personObj.firstname;
	personObj.lastname = lname || personObj.lastname;
}

console.log(person);		
renamePerson(person, "Stamat");
console.log(person);