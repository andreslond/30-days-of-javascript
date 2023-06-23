/*
Sets
Similar to arrays. This objects allows us to store unique values. 
These values can be any kind of value including numbers, objects, strings and also other sets.
A Set do not allow duplicated values.
An array allows duplicated values.
 */

let set1 = new Set();

let array = [1, 2, 3, 4, 5];
let set2 = new Set(array);


let set = new Set();

// Agregar elementos al set
set.add(1);
set.add(2);
set.add(3);

// Si llamamos a nuestro set directamente, este nos devolerá todo su contenido
console.log(set) // Output {1,2,3}

// Verificar si un elemento existe en el set
console.log(set.has(2)); // Output: true

// Eliminar un elemento del set
set.delete(2);

// Verificar si un elemento existe en el set después de ser eliminado
console.log(set.has(2)); // Output: false

// Create an array from a Set
let setArray = Array.from(set);
console.log(setArray); //Output: [1, 3]

// Vaciar el set
set.clear();

// Verificar el tamaño del set después de ser vaciado
console.log(set.size); // Output: 0

//To itersate on a set it is neccesary to convert it as array.

