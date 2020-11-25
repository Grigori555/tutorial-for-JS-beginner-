// Функции
// способы создания функций
// Function Declaration  - можем обращаться к функции когда захотим,
// помести ее создание в любое место и ничего не изменится
function greet(name) {
console.log("Hello -", name);
}

// Function Expression -если создание функции идет до ее вызова то это будет ошибка
const greet2= function greet2(name){
    console.log("Hello2 -", name);
}
greet("Grigory");
greet2("Panda");


console.log(typeof greet); // но функция не отдельный тип данных
console.dir(greet); // функция как объект