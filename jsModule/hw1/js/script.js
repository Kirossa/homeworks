//***1***
// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3.

// let val = 1;
// // let val = 0;
// // let val = -3;

// val > 0 ? console.log(true) : console.log(false);

//***2***
// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test',"qwerty", true

// let val = "test";
// // let val = "qwerty";
// // let val = true;

// val === "test" ? console.log(true) : console.log(false);

//***3***
// Якщо змінна більше 10 - відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13.

// let val = 1;
// // let val = 10;
// // let val = 13;

// val > 10 ? console.log(val - 5) : console.log(val + 5);

//***4***
//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const month = prompt("Enter month with a number");

// switch (month) {
//   case "1":
//     alert("January");
//     break;
//   case "2":
//     alert("February");
//     break;
//   case "3":
//     alert("March");
//     break;
//   case "4":
//     alert("April");
//     break;
//   case "5":
//     alert("May");
//     break;
//   case "6":
//     alert("June");
//     break;
//   case "7":
//     alert("July");
//     break;
//   case "8":
//     alert("August");
//     break;
//   case "9":
//     alert("September");
//     break;
//   case "10":
//     alert("October");
//     break;
//   case "11":
//     alert("November");
//     break;
//   case "12":
//     alert("December");
//     break;
//   default:
//     alert("Unknown month");
// }

//***5***
//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// const number = prompt("Enter three digits number");

// if (number.length === 3) {
//   let sum = 0;

//   for (let n of number) {
//     n = Number(n);
//     sum += n;
//   }

//   alert(`Sum of three digits: \n ${sum} `);
// } else {
//   alert("Enter 3 digits");
//   location.reload();
// }
