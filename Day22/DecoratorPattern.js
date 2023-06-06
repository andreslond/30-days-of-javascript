/*
Decorator pattern
It allows us to add dinamically responsabilities to an object in execution time.
This pattern allows that the feature be added or modified without change the base code.

We achieve this creating objects that wraps the original object and adds new features.

Decoracor pattern can be used throught decoractor classes.
These decorator classes needs to  have an similar structure and needs to call the original function.
*/

// Clase base
class Bebida {
	precio() {
		return 0;
	}
}

// Clase Decoradora
class AgregadoLeche extends Bebida {
	constructor(bebida) {
		super();
		this.bebida = bebida;
	}

	precio() {
		return this.bebida.precio() + 0.5;
	}
}
//Decorator to update the price of a drink when there is added an specific addition.
// Clase Decoradora
class AgregadoChocolate extends Bebida {
	constructor(bebida) {
		super();
		this.bebida = bebida;
	}

	precio() {
		return this.bebida.precio() + 1;
	}
}

// Uso
const bebida = new Bebida();
console.log(bebida.precio()); // 0

const bebidaConLeche = new AgregadoLeche(bebida);
console.log(bebidaConLeche.precio()); // 0.5

const bebidaConLecheYChocolate = new AgregadoChocolate(bebidaConLeche);
console.log(bebidaConLecheYChocolate.precio()); // 1.5


