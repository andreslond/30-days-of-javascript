export function processShoppingList(list) {
  let total = 0

  for (let producto of list) {
    let precio = producto.price * producto.quantity

    if (producto.name.includes("oferta")) {
      precio = precio * .8
    }
    producto.price = precio
    delete producto.quantity
    total += producto.price
  }
  return total
}