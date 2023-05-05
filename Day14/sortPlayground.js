export function sortByAvailabilityAndPrice(products) {
    const altered = [...products];
    return altered.sort((itemA, itemB) => {
  
      if (itemA.inStock === itemB.inStock) {
        if (itemA.price > itemB.price) {
          return 1;
        }
        if (itemA.price < itemB.price) {
          return -1
        }
        return 0;
      }
  
      if (itemA.inStock && !itemB.inStock) {
        return -1;
      }
  
      if (!itemA.inStock && itemB.inStock) {
        return 1
      }
    })
  }
  