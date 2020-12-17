'use strict';

function sum(a) {
    return function (b) {
        return a + b;
    }
}

console.log( sum(2)(3) );

let phrase = "Hello";

if (true) {
    let name = "John";

    function sayHi() {
        alert(`${phrase}, ${name}`);
    }

    sayHi();
}

//sayHi();  will not work, dont have reference on function

function inBetween(min, max) {
    return function(x) {
        return x >= min && x <= max;
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

function inArray(arr) {
    return function(x) {
        return arr.includes(x);
    }
}

console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2

function makeCounter() {
    function counter() {
        return counter.count++;
    };

    counter.set = value => counter.count = value;

    counter.decrease = () => counter.count--;

    return counter;
}

let counter = makeCounter();

console.log( counter.set(20) );
console.log( counter.decrease() );
console.log( counter.count );

function summary(value) {
    let currSum = value;

    function f(b) {
        currSum += b;
        return f;
    };

    f.toString = function () {
        return currSum;
    }

    return f;
};

console.log( summary(1)(2)(3) );
