export function searchValue(array, value) {
  //Using flat function

  let flat = array.flat(1).includes(value);
  if (!flat)
    throw new Error("Valor no encontrado");

  let rta;
  array.map((array, index) => {
    if (array.includes(value))
      rta = { row: index, column: array.indexOf(value) }
  });
  return rta;

}
