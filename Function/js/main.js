'use strict';

let num = 20;

function showFirstMessage(text) {
  console.log(text);
  // let num = 10;
  console.log(num);
}

showFirstMessage('Hello world');
console.log(num);

// function calc(a, b) {
//   return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));

function ret() {
  let num = 50;
  return num;
}

const anotherNume = ret();
console.log(anotherNume);

const logger = function () {
    console.log('Hello');
};

logger();

const calc = (a, b) => a + b;
console.log(calc(2, 2));

const usdCurr = 28;
const eurCurr = 32;

function convert(amount, curr) {
  console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);