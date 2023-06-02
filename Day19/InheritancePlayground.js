export class Animal {
  constructor(name, age, specie) {
    this.name = name;
    this.age = age;
    this.specie = specie;
  }

  getInfo() {
    console.log('getInfo Animal');
    return { ...this };
  }
}

export class Mammal extends Animal {
  constructor(name, age, specie, hasFur) {
    super(name, age, specie);
    this.hasFur = hasFur;
  }
}

export class Dog extends Mammal {
  constructor(name, age, breed, hasFur) {
    super(name, age, 'dog', hasFur);
    this.breed = breed;
  }

  getInfo() {
    console.log('getInfo Dog');
    return { ...this };
  }

  bark() {
    console.log('bark');
    return 'woof!';
  }
}

const bird = new Animal('pepe', 1, 'bird');
bird.getInfo();
console.log("\n: ~ bird:", bird)

const hippo = new Mammal("bartolo", 3, "hippo", false)
hippo.getInfo()
console.log("\n: ~ hippo:", hippo)

const dog = new Dog("fido", 4, "pastor aleman", true);
console.log("\n: ~ dog.getInfo():", dog.getInfo())
dog.bark()
console.log("\n: ~ dog:", dog)
