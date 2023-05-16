//Object literals are a way to store and modify data in javascript.
//An object literal is a group of key value pairs inside curly braces {}

//Object.assign()
//It helps us to copy properties from an object ot other.
//This method receive a target where all properties will be assigned.
//The following arguments will be the sources of properties.
const objeto1 = { a: 1, b: 2 };
const objeto2 = { c: 3, d: 4 };

const nuevoObjeto = Object.assign({}, objeto1, objeto2);
console.log(nuevoObjeto); // Output: {a: 1, b: 2, c: 3, d: 4}

//Object.freeze()
//It helps us to avoid the modification of an object.
const objeto = { a: 1, b: 2 };
Object.freeze(objeto);
objeto.a = 3; //read-only property
console.log(objeto.a); // Output: 1

//Object.getOwnPropertyNames()
//It helps ud to get only the non-inherited properties of the object.
const objeto11 = { a: 1, b: 2 };
const object22 = Object.create(objeto11);
object22.c = 3;
console.log(Object.getOwnPropertyNames(object22)); // Output: ["c"]
console.log(object22);

//for-in
//iterate aling the properties of an object
const objetoForIn = { a: 1, b: 2, c: 3 };
for (let propiedad in objetoForIn) {
  console.log(propiedad); // Output: "a", "b", "c"
  console.log('->', objetoForIn[propiedad]);
}

//for-of on object keys.
//This method retuns an arrya with all keys of an object.
const objetoForOf = {a: 1, b: 2, c: 3};
const propiedades = Object.keys(objetoForOf);

for (let propiedad of propiedades) {
  console.log(propiedad); // Output: "a", "b", "c"
}

//Object values()
//This returns an array with all values of an object.
//Inherited and non-inherited ones.
const objOrigin = { a: 1, b: 2 };
const newObj = Object.create(objOrigin);
newObj.c = 3;
console.log(Object.values(newObj)); // Output: [3, 1, 2]
console.log(newObj);

//Object.entries()
//It retunds an array with key-value paris of all properties.
const obj1 = {a: 1, b: 2};
const obj2 = Object.create(obj1);
obj2.c = 3;
console.log(Object.entries(obj2)); // Output: [["c", 3], ["a", 1], ["b", 2]]

//hasOwnProperty()
//It returns true if the property was specified directly to the object 
//If the property was inherited, it returns false.
const objOri = {a: 1, b: 2};
const objNew = Object.create(objOri);
objNew.c = 3;
console.log(objNew.hasOwnProperty("c")); // Output: true
console.log(objNew.hasOwnProperty("a")); // Output: false

