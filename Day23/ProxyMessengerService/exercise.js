export class MessagesProxy {
    constructor(messages, user) {
      this.messages = messages;
      this.user = user;
    }
  
    sendMessage(text) {
      if (this.user.isLoggedIn()) {
        return this.messages.sendMessage(text);
      }
      throw new Error("Usuario no registrado");
    }
  
    getHistory() {
      if (this.user.isLoggedIn()) {
        return this.messages.getHistory();
      }
      throw new Error("Usuario no registrado");
    }
  }