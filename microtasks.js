'use strict';

let promise = Promise.resolve();

promise.then(() => console.log("resolved code"));

console.log("finished code"); // this log shows before then code block