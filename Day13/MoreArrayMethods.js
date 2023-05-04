//Array.prototype.includes
//Return true if one of the array elements are equal to the argument element.
//first argument: Elemento to search
//second argument: index that will be used as start point of the search. Default: 0

const numbers = [1, 2, 3, 4, 5];
const result = numbers.includes(3);
console.log(result); // true

//Internally, includes use the strict comparation ===, with this comparation mode an object will return true when
//the object reference the same memory location.
//Do not use to search objets.

//Array.prototype.join()
//Return the sum of all array objets as string.
//As argument it receive an separator to put between every element.
//The default separator is the coma ,
const fruits = ['apple', 'banana', 'cherry'];
const fruitsString = fruits.join(', ');
console.log(fruitsString); // "apple, banana, cherry"

//Array.prototype.concat()
//Return a new array with the union of two arrays.
//Do not modofy the original array.

//Also it can concatenate other values as strings, numbers, objects.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const string = 'hello';
const number = 123;

const result2 = array1.concat(array2, string, number);

console.log(result2); // [1, 2, 3, 4, 5, 6, "hello", 123]

//Example to index object elements using reduce method
const devices = [
  { name: 'Smartphone', category: 'Electronics', price: 800 },
  { name: 'Laptop', category: 'Electronics', price: 1200 },
  { name: 'PS5', category: 'Electronics', price: 600 },
];

const indexed = devices.reduce((acc,  device) => ({
    ...acc,
    [device.name]: device,
}), {});

console.log(indexed)
