export class Newsletter {
    constructor() {
      this.subscribers = [];
    }
    subscribe(subscriber) {
      this.subscribers.push(subscriber);
    }
  
    unsubscribe(email) {
      const idx = this.subscribers.findIndex(subscriber => subscriber.email ===
        email);
      this.subscribers.splice(idx, 1);
    }
  
    post(article) {
      this.subscribers.forEach(subscriber => {
        subscriber.receive(article);
      })
    }
  }
  