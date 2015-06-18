var fname = "Pesho";
var lname = "Ivanov";
var person = {
    firstName: fname,
    lastName: lname,
    toString: function () {
        return this.firstName + " " + this.lastName
    }
};

console.log(person);

person.lastName = "Petrov";

console.log(person);