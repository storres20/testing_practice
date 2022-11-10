const Calculator = require('../calculator')

let calculator = new Calculator()

describe('my calculator', () => {
  describe('my sum', () => {
    test('is sum 1+2 equal to 3', () => {
      expect(calculator.add(1,2)).toBe(3);
    });
    
    test('is sum 10+20 equal to 30', () => {
      expect(calculator.add(10,20)).toBe(30);
    });
    
    test('is sum 15+25 equal to 40', () => {
      expect(calculator.add(15,25)).toBe(40);
    });
  })
  
  describe('my subtract', () => {
    test('is subtract 5-3 equal to 2', () => {
      expect(calculator.subtract(5,3)).toBe(2);
    });
    
    test('is subtract 50-30 equal to 20', () => {
      expect(calculator.subtract(50,30)).toBe(20);
    });
    
    test('is subtract 100-20 equal to 80', () => {
      expect(calculator.subtract(100,20)).toBe(80);
    });
  })
  
  describe('my multiply', () => {
    test('is multiply 2*10 equal to 20', () => {
      expect(calculator.multiply(2,10)).toBe(20);
    });
    
    test('is multiply 20*100 equal to 2000', () => {
      expect(calculator.multiply(20,100)).toBe(2000);
    });
    
    test('is multiply 4*25 equal to 100', () => {
      expect(calculator.multiply(4,25)).toBe(100);
    });
  })
  
  describe('my divide', () => {
    test('is divide 100/4 equal to 25', () => {
      expect(calculator.divide(100,4)).toBe(25);
    });
    
    test('is divide 1000/40 equal to 25', () => {
      expect(calculator.divide(1000,40)).toBe(25);
    });
    
    test('is divide 10/2 equal to 5', () => {
      expect(calculator.divide(10,2)).toBe(5);
    });
  })
})