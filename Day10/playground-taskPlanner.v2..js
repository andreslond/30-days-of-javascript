export function createTaskPlanner() {
  // Tu código aquí 👈
  let taskList = [];
  return {
    addTask(task) {
      console.log('add: ', task);
      task.completed = false;
      taskList.push(task);
    },
    removeTask(value) {
      console.log('remove: ', value);
      const filteredTaskList = taskList.filter((task) =>
        task.id !== value && task.name !== value);
      console.log(filteredTaskList);
      taskList = filteredTaskList;
    },
    getTasks() {
      return taskList;
    },
    getPendingTasks() {
      return taskList.filter((task) => !task.completed);
    },
    getCompletedTasks() {
      return taskList.filter((task) => task.completed);
    },
    markTaskAsCompleted(value) {
      console.log('markTaskAsCompleted: ' + value);
      const searchedTask = taskList.find((task) => {
        return task.id === value || task.name === value;
      });
      console.log(searchedTask);
      if (searchedTask) {
        searchedTask.completed = true;
      }
    },
    getSortedTasksByPriority() {
      let sortedTasks = [...taskList];
      console.log('original: ', taskList);
      sortedTasks.sort((taskA, taskB) => taskA.priority - taskB.priority);
      console.log('sorted: ', sortedTasks);
      return sortedTasks;
    },
    filterTasksByTag(tag) {
      console.log('filterTasksByTag: ', tag);
      const filteredList = taskList.filter((task) =>
        task.tags.some((taskTag) => taskTag === tag));
      return filteredList;
    },
    updateTask(taskId, updates) {
      console.log('updateTask: ', taskId);
      console.log('updates: ', updates);
      const index = taskList.findIndex((task) => task.id === taskId);
      taskList[index] = { ...taskList[index], ...updates }
    }
  }
}
