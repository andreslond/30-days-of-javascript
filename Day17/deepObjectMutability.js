/* 
const user = {
  name: 'Joe',
  age: 25,
  pet: {
    type: 'dog',
    name: 'Buttercup',
  },
};

Object.freeze(user);

user.pet.name = 'Daffodil';
 */

/* 
1. Repaso de objetos
It is an Unordered collection of key/value pairs.
*/

let pokemon = {
  name: 'Pikachu',
  level: 2,
  metadata: {
    firstRelease: 1996,
  },
};

/* 
2. Property Descriptors 
They are the key properties of an object.
By default they are true except by 'value' porperty;

- value
  It helps us to assign and modify the value of a key.

- enumerable
  It enables us to iterate the key or not.
  If the key is false, the key won't be visible in a for-in loop

- writable
    Is the key writable? If not, the key will be a read only key.

- configurable
  If it is false, no one of the previous properties will be configurable.
  If it is setted to false, it can't be setted as true again.

3. How to read the property descriptors of a ky usring Object.getOwnPropertyDescriptor(obj, key);

4. How to define the descriptor properties of a key.
*/

const pokemonNamePropertyDescriptor = Object.getOwnPropertyDescriptor(pokemon, 'name');
console.log('pokemonNamePropertyDescriptor:', pokemonNamePropertyDescriptor);

//Modify property level to be enumerable false.
Object.defineProperty(pokemon, 'level', {
  enumerable: false,
});

const pokemonLevelPropertyDescriptor = Object.getOwnPropertyDescriptor(pokemon, 'level');
console.log('pokemonLevelPropertyDescriptor:', pokemonLevelPropertyDescriptor);

//For to iterate all enumerable properties.
// Level won't be listed.
for (const key in pokemon) {
  console.log('key:', key);
  const value = pokemon[key];
  console.log('value:', value);
}

//Here will be define level as read-only.
Object.defineProperty(pokemon, 'level', {
  enumerable: false,
  writable: false,
});

//The following line will throw an error by the configuration of the property.
//TypeError: Cannot assign to read only property 'level' of object '#<Object>'
/* pokemon.level = 5; */
console.log('pokemon.level:', pokemon.level);

//Here will be changes the property configurable of name property.
//This will block the object and its descriptor properties cannot be changed again.
Object.defineProperty(pokemon, 'name', {
  configurable: false,
});

//The following line will throw an error
//TypeError: Cannot redefine property: name
/* Object.defineProperty(pokemon, 'name', {
  configurable: true,
}); */

/* 5. What key properties changes the method Object.freeze() ?
    This method will set false on the properties 'writable' and 'configurable' of all first level object keys.
 */
const pokemonMetadataPropertyDescBefore = Object.getOwnPropertyDescriptor(pokemon, 'metadata');
console.log('\n pokemonMetadataPropertyDescBefore:', pokemonMetadataPropertyDescBefore);
console.log('Freeze');
Object.freeze(pokemon);

const pokemonMetadataPropertyDesc = Object.getOwnPropertyDescriptor(pokemon, 'metadata');
console.log('\n pokemonMetadataPropertyDesc:', pokemonMetadataPropertyDesc);

//The internal properties are marked as true. Object.freeze() only affects the first level of the object.
const pokemonFirstReleasePropertyDesc = Object.getOwnPropertyDescriptor(
  pokemon.metadata,
  'firstRelease'
);
console.log('\n pokemonFirstReleasePropertyDesc:', pokemonFirstReleasePropertyDesc);
