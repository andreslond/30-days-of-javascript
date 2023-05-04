export function groupProducts(products, category) {
    // Tu código aquí
    console.log(category);
    if (category) {
      const filteredProducts = products.filter((product) => product.category === category);
      console.log(filteredProducts);
      let productResult = filteredProducts.reduce((acum, product) =>
        (acum + product.name + ', '), '');
  
      return {
        products: productResult.slice(0, -2),
        totalPrice: filteredProducts.reduce((acum, product) => 
          (acum + product.price), 0)
      }
    }
  }
  