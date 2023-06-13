import { User } from "./User"

export class Task {
   constructor(id, description) {
      this.id = id;
      this.description = description;
      this.completed = false;
      this.users = [];
   }

   assignUser(user) {
      if (user instanceof User) {
         return this.users.push(user);
      }
      throw new Error('Is not an User isntance.');
   }

   completeTask() {
      this.completed = true;
      this.notifyUsers();
   }

   notifyUsers() {
      this.users.forEach((user) => {
         user.notify(this);
      })
   }
}