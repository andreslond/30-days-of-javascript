/*
Facade pattern
This pattern allow us to expose an simplified interface to use a complex system.
This pattern hide the complexity of a system.


*/

// Sistema subyacente
class SistemaComplejo {
  metodo1() {
    console.log('Imagina que aquí hay mucho código complejo');
  }

  metodo2() {
    console.log('Imagina que aquí hay mucho código complejo, pero en otro método');
  }
}

// Fachada
class FacadeSystem {
  constructor() {
    this.sistemaComplejo = new SistemaComplejo();
  }

  metodoFacil() {
    this.sistemaComplejo.metodo1();
    this.sistemaComplejo.metodo2();
  }
}

// Uso
const fachada = new FacadeSystem();
fachada.metodoFacil();
// Salida:
// Imagina que aquí hay mucho código complejo
// Imagina que aquí hay mucho código complejo, pero en otro método

