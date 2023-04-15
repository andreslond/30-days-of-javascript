//ECMAScript 6 o ES6 new features
//Launched in June of 2015.

//Class syntax
class Persona {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, mi name is ${this.name} and I'm ${this.age} years.`);
  }
}

const persona = new Persona('Juan', 30);

persona.greet();

//Template literals
console.log(`Hi, mi name is ${this.name} and I'm ${this.age} years.`);

//Arrow functions
const numbers = [1, 2, 3, 4];
const double = numbers.map((n) => n * 2);
console.log(double);

//Spread operator:
//It helps us to copy elements of an array or join elements from different arrays in one.
//Also it helps us to send arguments dynamically to a function.
const numbers2 = [1, 2, 3];
const newNumbers = [...numbers2, 4, 5, 6]; // [1, 2, 3, 4, 5, 6]

//Destructuring:
//It is new syntax to get array or object values to a variable.

const personObj = { name: 'Juan', age: 30 };
const { personName, personAge } = personObj;
console.log(personName);
console.log(personAge);

//Modules
//ES6 allows module import and function export between files easily and in a structured way.
import { miFuncion } from './miArchivo.js';

export const otraFuncion = () => {};

//New array methods
//It adds metods like find and findIndex.

//ES9 - Promise handler
//ES9 includes improvements in promise handling like the method "Promise.prototype.finally" to
//execute code regardless of the result of the promise.

const miPromise = new Promise((resolve, reject) => {
  //code
});
miPromise.finally(() => console.log('Promesa finalizada'));

//try catch
//Error handling with exception catching.

try {
  //code
} catch (error) {
  console.log(error);
}
