// Переменные

// var name ="Grigory"; // string

// let age = 29; // number

// const panda = true; // boolean
// console.log(panda);

//2 Мутирование

// alert("Имя человека: "+ name + ", возраст человека "+ age);

// const lastName = prompt("Введите фамилию");
// alert(name + " " + lastName);

//3 Операторы
// let currentYear = 2020;
// const birthYear = 1991;
// const age = currentYear-birthYear;
// // console.log(age);

// 4 Типы данных
// const dog = true;
// const age =10;
// const name = "panda";
// let girl;
// console.log(typeof dog);
// console.log(typeof age);
// console.log(typeof name);
// console.log(typeof girl); 
// console.log(typeof null); // error bug

// 5 Приоритет операторов

// const fullAge = 29;
// const birthYear = 1991;
// const currentYear = 2020;

// // >< >= <=
// const isFullAge = currentYear - birthYear >= fullAge;
// console.log(isFullAge);

//6 Условные операторы

// const courseStatus = "readyw"; // ready, fail pending


// if (courseStatus ==="ready"){
//     console.log("Курс уже готов и его можно проходить");
// } else if (courseStatus ==="pending"){
//     console.log("Курс пока находится в процессе разработки");
// } else {
//     console.log("Курс не получился");
// }

// const num1 =42;
// const num2 ="42";

// console.log (num1 === num2);


const isReady =false;

// if(isReady) {
//     console.log("все готово");
// } else {
//     console.log("все  не готово");
// }
// Тернорное выражение
// isReady ? console.log("Все готово") :console.log("Все не готово")

// 7 Булевая логика 
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/%D0%9B%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B

//8 Функции

// function calculateAge(year){
//     return 2020-year;
// }

// function logInfoAbout(name, year){
//     const age = calculateAge(year);
//     if(age>0){
//     console.log("Человек с именем: " + name + ", сейчас ему лет: " + age);
//     } else {
//         console.log("Вообще-то это уже будущее");
//     }
// }

// logInfoAbout("Григорий", 2021);

// 9 Массивы

// const cars =['Ford', 'BMW', 'Mazda']
 

//  const cars = new Array('Ford', 'BMW', 'Mazda');
//  console.log(cars[2]);
//  console.log(cars.length);

//  cars[2] = "Lexus"

 
//  cars[3]="Porsche";
 
//  cars[cars.length] = "Ferrari"; // В последний элемент новый элемент
//  console.log(cars);


// 10 циклы
// const cars =['Ford', 'BMW', 'Mazda'];

// // for(let i = 0; i<cars.length; i++){
// //     // console.log(cars[i]);
// //     const car = cars[i];
// //     console.log(car);

// // }

// for(let car of cars){
//     console.log(car);
// }


// 11 Объекты

 const person ={
     firstName: "Grigory",
     LastName: "Morozov",
     year: 1991,
     languages: ["Ru","En"],
     hasWife:false,
     greet: function (){
         console.log ("Hello, World");
     }
 }


 console.log(person.greet());// варинт обращения к методу объекта
 console.log(person["year"]); // варинт обращения к методу объекта

 const key = "hasWife";

 console.log(person[key]); //динамический ключ
 person.greet = function(string){
     console.log(string);

 }


 person.greet("Hey,girl");


 person.birthDay ="14.12";    // добавление ключа

 console.log(person);


 // Детали JS 1:44



