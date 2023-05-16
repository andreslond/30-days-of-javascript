//Javascript is a object oriented programming lenguage based on
//prototypes.
//Objects has a relation between them based on prototypes.

//Javscript class before ES6, using prototypes
function Animal(especie) {
  // Función constructora
  this.especie = especie;
}

Animal.prototype.respirar = function () {
  // En este scope no existe "especie"
  // Pero con "this" estamos accediendo directamente a "Animal"
  // Por lo que esto vendría siendo "Animal.especie"
  console.log(`La especie ${this.especie} está respirando...`);
};

const perroProto = new Animal('Canino');
perroProto.respirar(); // Output: "La especie Canino está respirando..."

//Javascript class using ES6 using class, this and extend syntax
class Animal {
  //main class
  constructor(especie) {
    this.especie = especie;
  }
  respirar() {
    console.log('Respirando...');
  }
}

class Perro extends Animal {
  //subclass
  ladrar() {
    console.log('Guau!');
  }
}

const perroClass = new Perro('Canino');
console.log(perroClass.especie); // Output: "Canino"
perroClass.respirar(); // Output: "Respirando..."
perroClass.ladrar(); // Output: "Guau!"




//Talking about inherintace
//This example use the new syntax to avoid use prototypes.
class Perro extends Animal {
  // Aquí no es necesario el agregar el constructor si no se esperan
  // nuevos parametros
  ladrar() {
    console.log('Guau!');
  }
}

// and finally Javascript interprets as follows
const animal = {
  respirar: function () {
    console.log('Respirando...');
  },
};

const perro = Object.create(animal);

perro.ladrar = function () {
  console.log('Guau!');
};

perro.respirar(); // Output: "Respirando..."
perro.ladrar(); // Output: "Guau!"
