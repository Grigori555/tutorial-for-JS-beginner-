// 1 Функции
// способы создания функций
// Function Declaration  - можем обращаться к функции когда захотим,
// помести ее создание в любое место и ничего не изменится
// function greet(name) {
// console.log("Hello -", name);
// }

// // Function Expression -если создание функции идет до ее вызова то это будет ошибка
// const greet2= function greet2(name){
//     console.log("Hello2 -", name);
// }
// // greet("Grigory");
// // greet2("Panda");


// // console.log(typeof greet); // но функция не отдельный тип данных
// // console.dir(greet); // функция как объект

// //2 Анонимные функции
// let counter = 0;
// const interval = setInterval(function(){
//     if(counter===5){
//     clearInterval(interval);
//     }else{
//  console.log(++counter);
//     }
// },1000);

/// 3 Стрелочные функции
// function greet(name) {
//      console.log("Hello -", name);
//      }
// const arrow = (name)=>{
//     console.log(`Hello, world and ${name}`);
// }

// arrow("Grisha");
// // сокращенная форма
// const arrow2 = name =>console.log(`Hello, world and ${name}`);
// arrow2("Evgen");

// // функция, которая возвращает результат

// // оператор возвода в степень **2 или Math.pow()!!!!!
// const pow2 = num =>{
//     return num **2
// }

// console.log(pow2(5));

// // 4 Параметры по умолчанию
// //undefined+ 1 = NaN
// const sum =  (a=4,b=a*2) => a+b

// console.log(sum())

// // функция которая принимает под параметр неогранич количество чисел
//  function sumAll(...all){
//      let result = 0;
//      for( let num of all){
//         result+=num;
//      }
// return result;
//  }

//  const res = sumAll(1,2,3,4,5,6,56)
//  console.log(res);


 // Замыкания

 function createDog(name){
     return function(lastName){
         console.log(` Собака сейчас ${name}, ` + `умершая собака ${lastName}`);
     }
 }

const logWithLastName =createDog("Panda");
console.log(logWithLastName("Laima"));
console.log(logWithLastName("Belka"));
