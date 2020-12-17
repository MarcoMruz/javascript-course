'use strict';

let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

let {name, age: years, isAdmin = false} = user;

console.log(name);
console.log(years);
console.log(isAdmin);

let salaries = {
    "John": 100,
    "Pete": 250,
    "Mary": 300
};

function topSalary(salaries) {
    let maxSalary = 0;
    let maxName = null;

    for (const [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary;
            maxName = name;
        }
    }

    return maxName;
}

console.log( topSalary(salaries) );