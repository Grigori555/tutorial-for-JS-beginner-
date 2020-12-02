const cars  = ["Мазда", "Форд", "БМВ","Мерседес"];
const fib= [1,2,3,5,8,13];
const people =[
    {name: 'Grishas', budget:20000},
    {name: 'Dima', budget:45000},
    {name: 'Vano', budget:17000},
    {name: 'Elena', budget:15000},
    {name: 'Katya', budget:37000}

]


// console.log(cars);
// Function
function addItemToEnd(){

}
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



// метод map всегда возвращает новый массив
const upperCaseCars = cars.map(car=>{
  return car.toUpperCase()
})

// возведение в квадрат
const pow = fib.map(car=>{
  return car = Math.pow(car,2)
})

console.log(pow);


// еще одно возведение в квадрат
const pow2 = fib.map(car=>car**2)

console.log(pow2);





