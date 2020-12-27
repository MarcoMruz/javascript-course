'use strict';

function currying(func) {
    return function(a) {
        return function(b) {
            return func(a, b);
        }
    }
}

function sum(a,b) {
    return a + b;
}

let curriedSum = currying(sum);

console.log( curriedSum(1)(2) ); // 3

// lodash function of curry
// lodash in vanilla js is used through script imported in html file

let curryFunc = _.curry(sum);

console.log( curryFunc(1)(2) );