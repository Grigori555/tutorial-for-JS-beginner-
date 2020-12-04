const cars  = ["Мазда", "Форд", "БМВ","Мерседес"];
const fib= [1,2,3,5,8,13];
// const people =[
//     {name: 'Grishas', budget:20000},
//     {name: 'Dima', budget:45000},
//     {name: 'Vano', budget:17000},
//     {name: 'Elena', budget:15000},
//     {name: 'Katya', budget:37000}

// ]


// console.log(cars);
// Function
// function addItemToEnd(){

// }
// Method - в контексте объекта
// cars.push("Рено"); // добавление в конец

// cars.unshift("Волга");// добавление в начало
// console.log(cars); 

// cars.shift(); // удаление в начале + возвращает удаленый элемент
// const firstCar = cars.shift(); // возвращен первый элемент
// // по аналогии метод который удаляет и возващает первый элемент
// const lastCar = cars.pop(); // удаляет и возвращает последний элемент массива
// console.log(firstCar);
// console.log(cars);
// console.log(lastCar);

// console.log(cars.reverse());  // перевернуть массив
// const text = "Привет, мы изучаем JavaScript";
// const reverseText= text.split("").reverse().join(" ");


//  Методы поиска в массиве объектов
// способы сложнее
// const index = cars.indexOf("БМВ")  // поиск элемента в массиве
// cars[index] = "Porche";
// console.log(cars);
// const index = people.findIndex(function(person){
//   return person.budget === 45000;// выдает номер массива
// })  // поиск эемента при работе с объектами (этот findIndex метод является циклом)
// // сразу выдает результат поиска
// console.log(people[index]);


// простой способ
// const person = people.find(function(person){
//   return person.name === "Grisha";
// })

// console.log(person);



// еще один способ поиска фильтр
// console.log(person);  // сразу выдает результат поиска
// let findedPerson;
// for (const person of people){

//  if(person.budget===20000){
//   findedPerson =person;

//  } 
//  }
 
//  console.log(findedPerson); 
  
// упрощение фильтра
//  const person = people.find((person)=>{
//    return person.budget === 15000;
//  })

 
//  eще упрощение фильтра
// const person = people.find(person=>person.budget === 15000;)
//  console.log(person);

// console.log(cars.includes("Мазда")); // включает ли массив соответсвующий элемент



// // метод map всегда возвращает новый массив
// const upperCaseCars = cars.map(car=>{
//   return car.toUpperCase()
// })
// console.log(upperCaseCars);
// // возведение в квадрат
// const pow = fib.map(car=>{
//   return car = Math.pow(car,2)
// })

// console.log(pow);

// const pow2 = num =>num**2;  // - простой способ описания короткой функции
// const sqrt =num =>Math.sqrt(num);// - простой способ описания короткой функции
// // еще одно возведение в квадрат упрощенное
// const pow2Fib = fib.map(pow2).map(sqrt);

// console.log(pow2Fib);


const pow2 = num =>num**2;
const pow2Fib = fib.map(pow2);

// фильтр filter фильтрует данные, а map он преборазовыввает


//  ВОПРОС  в чем их разница на практике???????  filter и map
const filteredNumbers = pow2Fib.filter(num=>{
  return num >20 // или num => num>20
})
console.log(pow2Fib);
console.log(filteredNumbers);




//  reduce - объединение всех значений массива в одно значение



const people =[
  {name: 'Grishas', budget:20000},
  {name: 'Dima', budget:45000},
  {name: 'Vano', budget:17000},
  {name: 'Elena', budget:15000},
  {name: 'Katya', budget:37000}

]
 // acc -значение которое будет переобновляться на каждой итерации массива
 // параметры метода reduce 
// 1 параметр - функция
 // 0 - 2 параметр некое начальное значение  с котторого мы хотим что либо считать
 // acc - аккумулятор, то значение которое будет переобновляться на кжадой итерации массива и оно буде тсохранено
 // person -тот элемент п окторому мы делаем итерацию
 // метод reduce возвращает финальное значение когда пройдет итерация
// const allBudget = people.reduce(function(acc, person){
//   if(person.budget>20000){
//   acc+=person.budget;
  
//   }
//   return acc;
// },0)

// console.log(allBudget); 

// боле правильный варитн с методом filter

const allBudget = people.filter(person=>person.budget>20000
).reduce(function(acc, person){
  
  acc+=person.budget;
  
  
  return acc;
},0)

console.log(allBudget); 