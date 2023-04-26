import { doTask1, doTask2, doTask3 } from './tasks';

export function runCode() {
  const strings = [];

  return new Promise((resolve) => {
    console.log('Promise1');
    doTask1()
      .then(result1 => {
        console.log('doTask1');
        console.log(result1);
        strings.push(result1);
        return doTask2();
      })
      .then((result2) => {
        console.log(result2);
        strings.push(result2);
        return doTask3();
      })
      .then((result3) => {
        console.log(result3);
        strings.push(result3);
        resolve(strings);
      })
      .catch((error) => {
        console.log(error);
      });
  });



  // new Promise((resolve) => {
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
