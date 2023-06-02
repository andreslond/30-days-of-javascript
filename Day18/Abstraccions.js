//An abstraccion allow us to define a clear interface to interact with an object or class.
class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }

  show() {
    console.log(`Nombre: ${this.name}`);
    console.log(`Precio: ${this.price}`);
    console.log(`Descripción: ${this.description}`);
  }
}

//Use product as main class

//Book inherit properties and methods from Product class.
class Book extends Product {
  constructor(name, price, description, author, editorial) {
    // Recuerda que con Super le pasamos los atributos a la clase
    // de la cual se hereda
    super(name, price, description);
    // define nuevas propiedades como autor y editorial
    this.author = author;
    this.editorial = editorial;
  }

  show() {
    super.show();
    // redefine el método mostrar() para mostrar esta información adicional.
    console.log(`Autor: ${this.author}`);
    console.log(`Editorial: ${this.editorial}`);
  }
}


const product1 = new Product('Product1', 100, 'Product desc');
product1.show()
const book1 = new Book('Book1', 100, 'Description', 'Author', 'Editorial');
book1.show();