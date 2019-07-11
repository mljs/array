import norm from '..';

describe('array-norm', () => {
  it('should return the mean', () => {
    expect(norm([0])).toStrictEqual([0]);
    expect(norm([0, 0])).toStrictEqual([0, 0]);
    expect(norm([-1, 1])).toStrictEqual([-0.5, 0.5]);
    expect(norm([1, 3])).toStrictEqual([0.25, 0.75]);
  });

  it('should throw on invalid value', () => {
    expect(() => norm()).toThrow(/input must be an array/);
    expect(() => norm([])).toThrow(/input must not be empty/);
  });
});
