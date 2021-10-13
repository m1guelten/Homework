'use strict';

/*/1
const power = (exp, n) => {
    return Math.pow(n, exp);
};
const square = (x) =>{
    return power (2, x);
};
console.log (square (5));
const cub = power.bind (null, 3); 
console.log (cub (3));
*/

//2
/*const coffee = (volume, strength) =>
  `Coffee volume: ${volume}ml, strength: ${strength}`;

const defineCoffeeType = volume => strength => coffee(volume, strength);

// Use function defineCoffeeType to define new coffee types.
// Define coffee type espresso which volume should equal 50ml.
// Define coffee type americano which volume should equal 150ml.

const espresso = defineCoffeeType(50)('very strong');
const americano = defineCoffeeType (150)('strong');
//console.log (espresso);
//console.log (americano);

//3
const tagged = (pref, str) => `[${pref}] ${str}`;
const tagDate = (str) => {
    const date = new Date();
  //const day = date.getDate();
  //const month = date.getMonth() + 1;
  //const year = date.getFullYear();
  //const data = `${year}-${month}-${day}`;
    const data = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
  return tagged(data, str);
};
console.log (tagDate('My string'));
//tagDate ();
//console.log (tagged('2021-10-11','My string'));

//4

  Generalized mean (Hölder mean)
  Given n numbers a₁, a₂, ... an
  Define Hk (for k != 0) as the k-th root of the arithmetic mean
  of the k-th power of a set of numbers
  Hk = ᵏ√ (a₁ᵏ + a₂ᵏ + ... + anᵏ) / n


const H = (exp, ...args) => {
  const sum = args.reduce((s, a) => (s + Math.pow(a, exp)), 0);
  const avg = sum / args.length;
  return Math.pow(avg, (1 / exp));
};

// Use method bind() to create new functions from function H.
// Create function `average` that returns arithmetic mean (H₁) of the arguments.
// Create function `rootMeanSquare` that returns quadratic mean (H₂).

const average = H.bind (null, 1);
const rootMeanSquare = H.bind(null, 2);
console.log (average(1,2,3,4))
console.log (rootMeanSquare(1,2,3,4))*/

//5

/*
// Check 4 digit pin.
const EXPECTED_PIN = '1234';
const checkPin = (...code) => code.join('') === EXPECTED_PIN;
//console.log(typeof checkPin)
// Define function curry that accepts the length of the function
// (amount of function arguments) and the function.

//const curry = (length, fn) => (...args) => null;
const curry = (length, fn) => (...args) => {
  console.log (`length= ${length}  args= ${args.length}`);
  if (length > args.length) {
    const a = fn.bind (null, ...args);
    return curry (length-args.length,a);
  } else {
    return fn (...args);
  };
};

// Allows to enter pin code by one character,
// Usage: press('3')('4')('5')('6')
//const press = curry(4, checkPin);
//console.log (press('1')('2','3')('4'))
*/
//6

// Check 4 digit pin.
const EXPECTED_PIN = '4967';
const checkPin = (...code) => code.join('') === EXPECTED_PIN;

//console.log (checkPin(4967));

// Impement function press
// that allows to enter pin code by one character,
// e.g. press('3').press('4').press('5').press('6')
//
// For hint use https://github.com/HowProgrammingWorks/Cheatsheet

//const press = null;
const press =(args)=>({
  steps:[args],
  press (value){
    this.steps.push(value);
    if (this.steps.length === 4){
      return checkPin();
    }
    return this;
  } 
});
console.log(press('3').press('4').press('5').press('6'));
console.log(press('4').press('9').press('6').press('7'));