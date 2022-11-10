const reverseString = require('../reverseString');

test('reverse string HOLA', () => {
  expect(reverseString('hola')).toEqual('aloh');
});

test('reverse string HELLO WORLD', () => {
  expect(reverseString('hello world')).toEqual('dlrow olleh');
});