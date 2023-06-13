export class User {
    constructor(name) {
       this.name = name;
    }
 
    notify(task) {
       console.log(`${this.name} ha sido notificado que la tarea ${task.description} ha sido completada.`);
    }
 }
 