'use strict';

// const ground = new Image();
// ground.src = 'img/chess.jpg';
// const dices0 = new Image();
// dices0.src = 'img/dices.png';

const loadImages = (imageFiles) => {
  const images = new Map();
  for (const fileName of imageFiles) {
    const [name] = fileName.split('.');
    const image = 'img/' + fileName;//new Image();
   // image.src=
    images.set(name, image);
  }
  return images;
};

const spriteFiles = [
  'chess.jpg',
  'dices0.png',
  'dices1.png',
  'dices2.png',
  'dices3.png',
  'dices4.png',
  'dices5.png',
  'dices6.png',
  'checkersBlack.png',
  'checkersWhite.png',
];
const step=3;
const sprites = loadImages(spriteFiles);
console.log(sprites.get(`dices${step}`));
