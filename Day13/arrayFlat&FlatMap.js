//Array.prototype.flat()
//It allows us to flatten an array whose elements have a certan depth 
//like multiDimensional arrays.

//To flatten more than 1 level of depth, we need to use the parameter 'Infinity'


const multiDimensionalArray = [[1, 2, 3], [4, [5, 6]], [7, [8, [9]]]];
const flatArray = multiDimensionalArray.flat(Infinity);
console.log(flatArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

const flatOneLevelArray = multiDimensionalArray.flat(1);
console.log(flatOneLevelArray); // [1, 2, 3, 4, [5, 6], 7, [8, [9]]]\


//Array.prototype.flatMap()
//It combine array.flat and array.map methods in one.
//It helps us to apply some funciton to each element and afert that elemnt will be flatten.
//It returns a new flatten and transformed array.
//It can not receibe deep as parameter.

const numbers = [1, 2, 3, 4];

const result = numbers.flatMap(x => [x, x * 2]);

console.log(result);
// Output: [1, 2, 2, 4, 3, 6, 4, 8]


const bidimensionalArray = [[1, 2, 3, [1, [2, 3]]], [4, 5, 6]];
const result2 = bidimensionalArray.flatMap(x => x);
console.log(result2);
// Output: [1, 2, 3, [1, [2, 3]], 4, 5, 6]