/*
Adapter Pattern

This pattern allows two objects with incompatible interfaces can work together.
It allows us to resuse classes and code even when the interfaces doesn't match the needs.

In Javascript this pattern could be implemented creating an object as intermediate between 
an existing class and our code.

Example:
Auto class with a method turnOn that needs a parameter key.
However, we need to execute this method without a parameter, we don't have a key.
In this case an adapter could call the method turnOn with an default key as parameter.
*/

class Auto {
	encender(llave) {
		console.log('El auto ha sido encendido con la llave:', llave);
	}
}

class AutoAdapter {
	constructor(auto) {
		this.auto = auto;
	}

	encender() {
		this.auto.encender('predeterminada');
	}
}

const miAuto = new Auto();
const adapter = new AutoAdapter(miAuto);

adapter.encender(); // El auto ha sido encendido con la llave: predeterminada



/*
Other example could be use an adapter when we need to integrate differents 
libraries or components en out application.
Example:
There is a component that use a different date format than the used in our application.
We can transform that date using an adapter.

*/
class FechaAdaptador {
	constructor(fecha) {
		this.fecha = fecha;
	}
	obtenerFechaFormateada() {
		return this.fecha.toLocaleDateString();
	}
}

const fecha = new Date();
const fechaAdaptada = new FechaAdaptador(fecha);
console.log(fechaAdaptada.obtenerFechaFormateada()); 
// Formatea la fecha al formato deseado