//mutable functions
//These function can modify object status.
//The inmutable function commonly return a new altered object.

//There are some function to modify an array:
//Array.prototype.push(), Array.prototype.pop(), Array.prototype.shift(), Array.prototype.unshift(), Array.prototype.splice() y Object.assign().

const numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers);
// Output: [1, 2, 3, 4, 5]

//___________________

const person = {
	name: 'John Doe',
	age: 30
};

function addProperty(object, key, value) {
	object[key] = value;
}

addProperty(person, 'address', '123 Main St');

console.log(person);

// Output: { name: 'John Doe', age: 30, address: '123 Main St' }