//Polimorfismo
//Permite que una sola interfaz pueda ser implementada por mútiples clases.
//Esto permite que diferentes objetos respondan de diferentes maneras a la misma llamada.

//En Javascript esto se logra a travez de la herencia de clases y la sobreescritura de métodos.
//Una clase principal tiene un método hablar() y a su vez las subcalses Perro y Gato tambien tienen una 
//implementación especifica del método hablar()

// La clase Animal que define un método hablar():
class Animal {
    hablar() {
      console.log('Sonidos de animal');
    }
  }
  
  // Perro que hereda de la clase Animal y sobrescribe el método hablar() 
  // con una implementación específica
  class Perro extends Animal {
    hablar() {
      console.log('Guau guau!');
    }
  }
  
  // Gato que hereda de la clase Animal y sobrescribe el método hablar() 
  // con otra implementación:
  class Gato extends Animal {
    hablar() {
      console.log('Miau miau!');
    }
  }
  
  // Ahora podemos crear objetos de las tres clases 
  // y llamar al método hablar(), que proporcionará 
  // una salida diferente para cada uno de ellos:
  
  const animal = new Animal();
  const perro = new Perro();
  const gato = new Gato();
  
  animal.hablar(); // Sonidos de animal
  perro.hablar(); // Guau guau!
  gato.hablar(); // Miau miau!


//Permite escribir código mas modular y genérico.
//Aumenta la flexibilidad del sistema.
//Permite ocultar detalles de implementación detrás de una interfaz común.

//Otra forma de polimorfismo es cuando un mismo método puede recibir diferetnes tipos de datos
//diferentes argumentos y a partir de estos su funcionamiento interno será diferentes.
