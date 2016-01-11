'use strict';
var JR = require('../JamesRandom.js');

describe('James Random generator for random numbers', function() {
  var jr;
  beforeEach(function() {
    jr = new JR();
  });
  it('is a class from JamesRandom constructor', function() {
    expect(jr.constructor).toBe(JR);
  });
  it('installs the seed', function() {
    var expectedSeed = new Date().getDate();
    expect(jr.theSeed).toBe(expectedSeed);
  });
});
