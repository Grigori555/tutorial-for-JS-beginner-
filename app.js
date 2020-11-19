// Number
const float =42 // integer целое
const num =42.42; // float десятичное
const pow =10e1; // 10 возводим в 3 степень = ??????
console.log("MAX_SAFE_INTEGER",Number.MAX_SAFE_INTEGER);  // макс возможное число с которым в jS можно производить какие либо операции
console.log("Math.pow 53",Math.pow(2,53)-1); // глоб метод со степенью
console.log("MIN_SAFE_INTEGER",Number.MIN_SAFE_INTEGER);// макс возможное число с которым в jS можно производить какие либо операции
// более высокие значения
console.log("MAX_VALUE",Number.MAX_VALUE); //  макс возм число в JS значение возводится в 308 степень
console.log("MIN_VALUE",Number.MIN_VALUE); //  мin возм число в JS
console.log("POSITIVE_INFINITY", Number.POSITIVE_INFINITY); //Infinity  1/0 =Infinity, 2/0 =Infinity */0 =Infinity
console.log("NEGATIVE_INFINITY", Number.NEGATIVE_INFINITY);// -Infinity
console.log("NaN", Number.NaN);// Not a Number -  является числом!!
//example for NaN:
const weird =  2/undefined;
console.log(isNaN(weird)); // проверка является ли число NaN
console.log(Number.isNaN(45)); // false значит число не явля NaN
console.log(Number.isFinite(Infinity)); // является ли число конечным? false
console.log(Number.isFinite(35));// является ли число конечным? true

const stringInt ="40";
const stringFloat ="40.40";
console.log(Number.parseInt(stringInt)+2); // парсим строковое значеие в число целое число
console.log(Number(stringInt)+2); //короткий вариант перевода в число строки
console.log(+stringInt+2); // плюс перед строкой тоже преобразует ее в число

// oстановился 2:42
