/*
Hash Table
There is a data structure that allows us to store key-value pairs and access to them eficiently.
The hash function is a matematical function to assign to each value a key.

The buckets are places where the values are stored.
Each bucket has a key to be identified.
'
The hash function needs to be eficient to handle a large number of keys.

Hash table operations
Insert
O(1)

Search
O(1)

Delete
O(1)


Common uses
Data cache
Configuration options
Event callbacks
 */

// Implementation example
class HashTable {
  constructor(size) {
    // Dentro del constructor se inicializa un array con un tamaño arbitrario
    // Para asignarlo como el tamaño total de buckets en nuestra hashTable
    this.buckets = new Array(size);
    this.numBuckets = this.buckets.length;
  }

  hash(key) {
    // Esta función toma una "key" (puede ser una cadena, número, etc.)
    // Para poder calcular el índice del bucket donde el valor será almacenado
    let total = 0;
    // En este caso el algoritmo para crear un hash es muy sencillo

    // Para calcular el hash, se suman los valores ASCII de cada caracter de la key
    // y se toma el resto de la división de esta suma entre el total de buckets.
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.numBuckets;
  }

  insert(key, value) {
    // Este método toma una key y un value, y los almacena en la hash table
    // Primero se calcula el índice usando la función hash
    let index = this.hash(key);

    // si ese bucket no existe, se inicializa como un array vacío.
    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    // Luego se agrega un arreglo con la key y el value al bucket
    this.buckets[index].push([key, value]);
  }

  get(key) {
    // Esta función toma una key y retorna el valor almacenado en la hash table
    // Primero se calcula el índice usando la función hash
    let index = this.hash(key);

    // si ese bucket no existe, se retorna null.
    if (!this.buckets[index]) {
      return null;
    }

    // Si el bucket existe, se recorre el array en busca de un arreglo
    // que tenga la key especificada
    for (let i = 0; i < this.buckets[index].length; i++) {
      // Si se encuentra ese bucket, se retorna su value correspondiente.
      if (this.buckets[index][i][0] === key) {
        return this.buckets[index][i][1];
      }
    }

    //Si no se encuentra la key, se retorna null.
    return null;
  }

  retrieveAll() {
    // Esta función retorna un array con todos los valores almacenados
    // Se recorren todos los buckets y, si existen, se agrega cada value a un array
    let allValues = [];
    for (let i = 0; i < this.numBuckets; i++) {
      if (this.buckets[i]) {
        for (let j = 0; j < this.buckets[i].length; j++) {
          allValues.push(this.buckets[i][j][1]);
        }
      }
    }
    // Para finalmente retornarlo.
    return allValues;
  }
}
