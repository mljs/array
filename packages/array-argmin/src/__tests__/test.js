import argmin from '..';

describe('array-argmin', () => {
  let typedArray = new Uint16Array(3);
  typedArray[0] = 1;
  typedArray[1] = 2;
  typedArray[2] = 3;

  it('should return the argmin', () => {
    expect(argmin([0])).toStrictEqual(0);
    expect(argmin([1])).toStrictEqual(0);
    expect(argmin([1, 2])).toStrictEqual(0);
    expect(argmin([1, 2, 1])).toStrictEqual(0);
    expect(argmin([3, 2, 1])).toStrictEqual(2);
    expect(argmin(typedArray)).toStrictEqual(0);
  });
  it('should throw on invalid value', () => {
    expect(() => argmin()).toThrow(/input must be an array/);
    expect(() => argmin([])).toThrow(/input must not be empty/);
  });
});
