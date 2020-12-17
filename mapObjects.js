'use strict';

let john = { name:"John", surname: "Smith", id: 1 };
let marco = { name:"Marco", surname: "Mruz", id: 2 };
let marek = { name:"Marek", surname: "Mruz", id: 3 };

let users = [ john, marco, marek ];

let usersMapped = users.map(user => {
    user.fullName = user.name + ' ' + user.surname;
    delete user.name;
    delete user.surname;
    id: user.id;

    return user;
});

console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries(obj) {
    let arr = Object.values(obj);

    let sum = 0;
    arr.forEach(salary => sum += salary);

    return sum;
}

function countProperties(obj) {
    let arr = Object.keys(obj);

    return arr.length;
}

console.log( sumSalaries(salaries) );
console.log( countProperties(salaries) );