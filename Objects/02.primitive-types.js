var number = 5;
var numberObj = new Number(5);

console.log('(number == numberObj) = ' + (number == numberObj));
console.log('(number === numberObj) = ' + (number === numberObj));
console.log('typeof number = ' + typeof number);
console.log('typeof numberObj = ' + typeof numberObj);
console.log('(typeof number === typeof numberObj) = ' + (typeof number === typeof numberObj));
console.log("-------------------");

var fname = 'Pesho';
var lname = 'Ivanov';
var person = {
    firstName: fname,
    lastName: lname,
    toString: function personToString() {
        return this.firstName + " " + this.lastName
    }
};

console.log(person);

lname = 'Petrov';

console.log(person)