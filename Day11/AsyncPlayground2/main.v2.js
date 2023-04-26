export async function runCode() {
    const strings = [];
  
    strings.push(await doTask1());
    strings.push(await doTask2());
    strings.push(await doTask3());
  
    return strings;
  }