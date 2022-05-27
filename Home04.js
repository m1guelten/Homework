'use strict';

/*const powr = (x, n) => {
  let i = -1;
  console.log(`i= ${i}, x= ${x}, n= ${n}`);
  if (n === 0) {
    i = 1;
  } else {
    i = x * powr(x, n - 1);

    console.log(`!!!i= ${i}, x= ${x}, n= ${n}`);
  }
  return i;
};*/
const powr2 = (x, n, p = 1) => {
  let i = -1;
  //let p = 1;
  console.log(`i= ${i}, x= ${x}, n= ${n}, p= ${p}`);
  if (n === 0) {
    i = p;
  } else {
    p *= x;
    i = powr2(x, n - 1, p);

    console.log(`!!!i= ${i}, x= ${x}, n= ${n}, p= ${p}`);
  }
  return i;
};
console.log(powr2(5, 4));
