'use strict';

class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        super.name = this.constructor.name;
        super.stack = this.stack;
    }
};

let err = new FormatError("formatting error");

console.log( err.message );
console.log( err.name );
console.log( err.stack );

console.log( err instanceof FormatError );
console.log( err instanceof SyntaxError );
