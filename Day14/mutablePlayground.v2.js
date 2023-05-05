export function processShoppingList(list) {
  let total = 0;

  let newList = list.map(item => {
    if (item.name.includes("oferta")) {
      item.price = item.price * 0.8;
    }
    item.price = item.price * item.quantity;

    total += item.price;

    let { quantity, ...auxItem } = item;
    return auxItem;
  })

  Object.assign(list, newList);

  return total;
}
