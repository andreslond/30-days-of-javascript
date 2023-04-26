// exercise.js
import { doTask1, doTask2, doTask3 } from './tasks';

export async function runCode() {
  return Promise.allSettled([doTask1(), doTask2(), doTask3()]).then((listOfObjects) =>
    listOfObjects.map((element) => element.value)
  );
}
