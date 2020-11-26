const cars  = ["Мазда", "Форд", "БМВ","Мерседес"];
const fib= [1,2,3,5,8,13];
const people =[
    {name: 'Grisha', budget:20000},
    {name: 'Dima', budget:45000},
    {name: 'Vano', budget:17000}

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
// const index = cars.indexOf("БМВ")  // поиск элемента в массиве
// cars[index] = "Porche";
// console.log(cars);
const index = people.findIndex(function(person){
  return person.budget === 45000;
})  // поиск эемента при работе с объектами (этот findIndex метод является циклом)

console.log(people[index]);




