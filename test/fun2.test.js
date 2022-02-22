const f2 = require('../utils.js').fun2;

test('adds : 100 + 125 to equal 225', () => {
    expect(f2(100, 125)).toBe(225);
  });