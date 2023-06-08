/* 
Observer Pattern
This pattern allows to an object to maintain a list of dependents and notify
them every change.
This pattern is usefull when various objects need to be notified 
when an object is changed. 

This pattern could be implemented with an object that handle a list
of dependents, a way of register them and notify the changes.

Every dependent object needs to have a function that will be executed 
every time there is change on the main object.


a 
change on the main object .

*/

// Clase Observador
class Observador {
  constructor(nombre) {
    this.nombre = nombre;
  }
  notificar(cambio) {
    console.log(`${this.nombre} ha sido notificado del cambio: ${cambio}`);
  }
}

// Clase Observable
class Observable {
  constructor() {
    this.observadores = [];
  }

  registrarObservador(observador) {
    this.observadores.push(observador);
  }
  notificarCambio(cambio) {
    this.observadores.forEach((observador) => {
      observador.notificar(cambio);
    });
  }
}
// Uso
const observable = new Observable();
const observador1 = new Observador('Observador 1');
const observador2 = new Observador('Observador 2');

observable.registrarObservador(observador1);
observable.registrarObservador(observador2);

observable.notificarCambio('Cambio en el objeto principal');
// Observador 1 ha sido notificado del cambio: Cambio en el objeto principal
// Observador 2 ha sido notificado del cambio: Cambio en el objeto principal
