import argmax from '..';

describe('array-argmax', () => {
  let typedArray = new Uint16Array(3);
  typedArray[0] = 1;
  typedArray[1] = 2;
  typedArray[2] = 3;

  it('should return the argmax', () => {
    expect(argmax([0])).toBe(0);
    expect(argmax([1])).toBe(0);
    expect(argmax([1, 2])).toBe(1);
    expect(argmax([1, 2, 1])).toBe(1);
    expect(argmax([3, 2, 1])).toBe(0);
    expect(argmax(typedArray)).toBe(2);
  });
  it('should throw on invalid value', () => {
    expect(() => argmax()).toThrow(/input must be an array/);
    expect(() => argmax([])).toThrow(/input must not be empty/);
  });
});
