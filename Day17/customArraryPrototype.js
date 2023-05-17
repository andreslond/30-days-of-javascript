export function arrayModified() {

    Array.prototype.myFilter = function(func) {
      // return this.filter((element) => {
      //   console.log(element);
      //   return func(element);
      // });
      //return this.filter(func);
      return this.forEach((element) => {
  
      });
    };
  
    const array = [1, 2, 3, 4, 5, 6];
  
    array.myFilter(num => num % 2 === 0)
  
  }
  