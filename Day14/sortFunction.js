//Array.prototype.sort
//It helps us to sort array elements.
//This method change the original order of the array.
//This method sorts element lexicografic way. Number will be sorted like text string.

const numbers = [1, 5, 2, 12, 4, 3];
numbers.sort();
console.log(numbers);
// Output: [1, 12, 2, 3, 4, 5]

//It is possible to provide a function to define the order of the elements.
// orderFunction(A, B)
//If the function return a number lower than 0, A will be before than B.
//If the function return a number greater than 0, B will be before than A.
//If the function return 0, A and B won't change its order.

const numbers2 = [1, 5, 2, 4, 3];
numbers2.sort((a, b) => b - a);
console.log(numbers2);
// Output: [5, 4, 3, 2, 1]

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort