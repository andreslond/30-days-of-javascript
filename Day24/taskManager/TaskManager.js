import { Task } from "./exercise";

export class TaskManager {
   constructor() {
      this.task = [];
   }

   static getInstance() {
      // if (!this.task) {
      //    let aux = new TaskManager();
      //    Object.freeze(aux);
      //    return aux;
      // }
      // return this;
      if (!TaskManager.instance) {
         TaskManager.instance = new TaskManager();         
      }
      return TaskManager.instance;
   }

   addTask(task) {
      if (task instanceof Task) {
         return this.task.push(task);
      }
      throw new Error('La tarea no tiene la estructura correcta');
   }

   getTasks() {
      return this.task;
   }

   getTaskById(id) {
      let result = this.task.find(task => task.id === id);
      if (!result)
         return null;
      return result;
   }
}