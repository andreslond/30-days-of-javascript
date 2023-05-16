function protectDog(dog) {

    let objectCopy = Object.assign({}, dog);
  
    Object.freeze(objectCopy);
  
    for (const key in objectCopy) {
      const internalObj = objectCopy[key];
      if(typeof internalObj === 'object') {
        Object.freeze(internalObj);
      }
    }
  
    console.log(objectCopy);
  
    return objectCopy;
  }
//Test 1
let proc = protectDog({
  name: 'Romeo',
  age: 3,
  owner: { name: 'Victor', phoneNumber: '555-555-5555' },
  favoriteFood: ['pollito', 'croquetas'],
  activities: ['jugar', 'caminar'],
});

console.log(proc.name);
proc.name = 'Toro';
console.log(proc.name);
console.log('----------');
//Test 2
let proc2 = protectDog({
  name: 'Romeo',
  age: 3,
  owner: { name: 'Victor', phoneNumber: '555-555-5555' },
  favoriteFood: ['pollito', 'croquetas'],
  activities: ['jugar', 'caminar'],
});

console.log(proc2.owner.name); // "Victor"
proc2.owner.name = 'Pedro';
console.log(proc2.owner.name); // "Victor"
