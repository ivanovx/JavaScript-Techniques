function buildPerson(fname, lname) {
	return {
		fname: fname,
		lname: lname,
		toString: function getFullName() {
			return this.fname + " " + this.lname;
		}
	};
}

var ivanov = buildPerson('Ivan', 'Ivanov');
var gosho = buildPerson('Gosho', 'Georgiev');

console.log(ivanov);
console.log(gosho);
