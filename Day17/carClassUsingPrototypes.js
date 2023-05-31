class Car {
  constructor(brand, model, year, mileage, state) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
    this.state = state;
  }

  turnOn() {
    console.log(this);
    this.state = true;
    return this.state;
  }

  turnOff() {
    console.log(this);
    this.state = false;
    return this.state;
  }

  drive(kilometers) {
    console.log(this);
    if (this.state) {
      this.mileage += kilometers;
      return;
    }
    throw new Error('El auto está apagado');
  }
}

const toyota = new Car('Toyota', 'Corolla', 2020, 0);
toyota.turnOn();
toyota.drive(100);
toyota.mileage;
console.log(toyota);
