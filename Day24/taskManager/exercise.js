import { User } from "./User"

export class Task{
  constructor(id, description){
     this.id = id;
     this.description = description;
     this.completed = false;
     this.users = [];
  }

  assignUser(user){
     this.users.push(user);
  }

  completeTask() {
     this.completed = true;
  }

  notifyUsers() {
     
  }
}