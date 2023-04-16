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
        const filteredTaskList = taskList.filter((task) => {
          task.id === value || task.name === value;
        });
        console.log(filteredTaskList);
        taskList = filteredTaskList;
      },
      getTasks() {
        return taskList;
      },
      getPendingTasks() {
        return taskList.filter((task) => !task.completed);
      },
      getCompletedtasks() {
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
          console.log('after update: ', searchedTask);
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
        return taskList.filter((task) =>
          task.tags.filter((taskTag) =>
            taskTag == tag));
      },
      updateTask(taskId, updates) {
        console.log('updateTask: ', taskId);
        console.log('updates: ', updates);
        const searchedTask = taskList.find((task) => task.id === taskId);
  
        console.log(searchedTask);
        if (searchedTask) {
          searchedTask.name = updates.name;
          searchedTask.priority = updates.priority;
          searchedTask.tags = updates.tags;
  
          console.log(taskList);
        }
      }
    }
  }
  