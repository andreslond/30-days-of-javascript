import { Reservation } from "./Reservation";

export class Flight {
  constructor(origin, destination, date, capacity, price) {
    this.origin = origin;
    this.destination = destination;
    this.date = date;
    this.capacity = capacity;
    this.price = price;
    this.passengers = [];
  }

  sellTicket(passenger, specialPrice) {
    console.log('sellTicket');
    console.log('passenger: ', passenger);

    if (this.capacity > 0) {
      this.passengers.push({
        fullName: `${passenger.name} ${passenger.lastName}`,
        age: passenger.age
      });

      this.capacity -= 1;

      const flightCopy = {
        origin: this.origin,
        destination: this.destination,
        date: this.date,
        price: specialPrice? specialPrice: this.price
      }

      passenger.flights.push(flightCopy);

      return new Reservation(flightCopy, passenger);
    }
  }
}