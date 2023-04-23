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
