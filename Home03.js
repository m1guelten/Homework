'use strict'
/*
/*const a = sum(1, 2, 3) // a === 6
const b = sum(0) // b === 0
const c = sum() // c === 0
const d = sum(1, -1, 1) // d === 1
//const e = sum(10, -1, -1, -1) // e === 7

//5.1
const sum = (...args) => {
    let value = 0;
    for (let i = 0; i < args.length; i++) {
        value += args[i];
        }
    return value;
}
//console.log (sum(10,-1,-1,-1)

//5.2
const sum = (...args) => {
    let value = 0;
    for (const a of args) {
        value += a;
        }
    return value;
}
//console.log (sum());

//5.3
const sum = (...args) => {
    let i = 0;
    let value = 0;
    while (i < args.length) {
        value += args[i];
        i++;
    }
    return value;
}
//console.log (sum());

//5.4
const sum = (...args) => {
    if (args.length === 0) return 0;
    let i = 0;
    let value = 0;
    do{
        value += args[i];
        i++;
    } while (i <=args.length);
    return value;
}
/*console.log (sum(10,-1,-1,-1));
console.log (sum(0))
console.log (sum())

//5.5
const sum = (...args) => {
    if (args.length === 0) return 0;
    let value = args.reduce(function (a,b){return a+b}); 
    return value.reduce();
}
//console.log (sum(10,-1,-1,-1));
//console.log (sum(0))
//console.log (sum())

//6
//const m = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const max = (element) => {
    let result = element[0][0];
    for (let i=0; i<element.length;i++){
       // console.log (element[i]);
        for (const value of element[i]) {
            if (result<value) result=value;
         //   console.log(`value= ${value}, result= ${result}`);
        } 
    }
    return result;
} 
//console.log (max(m));

const max = (...element) => {
    const massiv=element.join(',').split(',');
//  console.log (massiv);
    let result = massiv[0];
    for (const value of massiv) {
        if (result<value) result=value;
 //     console.log(`value= ${value}, result= ${result}`);
    }
    return result;
} 
//console.log (max2(m));
*/
//7

const persons = {
    Lenin: {born: 1870, died: 1924},
    Mao: {born: 1893, died: 1976},
    Gandhi: {born: 1869, died: 1948},
    Hirohito: {born: 1901, died: 1989},
}
//const ages={};
//ages.city=123;

const ages = (person) => {
    const ages = {};
    for (const name in person) {
        console.log (`name pri in = ${name}`);
        let age=persons[name].died-persons[name].born;
        console.log (`age = ${age}`); 
        ages[name]=age;
        console.log (ages);
    }
    return ages;
}
console.log (ages(persons));