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
var kenov = buildPerson('Ivaylo', 'Kenov');

console.log(ivanov);
console.log(kenov);