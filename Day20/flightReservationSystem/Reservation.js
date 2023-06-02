export class Reservation {
    constructor(flight, passenger) {
      this.flight = flight;
      this.passenger = passenger;
    }
  
    reservationDetails() {
      return {
        origin: this.flight.origin,
        destination: this.flight.destination,
        date: this.flight.date,
        price: this.price,
        reservedBy: `${this.passenger.name} ${this.passenger.lastName}`
      }
    }
  } 