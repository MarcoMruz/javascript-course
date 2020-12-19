'use strict';

function f() {
    console.log(this);
}

let userBind = {
    g: f.bind(null)
};

userBind.g();

function fx() {
    console.log(this.name);
}

fx = fx.bind( {name: "John"} ).bind( {name: "Ann"} ); // cannot add additional bind to initial bind... can send just one this object

fx();

function sayHi() {
    console.log( this.name );
}

sayHi.test = 5;

let bound = sayHi.bind( {name: "John"} ); // bind creates new object so bound doesnt have defined test property

console.log( bound.test );

// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
// }

// let user = {
//     name: "John",

//     loginOk() {
//         alert(  this.name + " logged in" );
//     },

//     loginFailed() {
//         alert( this.name + " failed to log in" );
//     }
// };

//askPassword(user.loginOk.bind(user), user.loginFailed.bind(user)); // if want to access to 'this' object need to bind specific function and send chosen object

function askPasswordAgain(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let userAgain = {
    name: "John",

    login( result ) {
        alert( this.name + (result ? 'logged in' : 'failed to log in') );
    }
};

//both works
askPasswordAgain(() => userAgain.login(true), () => userAgain.login(false));
// askPasswordAgain( userAgain.login.bind(userAgain, true), userAgain.login.bind(userAgain, false) );