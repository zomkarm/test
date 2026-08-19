import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from '../src/modules/calculator.js';

describe('Calculator Module', () => {
  it('correctly adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('correctly subtracts two numbers', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  it('correctly multiplies two numbers', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  it('correctly divides two numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  it('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed.');
  });
});