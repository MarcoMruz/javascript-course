'use strict';

class ExtendedClock extends Clock {
    constructor({template}, precision = 1000) {
        super({template});
        this.precision = precision;
    }

    start() {
        super.render();
        super.timer = setInterval(() => super.render(), this.precision);
    }
};

let extendedClock = new ExtendedClock({template: 'h:m:s'}, 1000);

extendedClock.start();

setTimeout(() => extendedClock.stop(), 3000);
