'use strict';

let num = +prompt("Enter nonegative number", 35);

let diff, result;

function fib(n) {
    if (n < 0 || Math.trunc(n) != n) {
        throw new Error("Must be a nonnegative number and also integer");
    }
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();

try {
    result = fib(num);
} catch (err) {
    result = 0;
} finally {
    diff = Date.now() - start;
}

console.log( result );

console.log( `execution took ${diff}ms` );