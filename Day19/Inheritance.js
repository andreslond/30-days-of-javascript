//Inheritance -- Main concept in OOP.
//Allow us to create new classes from exist ones, inherit all its properties and methods.
//It allow us to share common behaviors and reuse the existing code.

class Animal {
  constructor(especie) {
    this.especie = especie;
  }
  hacerSonido() {
    console.log('Este animal hace un sonido');
  }
}

class Perro extends Animal {
  constructor(especie, raza) {
    super(especie);
    this.raza = raza;
  }
  ladrar() {
    console.log('El perro está ladrando');
  }
}

const miPerro = new Perro('Canino', 'Labrador');
console.log(miPerro.especie); // Canino
miPerro.hacerSonido(); // Este animal hace un sonido
miPerro.ladrar(); // El perro está ladrando