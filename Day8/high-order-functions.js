// an example of a high-order function could be the array map operation.
//Map receive an operation and an array as arguments and returns a new array 
//  with the results of appply the function to each array element.

export function myMap(array, func) {
    // Tu código aquí 👈
  
    //return array.map(func);
    let transformedArray = [];
    for (const element of array) {
      transformedArray.push(func(element));
    }
    return transformedArray;
  }
  