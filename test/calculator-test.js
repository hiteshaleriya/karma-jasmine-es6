import { Calculator } from '../src/calculator.js';

describe('Calculator', () => {

    it('should add two numbers', () => {
        let calculator = new Calculator();
        let sum = calculator.add(1, 4);
        expect(sum).toBe(5);
    });

    it('should multiply two numbers', () => {
        let calculator = new Calculator();
        let multiply = calculator.multiply(4, 2);
        expect(multiply).toBe(8);
    });

});