import { Task } from "./exercise";

export class TaskBuilder {
   constructor() {
      this.id = undefined;
      this.description = undefined;
      this.completed = undefined;
      this.users = undefined;
      this.deadline = undefined;
      this.priority = undefined;
   }

   setId(id) {
      this.id = id;
   }

   setDescription(description) {
      this.description = description;
   }

   setCompleted(completed) {
      this.completed = completed;
   }

   setUsers(users) {
      this.users = users;
   }

   setDeadline(deadline) {
      this.deadline = deadline;
   }

   setPriority(priority) {
      this.priority = priority;
   }

   build() {
      const task = new Task(this.id, this.description);
      this.users.forEach((user) => task.assignUser(user));
      task.deadline = this.deadline
      task.priority = this.priority
      return task;
   }
}