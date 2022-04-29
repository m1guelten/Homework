'use strict';
const data = ['abc', 'defg', 'hijklmn', 'opqrst', 'u', 'v', 'xyz'];

function testIndexOf() {
  return [
    data.indexOf('opqrst') !== -1,
    data.indexOf('qwerty') !== -1,
    data.indexOf('v') !== -1,
  ];
}
console.log(testIndexOf());
//**************************************************
function testIncludes() {
  return [data.includes('opqrst'), data.includes('qwerty'), data.includes('v')];
}
console.log(testIncludes());
