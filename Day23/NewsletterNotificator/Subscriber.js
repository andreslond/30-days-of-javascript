export class Subscriber {

    constructor(email) {
      this.email = email;
    }
  
    receive(article) {
      console.log(`El suscriptor ${this.email} ha recibido el artículo: ${article.title}`);
    }
  
  } 
  