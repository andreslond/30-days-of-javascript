import { Product } from "./product";

export class WarrantyDecorator extends Product {
  constructor(product) {
    super(product.getPrice());
    this.description = product.getDescription();
  }

  getPrice() {
    return this.price + 20;
  }

  getDescription() {
    return this.description + ' con garantía';
  }
}