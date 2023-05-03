
let array1 = new Array();
let array = new Array(1, 2, 3, 4);
console.log(array);

//convert word letters in array values.
let myArray = Array.from('hello');
console.log(myArray);

//Fill n lenght position array with the same value.
let array2 = Array(5).fill(0);
console.log(array2);

//is an array?
console.log(Array.isArray(array2)) //true

//Copy arrays. There are may way to do it but
//it only performs a shallow copy. 
//Complex objets won't be copied correctly.
const originalArray = [1, 2, 3];
const copiedArray = new Array(...originalArray);
console.log(originalArray === copiedArray); //false

//Slice
const copiedArray2 = originalArray.slice();
console.log(originalArray === copiedArray2); // Output: false

//Concat
const copiedArray3 = originalArray.concat();
console.log(originalArray === copiedArray3); // Output: false


//Spread operator
const copiedArray4 = [...originalArray];
console.log(originalArray === copiedArray4); // Output: false

//Mutidimensional arrays
const matrix = [];
matrix[0] = [1, 2, 3];
matrix[1] = [4, 5, 6];
matrix[2] = [7, 8, 9];

console.log(matrix);
// Output: [
//   [1, 2, 3], 
//   [4, 5, 6], 
//   [7, 8, 9]
// ]

//Deep copy. structuredClone.
//https://developer.mozilla.org/en-US/docs/Web/API/structuredClone

