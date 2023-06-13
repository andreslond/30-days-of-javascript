import { Task } from "./exercise";

export class TaskManager {
   constructor() {
      if (!TaskManager.instance) {
         this.task = [];
         Object.freeze(this);
         return TaskManager.instalce = this;
      }
      return TaskManager.instance;
   }

   static getInstance() {
      if (!TaskManager.instance) {
         this.task = [];
         Object.freeze(this);
         return TaskManager.instance = this;
      }
      return TaskManager.instance;
   }

   addTask(task) {
      let taskAux = task;
      if (task.deadline) {
         taskAux = task.task;
      }
      if (taskAux instanceof Task) {
         return this.task.push(task);
      }
      throw new Error('La tarea no tiene la estructura correcta');
   }

   getTasks() {
      return this.task;
   }

   getTaskById(id) {
      return this.task.filter(task => task.id === id);
   }
}