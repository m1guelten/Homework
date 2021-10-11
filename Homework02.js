'use strict';

/*
const curry = (fn) => (...args) => {
    console.log (`fn.length= ${fn.length}  args.length= ${args.length}`);
    if (fn.length > args.length) {
      const f = fn.bind(null, ...args);
      return curry(f);
    } else {
      return fn(...args);
    }
  };
*/
 // 
/*
const curry = (fn) => (...args) => (
    fn.length > args.length ? 
    curry (((fn, ...args1) => (...args2) => (fn(...args1.concat(args2))))(fn, ...args))
    : fn(...args)
  );
  */
  // Usage
  /*
  const sum4 = (a, b, c, d) => (a + b + c + d);
  
  const f = curry(sum4);
  console.log (typeof f)
  const y1 = sum4(1, 2, 3, 4);
  const y21 = f(1, 2, 3)(4, 5);
  const y22 = f(4,5,4)(2);
  const y2 =f(10);
  //console.log (`y21= ${y21}`);
    //const y3 = f(1, 2, 3)(4);
  //const y4 = f(1, 2)(3)(4);
  //const y5 = f(1)(2)(3)(4);
  //const y6 = f(1)(2, 3, 4);
  //const y7 = f(1)(2)(3, 4);
  //const y8 = f(1, 2)(3, 4);
  //console.log(y4);
  console.log(y1, y21,y22/*, y3, y6, y8);
  
  */

  const power =(exp,n)=>{
      return Math.pow (n,exp);
  }
  console.log (power(2,5));
//  const square =(n)=>power(2,n);
 // const cube =(n)=>power(3,n)
  const create = (exp) => (n) => power(exp, n);
  const square =create(2);
  const cube =create(3)


  console.log (square(5));
console.log (cube(5));


