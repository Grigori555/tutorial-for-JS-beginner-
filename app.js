// Обьекты

const person = {
    name:"Grisha",
    age:29,
    isBegginnerJS: true,
    skills: ["speaking", "letter", "memory"],
    "complex key": "Complex Value",
    ["Key" +( 1+3) ]: 'Computed Key',
    // greet: function(){
         
    // }
    greet(){
        console.log("greet from person")
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


const {name, age, skills} = person;
console.log(name, age, skills);