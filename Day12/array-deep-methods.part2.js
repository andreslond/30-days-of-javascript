
//Array.prototype.Every
//Check if all elements match a condition.
const numbers = [1, 2, 3, 4, 5];
const allPositive = numbers.every(function(element) {
	return element > 0;
});

console.log(allPositive);

// Output: true

//Check a property
const objects = [{name: 'John'}, {name: 'Jane'}, {name: 'Jim'}];
const allHaveName = objects.every(function(element) {
  return element.hasOwnProperty('name');
});

console.log(allHaveName);
// Output: true

//Array.prototype.find
//Return the first element that match a defined condition.
//If there is not match, return an undefined value.

const people = [
    { name: 'John', age: 32 },
    { name: 'Jane', age: 28 },
    { name: 'Jim', age: 40 }
  ];
  const result = people.find(person => person.age === 32);
  
  console.log(result);
  // Output: { name: 'John', age: 32 }

//Array.prototype.findIndex
//Return the index of the first element that match a condition.
//If there is not match, retun an -1 value

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const index = numbers2.findIndex(num => num > 5);
console.log(index); // Output: 5

