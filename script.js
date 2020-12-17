'use strict';

let power = function pow(x, n) {
    let result = x**n;
    return result;
}

console.log(power(2,3));

let answer = (question, yes, no) => confirm(question) ? yes() : no();

console.log(answer("Do you agree", ()=> alert("for sure"), ()=> alert("nope")));

// sum salaries of employees

let salaries = {
    John: 0,
    Ann: 0,
    Pete: 0
}

let sum = 0;

for (let key in salaries) {
    sum += salaries[key];
}

console.log("Total sum of salaries is ", sum);

// multiply numeric

function multiplyNumeric(obj) {
    for (const key in obj) {
        typeof obj[key] == 'number' ? obj[key] = obj[key]*2 : obj[key];
    }
}

let menu = {
    width: 100,
    height: 300,
    name: "my menu"
}

multiplyNumeric(menu);

console.log(menu);

// working with objects

function makeUser() {
    return {
        name: "John",
        go: function() { console.log(this.name) },
        ref: this
    };
};

// getting what is saved in this in object

let admin = {
    name: "John",
    go: () => { console.log(this.ref) },
    ref: this
}

admin.go();

// working with methods in objects

function Calculator() {
    this.read = function() { 
        this.val1 = prompt("Add first value thanks", '');
        this.val2 = prompt("Add second value", '');
    };
    this.val1 = '';
    this.val2 = '';
    this.sum = function() {
        return (+this.val1 + +this.val2);
    };
    this.mul = function() { return this.val1 * this.val2 }
};

let calculator = new Calculator();

calculator.read();

console.log(calculator.sum());
console.log(calculator.mul());

// chaining methods from object

let ladder = {
    step: 0,
    up() { this.step++; return this; },
    down() { this.step--; return this; },
    showStep() { console.log(this.step); return this; }
};

ladder.up().up().down().showStep();

// conversion in objects

let user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        alert(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
}

alert(user);
alert(+user);
alert(user + 500);

// objects as constructors

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt("Add value to initial value", '');
    };
}

let accumulator = new Accumulator(5);

accumulator.read();
accumulator.read();

console.log(accumulator.value);

// convert between numeral systems

let num = 255;

console.log(num.toString(16)); // convert to hexadecimal
console.log(num.toString(2)); // convert to binary

console.log(123456789..toString(36));

console.log(parseInt('ff', 16)); // convert from hexadecimal

console.log(parseInt('2n9c', 36)); // convert from 36 system

// checks if entered value is number

function readNumber() {
    let enteredValue;
    do {
        enteredValue = prompt("Write something here and i will check if it is number", '');
    } while(isNaN(enteredValue))

    return Number(enteredValue);
}

console.log(readNumber());

// changing precision of entered number

console.log(readNumber().toFixed(0));

// working with strings

function checkSpam(str) {
    let helper = String(str);

    helper.toLowerCase();

    let containsSpam = helper.includes("viagra") || helper.includes("xxx") ? true : false;

    return containsSpam;
}

console.log(checkSpam("Innocent rabbit"));

// truncating string

function truncate(str, maxlength) {
    let result = str.length > maxlength ? str.slice(0, maxlength) + '...' : str;

    return result;
}

console.log(truncate("Kokotko", 3));

// extracting substring from string

function extractCurrencyValue(str) {
    return str.slice(1,str.length);
}

function extractCurrencyFromNumber(str) {
    let positionOfCurrency = str.indexOf('$', 0);
    let result = str.replace(str[positionOfCurrency], '');

    return result;
}

console.log(extractCurrencyFromNumber("$120"));
console.log(extractCurrencyValue("$120"));

// arrays

let arr = ["a", "b"];

arr.push(function() {
    alert(this);
});

arr[2]();

function getMaxSubSum(arr) {
    let max = 0;
    let currentMax = 0;
    
    for(let i=0; i<arr.length;i++) {
        currentMax = 0;
        for (let j = i;j<arr.length;j++) {
            currentMax += arr[j];
            if (max < currentMax) {
                max = currentMax;
            }
        }
    }

    return max;
}

console.log(getMaxSubSum([2, -1, 2, 3, -9]));