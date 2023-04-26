import { doTask1, doTask2, doTask3 } from './tasks';

export async function runCode() {
  const strings = [];

  const result1 = await doTask1();
  strings.push(result1);
  const result2 = await doTask2();
  strings.push(result2);
  const result3 = await doTask3();
  strings.push(result3);
  return strings;


  // return new Promise((resolve) => {
  //   doTask1((rta1) => {
  //     strings.push(rta1);
  //     doTask2((rta2) => {
  //       strings.push(rta2);
  //       doTask3((rta3) => {
  //         strings.push(rta3);
  //         resolve(strings);
  //       })
  //     })
  //   })
  // })
}
