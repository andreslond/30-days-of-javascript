/**
 * Promises
 * It is a mechanism to handle asynchronous operations in JavaScript.
 * It is a way to represent a value that will be available in the future as a correct or error result.
 */

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(42);
  }, 2000);
});

promise.then((result) => {
  console.log(result);
});

//Promise chaining

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ number: 42, text: 'hello' });
  }, 2000);
});

promise2
  .then((result) => {
    console.log('first result:', result.text, result.number);
    const doubledNumber = result.number * 2;
    return doubledNumber.toString();
  })
  .then((result) => {
    console.log(`The result is ${result}`);
  })
  .catch((error) => {
    console.log(error);
  });

/**
 * SetTimeout
 * setTimeout let us program a task that will be executed after some time.
 * setTimweout returns a number which we can cancel the execution before it happends with clearTimeout(id)
 */

let id = setTimeout(() => {
  console.log('Han pasado 5 segundos');
}, 5000);

//setTimeout returns a number which we can cancel the execution before it happends with clearTimeout(id)
clearTimeout(id);

/**
 * SetIntervarl
 * It is used to program a task to be repeated after a certain time.
 */

setInterval(() => {
  console.log('Han pasado 2 segundos.');
}, 2000);

//Promise with timeOut

function wait(ms) {
  return new Promise((resolve, reject) => {
    if (ms < 0) {
      reject(new Error('Negative number'));
    }
    setTimeout(() => {
      const seconds = ms / 1000;
      resolve(seconds);
    }, ms);
  });
}

wait(2000).then((seconds) => {
  console.log(`After ${seconds}  seconds`);
});

wait(-2000)
  .then((seconds) => {
    console.log(`After ${seconds}  seconds`);
  })
  .catch((error) => {
    console.error(error);
  });

  console.log('After promise code.');

