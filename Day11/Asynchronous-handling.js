//Callbacks
// We can use a funciton as argument and the function will be executed when the promise get data.
// but it could evolve in callback hell anti-pattern.

function getUserData(userId, callback) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => {
      console.log('first step:', response);
      return response.json();
    })
    .then((data) => callback(data))
    .then(() => console.log('other data step.'))
    .catch((error) => console.log(error));
}

function displayUserData(data) {
  console.log('callback execution');
  console.log(data);
}

getUserData(1, displayUserData);

//---------------------------------------------------
//Calback hell
operation1(function (result1) {
  operation2(result1, function (result2) {
    operation3(result2, function (result3) {
      operation4(result3, function (result4) {
        // ...continuar con más operaciones
      });
    });
  });
});

//Promises
// Using promises structure we can handle asynchronous code easier.
// This is the previous callback hell using promises structure.

operation1()
  .then((result1) => {
    return operation2(result1);
  })
  .then((result2) => {
    return operation3(result2);
  })
  .then((result3) => {
    return operation4(result3);
  })
  .then((result4) => {
    //other operations
  })
  .catch((error) => {
    //Handle errors
  });

//-------------------------------------
//Async/await
//The most modern and readable way to handle promises.
//With async/await the code works like secuencal one and it's easy to read.

async function getUserData2(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = await response.json();
        return data;
    } catch(error) {
        console.log(error);
    }
}

async function displayUserData(userId) {
    const data = await getUserData2(userId);
    console.log(data);
}

displayUserData(1);
