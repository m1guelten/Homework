'use strict'

// Get day number

let week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

 dayNumber= day =>{
  for(let i=0;i<week.length;i++){
    const dayLowerCase = day.toLowerCase();
    if(dayLowerCase.startsWith(week[i].toLowerCase())){
      return ++i;
    };
  };
  return -1;
};

console.log(dayNumber ('sunday'));
console.log(dayNumber ('Friday'));
console.log(dayNumber ('fri'));
console.log(dayNumber ('frid'));
console.log(dayNumber ('fr'));
console.log(dayNumber ('friday'));
console.log(dayNumber ('friday'));
