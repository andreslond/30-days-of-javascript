export function processShoppingList(list) {
    console.log('start');
    const alteredList = list.map((element) => {
      let newPrice = 0;
      if (element.name.includes('oferta')) {
        newPrice = element.price * 0.8;
      } else {
        newPrice = element.price;
      }
  
      newPrice = element.quantity * newPrice;
      return {
        name: element.name,
        price: newPrice
      }
    })
  
    //Object.assing(list, alteredList);
    list = alteredList;
    console.log('hola');
    console.log(list);
    console.log(alteredList);
    return list.reduce((acum, element) => (acum + element.price), 0);
  }
  