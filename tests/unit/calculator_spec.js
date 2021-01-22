var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add 1 to 4 and get 5', function(){
    calculator.previousTotal = 1;
    // Passing in 4 because we want to add 4 to 1
    calculator.add(4)
    // Check that calculator's running total is now 5
    assert.strictEqual(calculator.runningTotal, 5);
  })

  it('can subtract 4 from 7 and get 3', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4)
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('can multiply 3 by 5 and get 15', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5)
    assert.strictEqual(calculator.runningTotal, 15);
  })

  it('divide 21 by 7 and get 3', function(){
    calculator.previousTotal = 21;
    calculator.divide(7)
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('should concatenate multiple number button clicks', function(){
    calculator.runningTotal = 0;
    calculator.numberClick(2);
    calculator.numberClick(7);
    assert.strictEqual(calculator.runningTotal, 27);
  })


});
