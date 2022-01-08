'use strict'

// Filter array by type name

const filter =(arr,type)=> {
  for (let i=0; i<arr.length; i++) {
    if (typeof arr[i] !== type){
      arr.splice(i, 1);
      i--;
    };
  };
  return arr;
};
 
//const result = filter();
console.log(filter([1, 2, 'three', 4, 5, 'six'], 'string'));
console.log(filter([1, 2, 'three', 4, 5, 'six'], 'number'));
  