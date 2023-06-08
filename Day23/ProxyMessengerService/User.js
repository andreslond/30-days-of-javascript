export class User {
    constructor(name) {
      this.name = name;
      this.isLogged = false;
    }
  
    login() {
      this.isLogged = true;
    }
  
    logout() {
      this.isLogged = false
    }
  
    isLoggedIn() {
      return this.isLogged;
    }
  }