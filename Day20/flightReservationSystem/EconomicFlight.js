import { Flight } from "./Flight";
import { Reservation } from "./Reservation";

export class EconomicFlight extends Flight {
  constructor(origin, destination, date, capacity, price) {
    super(origin, destination, date, capacity, price);
  }
  
  sellTicket(passenger) {
    if (passenger.age < 18 || passenger.age > 65) {
      this.specialPrice = this.price * 0.8;
    }
    return super.sellTicket(passenger, this.specialPrice);
  }
}