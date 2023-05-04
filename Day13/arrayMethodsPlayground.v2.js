export function groupProducts(products, category) {
  const res = {}

  //Productos que cumple con la categoria
  const category_products = products.filter(x => x.category == category)

  res['products'] = category_products.map(x => x.name).join(", ")
  res['totalPrice'] = category_products.reduce(((acum, { price }) => acum + price), 0)


  return res
}
