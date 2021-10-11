'use strict'


//#1
const random =(min=0,max) => {
    if (max === undefined) {
        max = min;
        min = 0;
    };
    let x = Math.floor (Math.random()*(max-min)+min);
    console.log (`Випадкове значення від ${min} до ${max} становить ${x}`);
    return x;
};
//random (345);
//random (567,23456)

//#2
const generateKey = (length, characters) => {
    let y = characters.split ('');
    let massiv =[];
    for (let i=1;i<=length;i++) {
        let z = Math.floor (Math.random()*(y.length-1));
        massiv.push(y[z]);
    };
   return massiv.join('');
};
//console.log (generateKey (12, 'asdfghjk23456789'));
//generateKey (12, 'asdfghjk23456789');
//generateKey (5, 'mgkb3r46');

//#3

const ipZmin=(text='127.0.0.1')=>{
    let b=text.split('.');
//    console.log(b);
    const zsuvLeft = (value, rozryad, number=1) =>{
        for (let i=1; i<=number;i++){
        let r = value << rozryad;
        value = r;
        };
    return value;
    };
//    let massiv2=[];
    let massiv3=[];
    let j = 3;
    for (let i=0;i<4;i++) {          
        let f = parseInt(b[i],10);
//      massiv2.push (f);
        massiv3.push (zsuvLeft(f,8,j--));
    };    
//   console.log (massiv2);
    console.log (massiv3);
    let sum = massiv3.reduce(function (a,b){return a+b;});
    return sum; 
};
//console.log (ipZmin('10.0.0.1'));
//ipZmin('192.168.1.10');
//ipZmin('165.225.133.150');
//console.log(ipZmin());



//#4

const iface = {
    city: 'Kyiv',
    club: 'Dynamo',
    year: 1927,
    a1: x => [x],
    a2: function (x, y) {
        return [x, y];
    },
    a3(x, y, z) {
        return [x, y, z];
    }
}
//console.log (iface);
const method = (iface) => { 
    let massiv = [];
    for (const name in iface) {
        const mt = iface[name];
        if (typeof mt==='function') {
            massiv.push ([name, mt.length]);
        }
    }
    return massiv;
}
//method (iface);
console.log (method(iface)[0],method);

