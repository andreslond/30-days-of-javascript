//Encapsulation is an OOP main principle.
//Properties and methods of an object should be protected and shouldn't be accessed directly from outside of
//the object.

class Account {
  constructor(accountNumber, balance, name) {
    this._accountNumber = accountNumber;
    this._balance = balance;
    this._name = name;
  }

  deposit(amount) {
    this._balance += amount;
  }

  withdraw(quantity) {
    if (quantity <= this._balance) {
      this._balance -= quantity;
    } else {
      console.log('Saldo insuficiente');
    }
  }

  get balance() {
    return this._balance;
  }

  set balance(newBalance) {
    if (newBalance < 0) {
      console.log('El saldo no puede ser negativo');
    } else {
      this._balance = newBalance;
    }
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (newName === '') {
      console.log('El nombre no puede estar vacío');
    } else {
      this._name = newName;
    }
  }
}
//Using emcapsulation, the can not access directly to the balance of the account usinf the property _balance.
//The user needs to use the method getBalance().
//The user only could modify the value of his account using the public interfaces and methods.


const myAccount = new Account("123456789", 1000, "Juan");
//If we use computed properties, set the value of a propertie will execute the set or get method of that property.
myAccount.balance = -1; //El saldo no puede ser negativo.
console.log(myAccount.balance); // Output: 1500
myAccount.name = ""; //El nombre no puede estar vacío
console.log(myAccount.name); // Output: Juan
