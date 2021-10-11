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
const coffee = (volume, strength) =>
  `Coffee volume: ${volume}ml, strength: ${strength}`;

const defineCoffeeType = volume => strength => coffee(volume, strength);

// Use function defineCoffeeType to define new coffee types.
// Define coffee type espresso which volume should equal 50ml.
// Define coffee type americano which volume should equal 150ml.

const espresso = defineCoffeeType(50)('very strong');
const americano = defineCoffeeType (150)('strong');
//console.log (espresso);
//console.log (americano);

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
