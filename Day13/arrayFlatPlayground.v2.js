export function searchValue(array, value) {
  // Tu código aquí 👈

  //Improvement to avoid check all the array if the value does not exist.
  if (!array.flat().includes(value))
    throw new Error("Valor no encontrado");

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (value === array[i][j]) {
        return {
          row: i,
          column: j
        }
      }
    }
  }
}
