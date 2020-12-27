'use strict';

function benchmark() {
    return Date.now();
}

let animal = {
    jumps: null
};

let rabbit = {
    __proto__: animal,
    jumps: true
}

console.log( rabbit.jumps );

delete rabbit.jumps

console.log( rabbit.jumps );

delete animal.jumps

console.log( rabbit.jumps );

// searching algorithm

let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

let pockets = {
    money: 2000,
    __proto__: bed
};

// when getting pockets.glasses is not slower than head.glasses because of engine optimalization

let hamster = {
    stomach: [],
    eat(food) {
        this.stomach = [food];
    }
}

let speedy = {
    // stomach: [],
    __proto__: hamster,
};

let lazy = {
    // stomach: [],
    __proto__: hamster
};

speedy.eat("apple");

console.log(speedy.stomach);
console.log(lazy.stomach);

// changing prototype of object

function Rabbit() {
    this.eats = true
};

let horse = new Rabbit();

console.log( horse.eats );

let obj = new horse.constructor();

console.log(obj.eats);

// adding methods to function prototype

Function.prototype.defer = function(ms) {
    let f = this;

    return function(...args) {
        setTimeout(() => 
            f.apply(this, args)
        , ms);
    };
}

function f(a, b) {
    console.log(a + b);
}

f.defer(1000)(1, 2);

let dictionary = Object.create(null, {
    toString: {
        value() {
            return Object.keys(this).join(',');
        }
    }
});

dictionary.apple = "Apple";
dictionary.__proto__ = "test";

for( let key in dictionary ) {
    console.log( key );
}

console.log( dictionary );

function Frog(name) {
    this.name = name;
}

Frog.prototype.sayHi = function() {
    console.log(this.name);
};

let frog = new Frog("Shrek");

frog.sayHi();
Frog.prototype.sayHi();
Object.getPrototypeOf(frog).sayHi();
frog.__proto__.sayHi();
