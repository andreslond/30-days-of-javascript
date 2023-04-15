function createCalculator() {
    let total = 0;
  console.log('start');

  return {
    add(number) {
      console.log('add ' + number);
      total += number;
      return total;
    },
    subtract(number) {
      console.log('substract ' + number);
      total = total - number;
      return total;
    },
    multiply(number) {
      console.log('multiply ' + number);
      total = total * number;
      return total;
    },
    divide(number) {
      console.log('divide ' + number);
      total = total / number;
      return total;
    },
    clear() {
      console.log('clear ');
      total = 0;
      return total;
    },
    getTotal() {
      console.log('getTotal ' + total);
      return total;
    }
  };
}

const calculator = createCalculator();
