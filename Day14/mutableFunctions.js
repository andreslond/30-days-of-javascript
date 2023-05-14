//mutable functions
//These function can modify object status.
//The inmutable function commonly return a new altered object.

//There are some function to modify an array:
//Array.prototype.push(),
//Array.prototype.pop(),
//Array.prototype.shift(),
//Array.prototype.unshift(),
//Array.prototype.splice() y
//Object.assign().

const numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers);
// Output: [1, 2, 3, 4, 5]

//___________________

const person = {
  name: 'John Doe',
  age: 30,
};

function addProperty(object, key, value) {
  object[key] = value;
}

addProperty(person, 'address', '123 Main St');

console.log(person);

// Output: { name: 'John Doe', age: 30, address: '123 Main St' }

//Array.prototype.splice()
//It can delete more than one element of an array,
//Also return the list of deleted elements.

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers2.splice(0, 1));

//Array.prototype.pop()
//It deletes the last item of the array and return it.
//If the array is empty, it will return undefined
//The original array will be modified
console.log('pop: ' + numbers2.pop()); //10
console.log(numbers2);

//Array.prototype.shift()
//It deletes the first item of the array and return it.
//If the array is empty, it wiil return undefined
//The original array will be modified
console.log('shift: ' + numbers2.shift());
console.log(numbers2);

//Array.prototype.unshift()
//It inserts elements to the start of the array.
//It return the new length of the array.
console.log('unshift -> new length:' + numbers2.unshift(1, 2));
console.log(numbers2);

//Object.assign()
console.log('assign :' + Object.assign());
console.log(numbers2);
