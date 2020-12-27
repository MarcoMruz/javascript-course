'use strict';

let numbers = [1,2,3];

numbers = new Proxy(numbers, {
    get(target, prop) {
        if (prop in target) {
            return target[prop];
        } else {
            return 0;
        }
    },

    set(target, prop, value) {
        if (typeof value == 'number') {
            target[prop] = value;
            return true; // must return true... if not always set will return false and typeError
        } else {
            return false;
        }
    }
});

console.log(numbers[1]);
numbers.push(4)

console.log(numbers);

// try {
//     numbers.push('test')
// } catch (error) {
//     console.error('Bad data type wanted to add into an array');
// }

let user = {
    name: "Admin",
    _password: "****"
};

// everything that starts with _ will throw error and cannot be changed, accessed or deleted

user = new Proxy(user, {
    get(target, prop) {
        let value = target[prop];
        if (prop.startsWith('_')) {
            if (typeof value == "function") { // if _property is needed to be accessed by function
                value.bind(target);
            } else {
                throw new Error("Access denied");
            }
        } else {
            return target[prop];
        }
    },

    set(target, prop, value) {
        if (prop.startsWith('_')) {
            throw new Error("Access denied");
        } else {
            target[prop] = value;
            return true;
        }
    },

    ownKeys(target) {
        return Object.keys(target).filter(key => !key.startsWith('_'));
    },

    deleteProperty(target, prop) {
        if (prop.startsWith('_')) {
            throw new Error("Access denied");
        } else {
            delete target[prop];
            return true;
        }
    }
});

// console.log( user._password ); // throw error Access denied
// user._password = "changePassword"; // Access denied
user.name = "John"; // changed without problems
console.log(user);


let range = {
    from: 1,
    to: 10
};

range = new Proxy(range, {
    has(target, prop) {
        return prop >= target.from && prop <= target.to;
    }
});

console.log( 5 in range ); // true
console.log( 50 in range ); // false

// class User {
//     #name = "Guest"; // not compatible on safari

//     getName() {
//         return this.#name;
//     }
// }

// let guest = new User();

// guest = new Proxy(guest, {
//     get(target, prop, receiver) {
//         let value = Reflect.get(...arguments);

//         return typeof value == 'function' ? value.bind(target) : value;
//     }
// });

// console.log( guest.getName() );

function wrap(target) {
    return new Proxy(target, {
        get(target, prop, receiver) {
            if( prop in target ) {
                return Reflect.get(...arguments); 
            } else {
                throw new Error('Property does not exists');
            }
        }
    });
}

user = wrap(user);

console.log( user.name ); // will show without problem
// console.log( user._password ); // access denied user is in more than one proxy
// console.log( user.age ); // throw new error

let array = [1, 2, 3];

array = new Proxy(array, {
    get(target, prop, receiver) {
        if (+prop < 0) {
            return target[target.length + +prop];
        } else {
            return Reflect.get(...arguments);
        }
    }
});

console.log( array[1] );

let handlers = Symbol('handlers'); // variable is used to store function added by observe function to object (person)

function makeObservable(target) {
    target[handlers] = [];

    target.observe = function(handler) {
        this[handlers].push(handler);
    }

    return new Proxy(target, {
        set(target, prop, value, receiver) {
            let success = Reflect.set(...arguments);

            if (success) {
                target[handlers].forEach(handler => handler(prop, value));
            }

            console.log(target);

            return success;
        }
    });
}

let person = {};

person = makeObservable(person);

person.observe((key, value) => {
    alert('Set ' + key + ' = ' + value);
});

person.name = "John";