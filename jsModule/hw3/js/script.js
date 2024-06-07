// ---1---
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Батьки дозволили?");
//   }
// }

// Не дуже зрозуміла завдання. Не зрозуміла що за знак питання ще треба, коли він там і так є.
// З '||' я не знаю що можна тут вигадати, вигадала з '&&'.
// Мені потрібне +- нормальне пояснення що від мене хочуть, щоб я могла це зробити. А так є оце.

// const moviePassUnder = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };

// const positive = () => {
//   alert("Enjoy the movie");
// };

// const negative = () => {
//   alert("Come back with your parents");
// };

// const movieEntrance = () => {
//   let age = prompt("Enter your age");
//   age = Number(age);
//   console.log(age);

//   if (age < 18 && age > 0) {
//     moviePassUnder("Did your parents allow you?", positive, negative);
//     return true;
//   } else if (age > 18 && age < 100) {
//     positive();
//     return true;
//   } else {
//     alert("Invalid value");
//     return false;
//   }
// };

// movieEntrance();

// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// const min = (a, b) => {
//   if (a < b) return a; //1
//   if (a === b) return "They're equal"; //2
//   return b; //3
// };

// console.log(min(5, 5)); //1
// console.log(min(5, 6)); //2
// console.log(min(8, 6)); //3

// ---3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//   "Ви згодні?",
//   function () {
//     alert("Ви погодились.");
//   },
//   function () {
//     alert("Ви скасували виконання.");
//   }
// );

// const ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };

// const positive = () => {
//   alert("Ви погодились.");
// };

// const negative = () => {
//   alert("Ви скасували виконання.");
// };

// ask("Ви згодні?", positive, negative);
