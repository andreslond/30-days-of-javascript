class User {
  // Este código no debe ser editado ❌
  constructor(name) {
    this.name = name;
    this.messages = [];
  }

  receiveMessage(message) {
    this.messages.push(message);
  }
}

class Chat {
  constructor() {
    if (!Chat.instance) {
      return (Chat.instance = this.createInstance());
    }
    return Chat.instance;
  }

  createInstance() {
    this.users = [];
    return Object.freeze(this);
  }

  sendMessage(message) {
    console.log('message');
    this.users.forEach((user) => {
      user.receiveMessage(message);
    });
  }

  addUser(user) {
    if (user instanceof User) {
      this.users.push(user);
    }
  }

  removeUser(name) {
    let idx = this.users.findIndex((user) => user.name === name);
    return this.users.splice(idx, 1);
  }
}

const chat1 = new Chat();
const chat2 = new Chat();
const chat3 = new Chat();


console.log(chat1 === chat2);
console.log(chat2 === chat3);

//Read-only property
chat1.users = [];
