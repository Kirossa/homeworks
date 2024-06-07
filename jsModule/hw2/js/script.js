// -- 1 --
// У вас є масив об’єктів fruits, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruits = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomato" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// let arr = [];

// for (const fruit in fruits) {
//   if (fruits[fruit].name) {
//     arr.push(fruits[fruit].name);
//   }
// }

// for (const fruit in fruits) {
//   for (const value in arr) {
//     if (fruit === value) {
//       fruits[fruit] = arr[value];
//     }
//   }
// }

// console.log(arr);
// console.log(fruits);

// -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// for (let i = 1; i < 11; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//   console.log(`цифра ${i}!`);
// }

// let i = 0;
// while (i < 5) {
//   console.log(`digit ${i}!`);
//   i++;
// }

// -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// while (true) {
//   const number = prompt("Enter number bigger than 100");

//   if (!number || number.length === 0) break;
//   else if (number.length < 3) {
//     continue;
//   } else if (Number(number) > 100) {
//     alert(`Your number is: \n ${number}`);
//   } else if (Number(number) === 100) {
//     alert("Enter bigger number!");
//     continue;
//   } else {
//     alert("Enter a number!");
//     continue;
//   }
// }

// -- 5 --
// Вирахуйте середній вік
// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];

// let average = 0;

// for (const girl in girls) {
//   if (girls[girl].age) {
//     average += girls[girl].age;
//   }
// }

// average /= girls.length;
// console.log(average);
