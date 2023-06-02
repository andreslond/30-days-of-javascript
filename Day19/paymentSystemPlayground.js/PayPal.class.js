import { Pay } from "./Pay.class.js";

export class PayPal extends Pay {

  constructor(email) {
    super();
    this.email = email;

  }

  makePay(amount) {
    return {
      ...super.makePay(amount),
      platform: 'PayPal',
      email: this.email
    }
  }
}
