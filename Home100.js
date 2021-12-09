'use strict';

//#1
const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;


const pipe = (...fns) => {
  for (const f of fns) {
    if (typeof f !== 'function') {
      throw new Error('Argument is not function');
    }
  }
  return x => fns.reduce((v, f) => f(v), x);
};



const f = pipe(inc,twice,cube);
const f2 = pipe(inc,inc);
const f3 = pipe(inc,7,cube);
console.log(`pipe(inc,twice,cube)= ${f(5)}`);
console.log(`pipe(inc,inc)= ${f2(7)}`);
//console.log(`pipe(inc,7,cube)= ${f3(9)}`);

//#2
const compose = (...fns) => {
  const handlers = {};
  const comp = x => {
    if (fns.length === 0) {
      return x;
    }
    let res = x;
    try {
      for (let i = (fns.length -1); i >= 0; i--) {
        res = fns[i](res);
      }
      return res;
    } 
    catch (error) {
    handlers.error=error;
    }    
  };
  comp.on = (name) => {
    if (name === 'error'){return handlers.error};
  }
  return comp;
};
