'use strict';

function printNumber(from, to) {
    let printedNumber = from;
    
    console.log(printedNumber);
 
    printedNumber++;

    if (printedNumber <= to) {
        setTimeout(printNumber, 1000, printedNumber, to);
    }
}

printNumber( 5, 10 );

function printNumberInterval(from, to) {
    let current = from;

    let timerId = setInterval(() => {
        console.log(current);

        if (current == to) {
            clearInterval(timerId);
        }

        current++;
    }, 1000);
}

printNumberInterval( 1, 5 );
