import min from '..';

describe('array-min', () => {
  let typedArray = new Uint16Array(3);
  typedArray[0] = 1;
  typedArray[1] = 2;
  typedArray[2] = 3;

  it('should return the min', () => {
    expect(min([0])).toStrictEqual(0);
    expect(min([1])).toStrictEqual(1);
    expect(min([1, 2])).toStrictEqual(1);
    expect(min([1, 2, 1])).toStrictEqual(1);
    expect(min([3, 2, 1])).toStrictEqual(1);
    expect(min(typedArray)).toStrictEqual(1);
  });
  it('should throw on invalid value', () => {
    expect(() => min()).toThrow(/input must be an array/);
    expect(() => min([])).toThrow(/input must not be empty/);
  });
});
