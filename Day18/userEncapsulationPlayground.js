class User {
  constructor(name, age) {
    this._name = name;
    this._age = age;
    this._friends = [];
    this._messages = [];
  }

  get age() {
    return this._age;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }
  set age(age) {
    this._age = age;
  }

  addFriend(friend) {
    console.log('addFriend');
    this._friends.push(friend);
  }

  sendMessage(message, friend) {
    this._messages.push(message);
    friend._messages.push(message);
  }

  showMessages() {
    return this._messages;
  }
}

const usuario1 = new User('Juan', 20);
const usuario2 = new User('Maria', 25);
console.log(usuario1.addFriend(usuario2));
console.log(usuario1.sendMessage('Hola Maria!', usuario2));

console.log(usuario1.showMessages());
