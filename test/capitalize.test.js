const capitalize = require('../capitalize');

describe('capitalize', () => {
  test('capitalize string HOLA', () => {
    expect(capitalize('hola')).toEqual('Hola');
  });

  test('capitalize string BIENVENIDO', () => {
    expect(capitalize('bienvenido')).toEqual('Bienvenido');
  });

  test('capitalize string WELCOME', () => {
    expect(capitalize('welcome')).toEqual('Welcome');
  });
});
