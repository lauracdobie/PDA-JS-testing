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

});
