import { User } from "./user";

export class Chat {
  constructor() {
    if (!Chat.instance) {
      this.users = [];
      Chat.instance = this;
      return Chat.instance;
    }
  }

  sendMessage(message) {
    this.users.forEach((user) => {
      user.receiveMessage(message);
    });
  }

  addUser(user) {
    if (typeof user === User) {
      this.users.push(user);
    }
  }

  removeUser(name) {
    let idx = this.users.findIndex((user) => user.name === name);
    return this.users.splice(idx, 1);
  }

}
