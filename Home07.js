'use strict';

// Check 4 digit pin.
const EXPECTED_PIN = '3456';
const checkPin = (...code) => code.join('') === EXPECTED_PIN;

// Impement function press
// that allows to enter pin code by one character,
// e.g. press('3').press('4').press('5').press('6')
const press = (args) => ({
    steps: [args],
    press(value) {
      this.steps.push(value);
      if (this.steps.length === 4) {
          return checkPin(this.steps.join (''));
      }
      return this;
    }
});
const c = press('3').press('4').press('5').press('6')
console.log(c)