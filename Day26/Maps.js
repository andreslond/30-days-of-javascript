/**
 * Maps
Allows us to store key-value pairs and access to it efficiently.
The keys in a map could be any data type including objects, functions and primitive values.

Maps could be really helpfull when we need get data by Id or O(1).

 */

// Declare a Map
let map3 = new Map();

// Declare a Map from a array.
let array = [["key1", "value1"], ["key2", "value2"]];
let mapFromArr = new Map(array);

console.log("\n: ~ array:", array)
console.log("\n: ~ mapFromArr:", mapFromArr)

// map examples
let map = new Map();

// Agregar pares clave-valor al Map
map.set("key1", "value1");
map.set("key2", "value2");
map.set(3, "value3");

// Obtener el valor asociado a una clave
console.log(map.get("key1")); // Output: "value1"

// Verificar si una clave existe en el Map
console.log(map.has("key2")); // Output: true

// Eliminar una clave del Map
map.delete("key2");

// Verificar si una clave existe en el Map después de ser eliminada
console.log(map.has("key2")); // Output: false

// Vaciar el Map
map.clear();

// Verificar el tamaño del Map después de ser vaciado
console.log(map.size); // Output: 0

// Finally, Maps allows us to perform eficient operations related with an specific key like 
// search, addition and deletion.

