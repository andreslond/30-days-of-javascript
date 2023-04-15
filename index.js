
//Async

const myPromise = () => Promise.resolve('I have resolved!');
function firstFunction() {
  myPromise().then((res) => console.log(res));
  console.log('second');
}
async function secondFunction() {
  console.log(await myPromise());
  console.log('second');
}
firstFunction();
secondFunction();
/*
Respuesta Correcta: D) second, I have resolved! y I have resolved!, second
firstFunction es una función simple que llama a myPromise usando el método then propio de las promesas. Por Event Loop las promesas pasan al Task Queue entonces primero ejecutamos el console.log y mostramos second por consola, ahora el Call Stack esta vacío y la promesa que estaba en la Task Queue pasa al Call Stack y resolvemos la promesa mostrando I have resolved!.

secondFunction es una función asíncrona, al llamar a myPromise con await esperamos el tiempo necesario para que la promesa se ejecute, entonces mostramos primero por consola I have resolved! y luego second.

Cuando tenemos sintaxis async await escribimos código de manera síncrona pero se ejecuta de manera asíncrona.

Puedes aprender un poco más sobre asincronia en javascript en los siguientes videos:

Event Loop: Entender el asincronismo en JavaScript

Asincronismo en JavaScript
*/