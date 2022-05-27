'use strict';

const MAX_NUMBER_MOVES = 32;
const FULL_CIRCLE = 28;
const MAX_MOVE_DOWN = 7;
const MAX_MOVE_RIGHT = 14;
const MAX_MOVE_UP = 21;
const BIAS = 14;
const ST_X = 0;
const ST_Y = 0;
const BOX = 1;

const koordB = new Array(MAX_NUMBER_MOVES);
const koordW = new Array(MAX_NUMBER_MOVES);

for (let i = 0; i <= FULL_CIRCLE; i++) {
  if (i <= MAX_MOVE_DOWN) koordB[i] = { x: ST_X, y: ST_Y + BOX * i };
  else if (i <= MAX_MOVE_RIGHT)
    koordB[i] = { x: ST_X + BOX * (i - MAX_MOVE_DOWN), y: ST_Y + BOX * MAX_MOVE_DOWN };
  else if (i <= MAX_MOVE_UP)
    koordB[i] = { x: ST_X + BOX * MAX_MOVE_DOWN, y: ST_Y + BOX * (MAX_MOVE_UP - i) };
  else koordB[i] = { x: ST_X + BOX * (FULL_CIRCLE - i), y: ST_Y };
  i < BIAS ? (koordW[i + BIAS] = koordB[i]) : (koordW[i - BIAS] = koordB[i]);
}
koordW[FULL_CIRCLE] = koordW[0];
for (let i = 1; i < MAX_NUMBER_MOVES - FULL_CIRCLE; i++) {
  koordB[i + FULL_CIRCLE] = { x: ST_X + BOX * i, y: ST_Y + BOX * i };
  koordW[i + FULL_CIRCLE] = {
    x: ST_X + BOX * (MAX_MOVE_DOWN - i),
    y: ST_Y + BOX * (MAX_MOVE_DOWN - i),
  };
}
for (let i = 0; i < 32; i++) {
  console.log(`${i} Bx=${koordB[i].x} y=${koordB[i].y} Wx=${koordW[i].x} y=${koordW[i].y}`);
}
