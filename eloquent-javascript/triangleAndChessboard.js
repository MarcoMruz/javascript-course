"use strict";

const triangle = function () {
  let str = "";
  for (let i = 0; i < 7; i++) {
    str += "#";
    console.log(str);
  }
};

const chessBoard = function (width, height) {
  let str = "";
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if ((i + j) % 2 === 0) {
        str += " ";
      } else {
        str += "#";
      }
    }
    str += "\n";
  }
  return str;
};

console.log(chessBoard(8, 7));
