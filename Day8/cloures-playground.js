function createCalculator() {

    let total = 0;
    console.log('start');
  
    const add = ((number) => {
      console.log('add');
      console.log(number);
      console.log(total);
      return total + number;
    });
  
    function substract(number) {
      console.log('substract');
      return total - number;
    }
  
    function multiply(number) {
      console.log('multiply');
      return total * number;
    }
  
    function divide(number) {
      console.log('divide');
      return total / number;
    }
  
    function clear() {
      console.log('clear');
      total = 0;
      return total;
    }
  
    function getTotal() {
      console.log('getTotal');
      return total;
    }
  
  }
  

const calculator = createCalculator();
calculator.add(10);
