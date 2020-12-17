"use strict";

function sumTo(number) {
  if (number == 1) {
    return 1;
  } else {
    return (number += sumTo(number - 1));
  }
}

console.log(sumTo(100));

function fib(n) {
  let a = 1,
    b = 1;

  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }

  return b;
}

console.log(fib(77));

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printList(list) {
    // recursive solution of printing linked list
//   console.log(list.value);
//   if (list.next) {
//     printList(list.next);
//   }

    // loop solution of printing
    let tmp = list; 

    while (tmp) {
        console.log(tmp.value);
        tmp = tmp.next;
    }
}

console.log(printList(list));
