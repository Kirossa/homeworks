//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка
// повинна показати “Іван”).

// let name = "Іван";
// let city = name;
// console.log(city);

//***2***
//Який буде результат виконання скрипта?

// let name = "Olga";
// console.log(`привіт ${1}`); // 1
// console.log(`привіт ${"name"}`); // name
// console.log(`привіт ${name}`); // Olga

//***3***
// //Видобути число зі змінних
// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";
// // вивести в консоль тип

// let numA = parseInt(a);
// console.log(numA);
// console.log(typeof numA);
// let numB = parseInt(b);
// console.log(numB);
// console.log(typeof numB);
// let numC = parseFloat(c);
// console.log(numC);
// console.log(typeof numC);

//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3

// console.log((0.1 * 10 + 0.2 * 10) / 10);

//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40

// console.log(Math.max(20, 10, 50, 40));

//***6**
//Поверніть випадкове число в діапазоні від 2 до 4

// console.log(Math.random() * (4 - 2) + 2);

//***7**
//дізнатись довжину message
// const message = "Welcome to Bahamas!";

// console.log(message.length); //19

//***8**
//вивести в консоль message великими літерами

// console.log(message.toUpperCase());

//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль

// let obj = {};

// obj.name = "Ivan";
// obj.age = "13";
// obj.city = "Kolomyia";

// // console.log(obj);

// delete obj.city;
// // console.log(obj);

// obj["like flowers"] = true;
// // console.log(obj);

//***10**
// За допомогою циклу “for…in” вивести в консоль ключі і значення об*єкта

// for (key in obj) {
//   console.log(key);
//   console.log(obj[key]);
// }
