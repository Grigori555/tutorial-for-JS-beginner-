// const name = "Григорий";
// const age =29;
// function getAge(){
//     return age;
// }
// const output = "Привет,меня зовут "+ name+ " и мой возраст: " + age + " лет";
// const output = `Привет,меня зовут ${name}, мой возраст ${age<20 ? "A" :"B"} лет`;  // использование обратных ковычек
// const output = `
// <h1>Title</h1>
// <div>Hello,world!</div>
// `

// Mетоды строк
// const name = "Григорий";
// console.log(name.length); // длина строки
// console.log(name.toUpperCase()); // верх регистр
// console.log(name.toLowerCase()); // ниж регистр
// console.log(name.charAt(2)); // какой элемент на 2 позициии
// console.log(name.indexOf("гору")); // присутствуют ли данные элементы в строке начиная  с 3 позиции, если нет то вернет -1
// console.log(name.startsWith("Ир")); // а стартует ли данная строка со строчки (учет регистра) 
// console.log(name.toLowerCase().startsWith("гри")); // комбинация методов сначало выполняется регистр 
// console.log(name.endsWith("рий"));// а заканчивается  ли данная строка со строчкой (учет регистра)
// console.log(name.repeat(10)); // повтор строчки
// const string = "   password     ";
// console.log(string);
// console.log(string.trim()); // очистка пробелов
// console.log(string.trimLeft());// очистка пробелов слева
// console.log(string.trimRight());// очистка пробелов справа

function logPerson(s, name, age){
    if(age<0){
        age="еще не родился"
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`

}
const personName = "Григорий";
const personName2 = "Панда";
const personAge = 29;
const personAge2 = -10;
const output = logPerson`Имя:${personName}, Возраст: ${personAge}! `;
const output2 = logPerson`Имя:${personName2}, Возраст: ${personAge2}! `;
console.log(output); 
console.log(output2); 