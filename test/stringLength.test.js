const stringLength = require('../stringLength');

test('string length', () => {
  expect(stringLength('hola')).toBe(4);
});

test('throw error when string length is greater than 10', () => {
  expect(() => {
    stringLength('hello world');
  }).toThrow('Error Message');
});

test('throw error when string length is less than 1', () => {
  expect(() => {
    stringLength('');
  }).toThrow('Error Message');
});