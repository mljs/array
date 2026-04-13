import { describe, expect, it } from 'vitest';

import mode from '../index.ts';

describe('array-mode', () => {
  const typedArray = new Uint16Array(3);
  typedArray[0] = 2;
  typedArray[1] = 3;
  typedArray[2] = 1;

  it('should return the mode', () => {
    expect(mode([0])).toBe(0);
    expect(mode([1])).toBe(1);
    expect(mode([1, 2])).toBe(1);
    expect(mode([1, 2, 1])).toBe(1);
    expect(mode([2, 3, 1])).toBe(2);
    expect(mode(typedArray)).toBe(2);
    expect(mode([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4])).toBe(4);
  });

  it('should throw on invalid value', () => {
    // @ts-expect-error ensure implementation catch missing input
    expect(() => mode()).toThrow(/input must be an array/);
    expect(() => mode([])).toThrow(/input must not be empty/);
  });
});
