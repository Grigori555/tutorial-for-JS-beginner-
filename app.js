//1  Number
// const float =42 // integer целое
// const num =42.42; // float десятичное
// const pow =10e1; // 10 возводим в 3 степень = ??????
// console.log("MAX_SAFE_INTEGER",Number.MAX_SAFE_INTEGER);  // макс возможное число с которым в jS можно производить какие либо операции
// console.log("Math.pow 53",Math.pow(2,53)-1); // глоб метод со степенью
// console.log("MIN_SAFE_INTEGER",Number.MIN_SAFE_INTEGER);// макс возможное число с которым в jS можно производить какие либо операции
// // более высокие значения
// console.log("MAX_VALUE",Number.MAX_VALUE); //  макс возм число в JS значение возводится в 308 степень
// console.log("MIN_VALUE",Number.MIN_VALUE); //  мin возм число в JS
// console.log("POSITIVE_INFINITY", Number.POSITIVE_INFINITY); //Infinity  1/0 =Infinity, 2/0 =Infinity */0 =Infinity
// console.log("NEGATIVE_INFINITY", Number.NEGATIVE_INFINITY);// -Infinity
// console.log("NaN", Number.NaN);// Not a Number -  является числом!!
// //example for NaN:
// const weird =  2/undefined;
// console.log(isNaN(weird)); // проверка является ли число NaN
// console.log(Number.isNaN(45)); // false значит число не явля NaN
// console.log(Number.isFinite(Infinity)); // является ли число конечным? false
// console.log(Number.isFinite(35));// является ли число конечным? true

// const stringInt ="40";
// const stringFloat ="40.40";
// console.log(Number.parseInt(stringInt)+2); // парсим строковое значеие в число целое число
// console.log(Number(stringInt)+2); //короткий вариант перевода в число строки
// console.log(+stringInt+2); // плюс перед строкой тоже преобразует ее в число
// // Number.parseInt(stringInt)  метод parseInt преобразовывает в число только ЦЕЛОЕ строковое значение
// // Number.parseFloat(stringInt)  метод parseFloat преобразовывает в число НеЦЕЛОЕ строковое значение
// // oстановился 2:01

// console.log(parseFloat(stringFloat)+2);
// console.log(+stringFloat+2);
// // error
// console.log(0.4+0.2);
// console.log(2/5+1/5);
// console.log((0.4+0.2).toFixed(1)); // отсекает значения после запятой до нужного (но будет строка)

// console.log(parseFloat((0.4+0.2).toFixed(1))); // отсекает значения после запятой до нужного (но будет строка) и   parseFloat преобразует в число
// console.log(+(0.4+0.2).toFixed(1));  // + преобразует в число


//2 BigInt //
// - новый тип данных, числа которые  больше MAX_SAFE_INTEGER (чтоб с ними можно было работать), где добавив "n" мы можем увидеть его тип данных 

// console.log(typeof 900719925474099199999n); 
console.log(900719925474099199999n+900719925474099199999n);
//бывает и отриц  BigInt
console.log(-(900719925474099199999n+900719925474099199999n));
//в  BigInt нельзя оперировать десятичными числами
// console.log(10n-4); // ошибка разный тип данных
console.log(parseInt(10n)-4); // преобразование BigInt в обычное число
console.log(10n-BigInt(4)); //наоборот
console.log(5n/2n) //получим только целое число


//3 Math
// это объект позволяет в JS взаимодействовать с различными математич операциями
console.log(Math.PI); // 3.14
console.log(Math.E); // 2.7
console.log(Math.sqrt(25)); // квадратный корень
console.log(Math.pow(5,2)); // возведение  в степень
console.log(Math.abs(-42)); // модуль числа
console.log(Math.max(1,23,45,42,4)); //выбирает самое большое число из списка
console.log(Math.min(1,23,45,42,4)); //выбирает самое маленькое число из списка
// округление чисел
console.log(Math.floor(4.9));   // в меньшую сторону
console.log(Math.ceil(4.9));   // в большую сторону


// остановился 2:15 round



