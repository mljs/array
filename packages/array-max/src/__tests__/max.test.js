import max from '..';

describe('array-max', () => {
  let typedArray = new Uint16Array(3);
  typedArray[0] = 1;
  typedArray[1] = 2;
  typedArray[2] = 3;

  it('should return the max', () => {
    expect(max([0])).toBe(0);
    expect(max([1])).toBe(1);
    expect(max([1, 2])).toBe(2);
    expect(max([1, 2, 1])).toBe(2);
    expect(max([3, 2, 1])).toBe(3);
    expect(max(typedArray)).toBe(3);
  });
  it('should throw on invalid value', () => {
    expect(() => max()).toThrow(/input must be an array/);
    expect(() => max([])).toThrow(/input must not be empty/);
  });
});
