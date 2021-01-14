"use strict";

function min(a, b) {
  return a < b ? a : b;
}

console.log(min(4, 3));

function isEven(num) {
  if (num === 1) return false;

  if (num === 0) return true;

  if (num < 0) return isEven(-num);

  return isEven(num - 2);
}

console.log(isEven(-11));

function countBs(str) {
  return countChar(str, "B");
}

console.log(countBs("Hello BaBy"));

function countChar(str, letter) {
  let count = 0;
  for (const char of str) {
    if (char === letter) count++;
  }

  return count;
}
