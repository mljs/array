import sequentialFill from '..';

describe('array-sequential fill', () => {
  it('default value', () => {
    expect(sequentialFill()).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(sequentialFill([])).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  it('check options', () => {
    expect(sequentialFill([], { from: 0, to: 10, step: 2 })).toEqual([0, 2, 4, 6, 8, 10]);
    expect(sequentialFill([], { from: 0, to: 10, size: 6 })).toEqual([0, 2, 4, 6, 8, 10]);
    expect(sequentialFill([1, 2, 3, 4, 5, 6], { from: 0, to: 10 })).toEqual([0, 2, 4, 6, 8, 10]);
    expect(sequentialFill([1, 2, 3], { from: 0, to: 10, step: 2 })).toEqual([0, 2, 4, 6, 8, 10]);
    expect(sequentialFill(undefined, { from: 0, to: 10, step: 2 })).toEqual([0, 2, 4, 6, 8, 10]);
    expect(sequentialFill({ from: 0, to: 10, step: 2 })).toEqual([0, 2, 4, 6, 8, 10]);
    expect(sequentialFill([], { from: -1, to: 1, size: 5 })).toEqual([-1, -0.5, 0, 0.5, 1]);
    expect(sequentialFill([], { from: 0, to: 0, size: 5 })).toEqual([0, 0, 0, 0, 0]);
    expect(sequentialFill([], { from: 1, to: -1, size: 5 })).toEqual([1, 0.5, 0, -0.5, -1]);
  });
});
