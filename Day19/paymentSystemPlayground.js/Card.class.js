import { Pay } from "./Pay.class.js";

export class Card extends Pay {

  constructor(cardNumber) {
    super();
    this.cardNumber = cardNumber;
  }

  makePay(amount) {
    if (this.cardNumber.length < 16) {
      throw new Error('Se require minimo 16 digítos');
    }
    return {
      ...super.makePay(amount),
      lastCardNumbers: this.cardNumber.substring(12)
    }
  }
}
