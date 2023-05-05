export function sortByAvailabilityAndPrice(products) {
  return [...products].sort((a, b) => {
     
    if (b.inStock != a.inStock)
      return a.inStock ? -1 : 1

    return (a.price - b.price)
  })
}