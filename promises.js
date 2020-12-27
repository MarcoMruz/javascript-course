'use strict';

let promise = new Promise(function (resolve, reject) {
    resolve(1);

    setTimeout(() => resolve(2), 1000);
});

promise.then(console.log);

function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

delay(3000).then(() => console.log('runs after 3 seconds'));

// this error is not caught because is schedule later and promise is executed immidiately
new Promise(function(resolve, reject) {
    setTimeout(() => {
        throw new Error("Whoops!");
    }, 1000);
}).catch(alert);

// when scheduling code for example using setTimeout then it is needed to return promise inside the scheduler
setTimeout(() => {
    return new Promise(function(resolve, reject) {
        throw new Error("Whoops");
    }).catch(alert);
}, 1000);
