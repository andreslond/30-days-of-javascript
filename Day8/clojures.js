function multiplyBy(multiplier) {
    return function (value) {
      return value* multiplier;
    }
  }
  
  const double= multiplyBy(2);
  console.log(double(5)); // Output: 10
  console.log(double(10)); // Output: 20
  
  const triple = multiplyBy(3);
  console.log(triple(10)); // Output: 30
  console.log(triple(20)); // Output: 60

//___________________________
  function counter() {
    let count = 0;
    return function increment() {
      count++;
      return count;
    }
  }
  const myCounter = counter();
  console.log(myCounter()); // Output: 1
  console.log(myCounter()); // Output: 2
  console.log(myCounter()); // Output: 3