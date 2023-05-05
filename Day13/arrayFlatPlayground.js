export function searchValue(array, value) {
    // Tu código aquí 👈
  
  
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
    throw new Error("Valor no encontrado");
  }
  