export function arrayModified() {

    Array.prototype.myFilter = function (func) {
      //return this.filter(func);
      let newArray = [];
      this.forEach((element) => {
        if (func(element)) {
          console.log(func(element));
          newArray.push(element);
        }
      });
      return newArray;
    };
  
    const array = [1, 2, 3, 4, 5, 6];
  
    array.myFilter(num => num % 2 === 0)
  
  }
  