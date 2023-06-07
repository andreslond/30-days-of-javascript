/*
Pattern prototype
It is used to create objects from a previus defined model or prototype.
It is usefull when we need to create a lot of similar objects.

*/

//Examples'

function Animal(name, species) {
	this.name = name;
	this.species = species;
}
//Add a new method to Animal prototype
Animal.prototype.makeSound = function () {
	console.log('El animal hace un sonido');
};
//Create new objects usgin Animal prototype
const dog = new Animal('Fido', 'Perro');
console.log(dog.name); // Fido
console.log(dog.species); // Perro
dog.makeSound(); // El animal hace un sonido

//Other example could be the creation process of objects using templates.
function Persona(nombre, edad, ocupacion) {
	this.nombre = nombre;
	this.edad = edad;
	this.ocupacion = ocupacion;
}

const templatePerson = new Persona('', 0, '');

const persona1 = Object.create(templatePerson);
persona1.nombre = 'Juan';
persona1.edad = 30;
persona1.ocupacion = 'Desarrollador';

const persona2 = Object.create(templatePerson);
persona2.nombre = 'María';
persona2.edad = 25;
persona2.ocupacion = 'Doctora';

console.log(persona1.nombre); // Juan
console.log(persona2.nombre); // María
