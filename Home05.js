'use strict';

//1
/*const fn = () => {
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
console.dir({b,c});*/

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