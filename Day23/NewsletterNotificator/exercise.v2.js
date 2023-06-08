// Exercise.js
export class Newsletter {
  constructor() {
    this.subscribers = [];
  }
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
  unsubscribe(email) {
    const index = this.subscribers.findIndex((s) => s.email === email);
    this.subscribers.splice(index, 1);
  }
  post(article) {
    this.subscribers.forEach((s) => s.receive(article));
  }
}
