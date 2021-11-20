'use strict';
/*
const removeElements = (array, ...items) => {
  for (const item of items){
    const index = array.indexOf(item);
    if (index !== -1) array.splice(index, 1);
  }
};

const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(array, 'Lima', 'Berlin', 'Kiev');
console.log(array);
// Результат: ['Beijing', 'Saratov']
*/

// Don't modify initial array

const unique = (array) => {
  const newArr = [];
  for (const item of array) {
    if (!newArr.includes(item)) {
      newArr.push(item);
    };
  };
  return newArr;
};

const difference = (array1, array2) => [];
