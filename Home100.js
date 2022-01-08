'use strict';

const name = 'James';
for (let i = 0; i < 5; i++) {
  let d = i + 3;
}
const person = { first: name };

console.log(person);

const sayHelloLinting = (fName) => {
  console.log(`Hello linting, ${fName}`);
};

sayHelloLinting('James');
