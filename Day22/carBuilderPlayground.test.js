class CarBuilder {
    // Tu código aquí 👇
    constructor(year, model, brand, color, price, isAvailable) {
      this.year = year;
      this.model = model;
      this.brand = brand;
      this.color = color;
      this.price = price;
      this.isAvailable = isAvailable;
    }
  
    setYear(year) {
      this.year = year;
      return this;    
    }
  
    getYear() {
      return this.year;
    }
  
    setBrand(brand) {
      this.brand = brand;
      return this;
    }
  
    getBrand() {
      return this.brand;
    }
  
    setColor(color) {
      this.color = color;
      return this;
    }
  
    getColor() {
      return this.color;
    }
  
    setPrice(price) {
      this.price = price;
      return this;
    }
  
    getPrice() {
      return this.price;
    }
  
    setIsAvailable(isAvailable) {
      this.isAvailable = isAvailable;
      return this;
    }
  
    getIsAvailable() {
      return this.isAvailable;
    }
  
    setModel(model1) {
      this.model = model1;
      return this;
    }
  
    getModel() {
      return this.model;
    }
  
    build() {
      console.log(this);
      return {
        year: this.year,
        model: this.model,
        brand: this.brand,
        color: this.color,
        price: this.price,
        isAvailable: this.isAvailable
      }
    }
  }
  
  const car = new CarBuilder()
  .setYear(2021)
  .setModel("Model X")
  .setBrand("Tesla")
  .setColor("Red")
  .setPrice(50000)
  .setIsAvailable(false)
  .build()