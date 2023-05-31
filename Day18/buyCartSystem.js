class Product {
  // No debes editar este archivo ❌
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  addToCart() {
    throw new Error('La lógica de este método debe ser implementada por las clases hijas');
  }
}

class Article extends Product {
  addToCart() {
    console.log('AddToCard Article');
    return `Agregando ${this.quantity} unidades del artículo ${this.name} al carrito`;
  }
}

export class Service extends Product {
  addToCart() {
    console.log('AddToCard Service');
    return `Agregando el servicio ${this.name} al carrito`;
  }
}

export class Cart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    console.log('AddProduct');
    console.log(product);
    console.log(this.products);
    this.products.push(product);
    return product.addToCart();
  }

  deleteProduct(product) {
    console.log('deleteProduct');
    console.log('product ' + product.name);
    let itemIdx = this.products.findIndex((item) => {
      return item.name === product.name;
    });
    console.log('idx: ' + itemIdx);
    if (itemIdx > -1) {
      return this.products.splice(itemIdx, 1);
    }
  }

  calculateTotal() {
    console.log('calculateTotal');
    return this.products.reduce((acum, product) => acum + product.price * product.quantity, 0);
  }

  getProducts() {
    console.log('getProducts');
    return this.products;
  }
}

//--------------

const book = new Article('Libro', 100, 2);
const course = new Service('Curso', 120, 1);

const cart = new Cart();
cart.getProducts();
console.log(cart.addProduct(book));
console.log(cart.addProduct(course));
console.log(cart.getProducts());
console.log();
console.log();
console.log();
console.log(cart.deleteProduct(book));
console.log(cart.getProducts());
console.log(cart.calculateTotal());
