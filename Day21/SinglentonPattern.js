//Singlenton
//It helps us to be sure of an object will be an unique instance during the program execution.
//No matter how many times the class is called, it only creates a unique instance and
//the following calls will use the previous isntance.

const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object({ name: 'Singleton' });
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
//Same memory direction
console.log(instance1 === instance2); // True

//Other option could be use the methos freeze to avoid modification on the isntance object.
class Singleton2 {
  constructor() {
    if (!Singleton2.instance) {
      this.name = 'Singleton';
      Singleton2.instance = Object.freeze(this);
    }
    return Singleton2.instance;
  }
}

const instance3 = new Singleton2();
const instance4 = new Singleton2();
console.log(instance3 === instance4); // True

//This pattern help us to avoid creation of mutiple calsses for execute the same process
//like database connection.
//This helps us to avoid concurrency issues, loe performance and other kind of errors.

//Other use case could be an autentication system.
//Only one source of true will help us to avoid issues with autentication roles.

//Is important use it only in a match case to avoid the anty pattern.

/*
Pros and cons
Pros
It makes sure that inly a single instance of the class is created
We get a inslge access point to the instance that can be accessed globally

Cons
It is difficult to write unit test cases for singlenton classes. This is because the order of
execution can change the value present in the global state, so the orden of execution is important.

While writting unit tests, ther is a risk of another
componente or a module might be changing the global stata value/instance. Is such scenarios, 
it becomes diffucult to debug the error.
*/