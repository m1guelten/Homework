'use strict'

//1
/*
const iterate = (object, callback) => {
  for (const key in object) {
    callback(key,object[key],object);
  }
};

const numlet = {
    a: 1,
    b: 2,
    c: 3,
};
//console.log (numlet.a);
const print = (key2,value2,object2) => {
    console.log('Key:',key2, ',value:', value2,',object', object2 );
  };

iterate(numlet,print);
*/

//2

//const store = x => () => x;
//const read = store(5);
//const value = read();
//console.log (value)
//store (6)

//3
  
const contract = (fn, ...types) => (...args) => {
    for(let i=0; i<args.length;i++){
        const arg = args[i];
        const tip = types[i];
        const name1 = tip.name.toLowerCase();
        if (name1 !== typeof arg) {
            throw new TypeError(`Argument type ${name1} expected`);
        }; 
    };
    const res = fn(...args);
    const typ = types[args.length];
    const name2 = typ.name.toLowerCase();
    if (name2 !== typeof res){ 
        throw new TypeError(`Result type ${name2} expected`);
    };
    return res;
};
  
const add = (a,b) => a+b;
const addNumbers = contract(add,Number,Number,Number);
const res = addNumbers(2,5);
console.dir (res);
const concat = (s1,s2) => s1+s2;
const concatString = contract(concat,String,String,String);
const res1 = concatString('Hello ','world!');
console.dir (res1);

/*
const logable = fn => (...args) => {
    const res = fn(...args);
    console.log(`Call: ${fn.name}(${args.join(', ')}) Result: ${res}`);
    return res;
  };
  
  // Usage
  
  const sum = (a, b) => a + b;
  
  const logableSum = logable(sum);
  const a = logableSum(3, 5);
  const b = logableSum(7, 2);
  const c = logableSum(1, -1);
  console.dir({ a, b, c });
 console.log(`types=${types.length} args=${args.length}`);
    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
  //    console.log ('typeof arg = '+typeof arg);
      const def = types[i];
  //    console.log (def.name)
      const name5 = def.name.toLowerCase();
  //    console.log(`arg=${arg} def=${def} name=${name5}`);
      if (typeof arg !== name5) {
      //  throw new TypeError(`Argument type ${name5} expected`);
      }
    }
    const res = fn(...args);
    const def = types[args.length];
    //console.log (`types= ${types}  \nres=${res} args.length ${args.length} def=${def}`);
    const name = def.name.toLowerCase();
    if (typeof res !== name) {
      //throw new TypeError(`Result type ${name} expected`);
    }
    return res;
  };
  


  */