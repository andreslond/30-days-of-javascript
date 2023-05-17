//A prototype is an object which other object inherit properties.

function Animal() {}
//It needs to start upper case.
Animal.prototype.isAlive = true;
//Added new prototype property

function Perro() {}
Perro.prototype = Object.create(Animal.prototype);

Perro.prototype.ladrar = function () {
  console.log('Guau!');
};

const meatballs = new Perro();
console.log(meatballs.isAlive);
meatballs.ladrar(); // Output: "Guau!"

//Add methods to existing structures like arrays
Array.prototype.suma = function () {
  console.log(this);
  return this.reduce((a, b) => a + b);
};
const numeros = [1, 2, 3, 4, 5];
console.log(numeros.suma()); // Output: 15
