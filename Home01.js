'use strict';

//#1-#3

let name = 'Misha';
const date = '2004';

const po4atok = (name) => {
    console.log(`Hello, ${name}`);
};
po4atok(name);

//#4

let startNumber = 15;
let endNumber = 30;
const range = (startNumber, endNumber) => {
    let massiv = [];
    for (startNumber; startNumber <= endNumber; startNumber++) {
        massiv.push (startNumber);      
    }
console.log (massiv);
};
range (startNumber,endNumber);

//#5

const rangeOdd = (startNumber, endNumber) => {
    let massiv = [];
    for (startNumber; startNumber <= endNumber; startNumber++) {
        if (startNumber %2 !== 0) massiv.push (startNumber);      
    }
console.log (massiv);
};
rangeOdd (startNumber,endNumber);

//#6

const average = (a, b) => {
    let c=(a+b)/2;   
    console.log (`Середнє арифметичне чисел a = ${a} та b = ${b} становить ${c}`);
    return c;
};

const square = (x) => {
    let z = x*x;
    console.log (`Квадрат числа х = ${x} становить ${z}`);
    return z;
};
square (5);

let cube = (x) => {
    let y = x*x*x;
    console.log (`Куб числа х = ${x} становить ${y}`);
    return y;
};
cube (5);

let calculate = (startNumber2, endNumber2) => {
    let massiv2 = [];
    for (startNumber2; startNumber2 <= endNumber2; startNumber2++) {
        massiv2.push (average (cube(startNumber2), square (startNumber2)));      
    };
console.log (massiv2);
};
calculate (0, 9);

//#7

const fn = () => {
    const obj1 = {name: 'Miguel',city: 'Kyiv'};
    let obj2 = {name: 'Miguel'};
    console.log (obj1);
    console.log (obj2);
    obj1.name = 'Potapenko';
    obj2.name = 'Potapenko';
    console.log (obj1);
    console.log (obj2);
 //   obj1 = {name: 'Misha Potapenko'};
    obj2 = {name: 'Misha Potapenko'};
    console.log (obj2);
};
fn();

//#8

const createUser = (a,b) =>{
    let obj1={name:a,city:b};
    console.log (obj1);
};

createUser('Marcus Aurelius','Kyiv');

//#9

const massiv = [
    {name: 'Miguel', phone: '0954824857'},
    {name: 'Vova', phone: '0954824858'},
    {name: 'Olesya', phone: '0954824859'},
    {name: 'Vitaliy', phone: '0954824743'},
    {name: 'Ivan', phone: '0954824677'},
];

const findPhoneByName = (name) => {
    for (let i = 0; i<massiv.length; i++) {
        if (massiv[i].name === name) {
            console.log (massiv[i]);
            return;
        };
    };
};
findPhoneByName ('Ivan');

const findPhoneByName2 = (name) => {
    for (const obj of massiv) {
        if (obj.name === name)  return obj.phone;
        };
    };
 console.log (`Ivan phone =  ${findPhoneByName2 ('Ivan')}`);