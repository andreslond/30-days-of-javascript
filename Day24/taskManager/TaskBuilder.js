import { Task } from "./exercise";

export class TaskBuilder {
   constructor() {
      this.task = new Task('', '');
      // this.id = '';
      // this.description = '';
      // this.completed = false;
      // this.users = [];
   }

   setId(id) {
      //this.id = id;
      this.task.id = id;
      return this;
   }

   setDescription(description) {
      //this.description = description;
      this.task.description = description;
      return this;
   }

   setCompleted(completed) {
      //this.completed = completed;
      this.task.completed = completed;
      return this;
   }

   setUsers(users) {
      //this.users = [...users];
      this.task.users = [...users];
      return this
   }

   setDeadline(deadline) {
      //this.deadline = deadline;      
      this.task.deadline = deadline;
      return this;
   }

   setPriority(priority) {
      //this.priority = priority;
      this.task.priority = priority;
      return this;
   }

   // build() {
   //    if (this.task.deadline || this.task.priority) {
   //       return {
   //          task: {
   //             id: this.id,
   //             description: this.description,
   //             completed: this.description,
   //             users: this.users
   //          },
   //          deadline: this.deadline,
   //          priority: this.priority
   //       };
   //    }
   //    return {
   //       task: {
   //          id: this.id,
   //          description: this.description,
   //          completed: this.description,
   //          users: this.users
   //       }
   //    }
   // }
   build() {

      return this.task;
   }
}
