// Обьекты

const person = {
    name:"Grisha",
    age:29,
    isBegginnerJS: true,
    skills: ["speaking", "letter", "memory"],
    // "complex key": "Complex Value",
    // ["Key" +( 1+3) ]: 'Computed Key',
    // greet: function(){
         
    // }
    greet(){
        console.log("greet from person")
    },
    info(){
        // console.log("this: ", this); - ссылается на объект person
        console.info("Информация человека по имени:", this.name);
    }
}

// greet является методом потому что он находится внутри объекта person
// способы обращения
// console.log(person.name);
// const ageKey = "age";
// console.log(person[ageKey]);
// console.log(person["complex key"]);




// person.greet;

// person.age++;
// person.skills.push("reading");
// // удалить ключ объекта

// delete person["key_4"];

// // person["key_4"] = undefined;
// console.log(person);

// Деструктуризация

    // const name = person.name;
    // const age = person.age;
    // const skills = person.skills;


// const {name, age: personAge =33, skills} = person; // не работает с  personAge!!!!!!
// console.log(name, personAge, skills);






// объекты не итерируемые




/*цикл for in опасен так как он может заходить в прототип объекта, если  !!!!!!!!!!!!
хочешь этого избежать выполняй опред проверку через if*/
// for (let key in person){
//     if(person.hasOwnProperty(key)){
//         console.log("key: ", key);
//         console.log("value: ", person[key]);

//     }
   
// }


// более соврмеенные методы делать итерацию по ключам и объекту:

// const keys = Object.keys(person);
// keys.forEach((key)=>{
//     console.log("key: ", key);
//      console.log("value: ", person[key]);
// })



// Context котнекст вызова this

// person.info();

const animal ={
    type:"dog",
    age:10,
    color:"black",
    owner:"Grisha",
    favoriteDishes:["meat","suga", "birds"],
}



const logger = {
    keys(){
        console.log("Object Keys:", Object.keys(this));
    },
    keyAndValues(){
        //  const keys = Object.keys(this);
        Object.keys(this).forEach((key)=>{
        //     console.log("key: ", key);
        // console.log("value: ", this[key]);
        // console.log(key,": ",this[key]); 1 вариант
        console.log(`"${key}": ${this[key]}`) // 2 вариант
        })
}
}
// c пом this можно вывести в console любой объект
// bind метод возвращает функцию (берет и привязывает контекст который мы сами выберем)
// const bound = logger.keys.bind(person);???????????????????????????
// bound(); ??????????????????????????????????????????????????????????
// call как bind но в функцию передавать не надо
logger.keyAndValues.call(animal);



