//ES7 new features from 2016

//Exponentiation operator (**)
//The same funcitonal of Math.pow()

console.log(2 ** 3);
console.log(Math.pow(2,3));

//Trailing Commas
//Avoid error when we added a come at the end of an array or object.
const objeto = {nombre: "Juan", edad: 30,};
const array = [1, 2, 3,];

//string.prototype.padStart() and padEnd()
//It helps us to fill the empty lenght of a string with a string.
//It could be used to fill from the starto to the end (padStart) or the opposite (padEnd).
//Helpfull to show creditCard numbers
const creditCardNum = "1234567812341234";
const last4Digist =  creditCardNum.substring(11); //1234
console.log(creditCardNum); // Output: "1234567812341234"
console.log(last4Digist.padStart(16, "*")); // Output: "************1234"

