function createCalculator() {
  let total = 0
  return {
    'add': (x) => total += x,
    'subtract': (x) => total -= x,
    'multiply': (x) => total *= x,
    'divide': (x) => total /= x,
    'clear': () => total = 0,
    'getTotal': () => total
  }
 
}

const calculator = createCalculator();