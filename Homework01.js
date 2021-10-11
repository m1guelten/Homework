'use strict';

//1
const fn = () => {
  console.log({a});
  var a = 5;
};

//2
const inc=(n)=>{
  let a = n+1;
  return a;
}
const b = 52;
const c = inc(b);
console.dir({b,c});

//3
const inc=(num)=>{
  if (typeof num === 'object') {
    num.n = num.n+1;
  }
}
let num2 = {
  n:56,
  }
inc(num2);
console.dir (num2);
 // let a = n+1;
//  return a;

//4

let massiv =[ true, 'Hello', 5, 12, -200, false, false, 1, true, true, 7, 10, 'world', 'Dynamo', 'Kyiv', 'Finlandia'];
const countTypesInArray = (array) => {
  const obj = {
    number: 0,
    string: 0,
    boolean: 0,
  };
  for (const name of massiv) {
    if (typeof name === 'number'){obj.number++};
    if (typeof name === 'string'){obj.string++};
    if (typeof name === 'boolean'){obj.boolean++};
  }
  return obj;
};
console.log (countTypesInArray(massiv))
const square = () =>{console.log('Hell')}
let massiv =[ true, 'Hello', 5, 12, -200, false, false, 1, true, true, 7, 10, 'world', square, 'Dynamo', 'Kyiv', 'Finlandia'];
const countTypesInArray = (array) => {
  const obj = {};
  for (const name of massiv) {
    const type = typeof name;
    const count = obj[type] || 0;
    obj[type] = count+1;
    //if (typeof name === 'number'){obj.number++};
    //if (typeof name === 'string'){obj.string++};
    //if (typeof name === 'boolean'){obj.boolean++};
  }
  return obj;
};
console.log (countTypesInArray(massiv))