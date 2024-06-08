// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const studentInfo = {
//   name: "Valeriy",
//   specialty: "Ukrainian language and literature",
//   gpa: "176",
//   missedLectures: "5",

//   showInfo: function () {
//     console.log(
//       "Student: \n\t" +
//         this.name +
//         "\nSpecialty: \n\t" +
//         this.specialty +
//         "\nGPA: \n\t" +
//         this.gpa +
//         "\nAmount of missed lectures: \n\t" +
//         this.missedLectures
//     );
//   },
// };

// studentInfo.showInfo();

// Overko = {
//   name: "Overko",
//   specialty: "Nursing",
//   gpa: "164",
//   missedLectures: "3",
// };

// studentInfo.showInfo.call(Overko);

// Sofiia = {
//   name: "Sofiia",
//   specialty: "Mechanics",
//   gpa: "189",
//   missedLectures: "2",
// };

// studentInfo.showInfo.apply(Sofiia);

// Inna = {
//   name: "Inna",
//   specialty: "Shipbuilding",
//   gpa: "178",
//   missedLectures: "7",
// };

// studentInfo.showInfo.bind(Inna)();

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

const buttonInfo = {
  showInfo() {
    alert("Description: \n" + this.description);
    // console.log("Description: \n", this.description);
  },
};

const html = {
  description:
    "HTML is a standardized document markup language for viewing web pages in a browser.",
};

const css = {
  description:
    "CSS is a special style language used to describe the appearance of pages.",
};

// buttonInfo.showInfo.bind(css)();

document
  .querySelector("#htmlBut")
  .addEventListener("click", buttonInfo.showInfo.bind(html));

document
  .querySelector("#cssBut")
  .addEventListener("click", buttonInfo.showInfo.bind(css));

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

// const store = (name, price, amount) => {
//   return [name, price * amount];
// };

// const banana = {
//   name: "banana",
//   price: 30,
//   amount: 4.5,
// };

// const cherry = {
//   name: "cherry",
//   price: 58,
//   amount: 1.3,
// };

// const orange = {
//   name: "orange",
//   price: 89,
//   amount: 3.4,
// };

// const output = (obj) => {
//   let [fruitName, fruitCost] = store(obj.name, obj.price, obj.amount);
//   fruitCost = +fruitCost.toFixed(2);
//   return console.log("Name: \n\t" + fruitName + "\nCost: \n\t" + fruitCost);
// };

// output(banana);
// output(cherry);
// output(orange);
