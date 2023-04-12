/*
It's a programming style centered in the use of functions and avoid the use of global status and secundary effects.
Pure functions: Functions without secundary effects and always return the same results with the same input.


First-class functions
Functions can be used as parameters, values and return of other functions.



*/

//Map is a pure functions becasue it takes an number arrya as input and return a new transformed array without modify the original one. 
const numbers = [1, 2, 3, 4, 5];
const doubles = numbers.map(function(number) {
  return numbers * 2;
});
console.log(numbers); // [1, 2, 3, 4, 5]
console.log(doubles); // [2, 4, 6, 8, 10]