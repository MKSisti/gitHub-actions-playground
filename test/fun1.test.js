const f1 = require('../utils.js').fun1;

test('multiplies : 4 * 5 to equal 20', () => {
    expect(f1(4, 5)).toBe(20);
  });