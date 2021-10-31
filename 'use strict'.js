'use strict'

const words = ([
    "Dynamo", "Bayern", "Juventus", "Barcelona"]);
const word = words[Math.floor(Math.random()*words.length)];
console.log (word)
/*let answerArray = [];
for (let i=0; i<word.length; i++){
    answerArray[i] = "_";
}
let remainingLetters = word.length
while (remainingLetters>0){
    console.log (answerArray.join(""));
    let guess = console.log('Введіть букву, виродки!!!');
    if (guess === null) {
        break;
    } else if (guess.length !== 1){
        console.log ('Гнида, одну літеру, не більше, мразота!!!')
    } else {
        for (let j=0;j<word.length; j++){
            if (word[j] === guess){
            remainingLetters--;
            }
        }
    }
}
console.log(answerArray.join(""));
console.log("Пробачай! Ти не виродок, ти топ шариш цю хрень"+word)