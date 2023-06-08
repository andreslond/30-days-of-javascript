/*
Proxy pattern
This pattern allows us to use a middleware to handle the access to other object.
The middleware is between the client and the real object.

This middlewares are really common in ExpressJs.
In ExpressJs (Framework of NodeJs) this middlewares are used to execute 
task before the request arrive to the final destination.

In Javascript the proxy pattern could be implemented using proxy functions.
These functions allows us to intercept and control the access to an object.
The proxy functions receive and object and a handler as arguments and acts
like an intermediary.

*/
console.log('Using proxy object');
// Objeto original
const objetoReal = {
  nombre: 'Objeto Real',
  descripcion: 'Este es el objeto real',
};

// Función proxy
const proxy = new Proxy(objetoReal, {
  get(target, prop) {
    console.log(`Accediendo a la propiedad "${prop}"`);
    return target[prop];
  },

  set(target, prop, value) {
    console.log(`Estableciendo valor ${value}" en la propiedad "${prop}"`);
    target[prop] = value;
    return true;
  },
});
// Uso

console.log(proxy.descripcion);
// Accediendo a la propiedad "description" / "Objeto Real"

proxy.descripcion = 'Nueva descripción';
// Estableciendo valor "Nueva descripción" en la propiedad "descripcion"

console.log(proxy.descripcion);
// Accediendo a la propiedad "descripcion" / "Nueva descripción"
console.log('--------------\n');
console.log('Using a proxy class object');
//Other way to implement this pattern is using classes.
//product example
class Product {
  constructor(name, price, available) {
    this.name = name;
    this.price = price;
    this.available = available;
  }
}

//Proxy ussing other class
class ProductProxy {
  constructor(product, user) {
    this.product = product;
    this.user = user;
  }

  getName() {
    return this.product.name;
  }

  getPrice() {
    return this.product.price;
  }

  isAvailable() {
    return this.product.available;
  }

  buy() {
    if (this.user.isRegistered) {
      this.product.buy();
    } else {
      console.log('Error: el usuario no está registrado');
      return '';
    }
  }
}

const user1 = { name: 'subject1', isRegistered: false };
const product1 = new Product('Product1', 100, true);
const proxiedProuct = new ProductProxy(product1, user1);

console.log(proxiedProuct.getName());
console.log(proxiedProuct.getPrice());

console.log(proxiedProuct.buy());
//In this case, the proxy logic will add a validation to avoid execute buy process if the user isn't registered

console.log('--------------\n');
console.log('Using proxy class to access easily to a complex object.');
//Other example of Proxy using a simplified version of a comploex object.
const complexObject = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: {
    nestedProp1: 'nestedValue1',
    nestedProp2: 'nestedValue2',
    nestedProp3: {
      deeplyNestedProp1: 'deeplyNestedValue1',
      deeplyNestedProp2: 'deeplyNestedValue2',
    },
  },
  prop4: 'value4',
  prop5: 'value5',
};

//Proxy objecto to access easily to internal properties
const simpleObjectProxy = new Proxy(complexObject, {
  get(target, prop) {
    if (prop in target) {
      return target[prop];
    }
    return null;
  },
});

console.log(simpleObjectProxy.prop1);
// "value1"
console.log(simpleObjectProxy.prop3.nestedProp3.deeplyNestedProp1);
// "deeplyNestedValue1"
// De esa manera nos saltamos el acceder a prop3
