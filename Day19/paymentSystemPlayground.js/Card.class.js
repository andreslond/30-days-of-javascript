import { Pay } from "./Pay.class.js";

export class Card extends Pay {

  constructor(cardNum) {
    super();
    this.cardNum = cardNum;
  }

  makePay() {
    if (this.cardNum.length < 16) {
      throw new Error('Se require minimo 16 digítos');
    }
    return {
      lastCardNumbers: this.cardNum.substring(12)
    }
  }
}
