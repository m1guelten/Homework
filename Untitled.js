/*'use strict'

//#1
const multiply = function(a, b){
    let n=a*b;
    return n;
}
const add = function(multiply, c){
    let m=multiply+c
    return m;
}
console.log(add((36325,9824),777))

//#2
const areArraySame = function(a,b){
    return a===b;
}
console.log(areArraySame([5,7,9],[5,3,9]))
*/
//#3
'use strict';

const data = { name: 'Marcus Aurelius', city: 'Rome', born: 121 };

const person = new Proxy(data, {
  get(obj, key) {
    console.log('get', key);
    return obj[key];
  },
  set(obj, key, val) {
    console.log('set', key, val);
    obj[key] = val;
    return true;
  }
});

console.dir({ 'person.born': person.born });
console.dir({ 'person.year': person.year });

for (const key in person) {
  console.dir({ key: person[key] });
}

person.name = 'Marcus';