
import { Product } from "./product";

export class ShippingInsuranceDecorator extends Product {
  constructor(product) {
    super(product.getPrice());
    this.description = product.getDescription();
  }

  getPrice() {
    return super.getPrice() + 20;
  }

  getDescription() {
    return this.description + ' con seguro de envío'
  }
}