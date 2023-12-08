export function taskManager() {
    let tMap = new Map();
  
    const addTask = (name, tags) => {
      console.log('Start addTask');
      console.log('name: ', name);
      console.log('tags: ', tags);
      const lowName = name.toLowerCase();
      if (!tMap.has(lowName)) {
        tMap.set(lowName, tags);
      } else {
        let prevTags = tMap.get(lowName);
        prevTags = [...prevTags, ...tags];
        tMap.set(lowName, new Set(prevTags));
      }
      console.log('End addTask');
    };
  
    const printTasks = () => {
      console.log('Start printTask');
      console.log(tMap);
      console.log('End printTask');
      return tMap
    };
    return {
      addTask,
      printTasks,
    };
  }
  