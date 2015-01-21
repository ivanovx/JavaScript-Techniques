var numbers = [1, 2, 3, 4, 5];
console.log(numbers.join('|'));
		
var tail = numbers.pop();
console.log('Add 0 at the end (tail)');
console.log('Removed: ' + tail);
console.log(numbers.join('|'));
		
numbers.unshift(0);
console.log('Insert 0 at the start (head)');
console.log(numbers.join('|')); 
		
var head = numbers.shift();           	   
console.log('Removed: ' + head);
console.log(numbers.join('|')); 