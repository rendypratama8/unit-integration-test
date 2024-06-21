// calculator.test.js
const Calculator = require('./calculator');

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('adds two numbers correctly', () => {
        expect(calculator.add(1, 2)).toBe(3);
        expect(calculator.add(-1, -1)).toBe(-2);
        expect(calculator.add(-1, 1)).toBe(0);
    });

    test('subtracts two numbers correctly', () => {
        expect(calculator.subtract(2, 1)).toBe(1);
        expect(calculator.subtract(-1, -1)).toBe(0);
        expect(calculator.subtract(1, -1)).toBe(2);
    });

    test('multiplies two numbers correctly', () => {
        expect(calculator.multiply(2, 3)).toBe(6);
        expect(calculator.multiply(-1, -1)).toBe(1);
        expect(calculator.multiply(-1, 1)).toBe(-1);
    });

    test('divides two numbers correctly', () => {
        expect(calculator.divide(6, 3)).toBe(2);
        expect(calculator.divide(-4, -2)).toBe(2);
        expect(calculator.divide(-4, 2)).toBe(-2);
    });

    test('throws an error when dividing by zero', () => {
        expect(() => calculator.divide(1, 0)).toThrow('Division by zero is not allowed');
    });
});
