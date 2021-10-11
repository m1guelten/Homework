'use strict'

const array = () => {
  const data = [];
  let get = (i) => data[i];
  get.push = (x) => data.push(x);
  get.pop = () => data.pop();
 // get.nach = (x) => data.unshift(x);
  return get;
};

const arr2 = array();
arr2.push ('first');
console.dir (arr2(0),arr2(1),arr2(2));
arr2.push ('second');
console.dir (arr2(0),arr2(1),arr2(2));
arr2.push ('third');
console.dir (arr2(0),arr2(1),arr2(2));
arr2.pop ();
console.dir (arr2(0),arr2(1),arr2(2));

console.dir (arr2);