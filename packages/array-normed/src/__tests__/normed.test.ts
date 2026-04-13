import { describe, expect, it } from 'vitest';

import norm from '../index.ts';

describe('array-norm', () => {
  it('should return the norm', () => {
    expect(norm([0])).toStrictEqual([0]);
    expect(norm([0, 0])).toStrictEqual([0, 0]);
    expect(norm([-1, 1])).toStrictEqual([-0.5, 0.5]);
    expect(norm([1, 3])).toStrictEqual([0.25, 0.75]);
  });

  it('should return the norm algorithm=absolute', () => {
    expect(norm([0], { algorithm: 'absolute' })).toStrictEqual([0]);
    expect(norm([0, 0], { algorithm: 'absolute' })).toStrictEqual([0, 0]);
    expect(norm([-1, 1], { algorithm: 'absolute' })).toStrictEqual([-0.5, 0.5]);
    expect(norm([1, 3], { algorithm: 'absolute' })).toStrictEqual([0.25, 0.75]);
  });

  it('should return the norm algorithm=max', () => {
    expect(norm([0], { algorithm: 'max' })).toStrictEqual([0]);
    expect(norm([0, 0], { algorithm: 'max' })).toStrictEqual([0, 0]);
    expect(norm([-1, 1], { algorithm: 'max' })).toStrictEqual([-1, 1]);
    expect(norm([1, 4], { algorithm: 'max' })).toStrictEqual([0.25, 1]);
  });

  it('should return the norm algorithm=max and max to 100', () => {
    expect(norm([0], { algorithm: 'max', maxValue: 100 })).toStrictEqual([0]);
    expect(norm([0, 0], { algorithm: 'max', maxValue: 100 })).toStrictEqual([
      0, 0,
    ]);
    expect(norm([-1, 1], { algorithm: 'max', maxValue: 100 })).toStrictEqual([
      -100, 100,
    ]);
    expect(norm([1, 4], { algorithm: 'max', maxValue: 100 })).toStrictEqual([
      25, 100,
    ]);
  });

  it('should return the norm algorithm=sum', () => {
    expect(norm([0], { algorithm: 'sum' })).toStrictEqual([0]);
    expect(norm([0, 0], { algorithm: 'sum' })).toStrictEqual([0, 0]);
    expect(norm([-1, 1], { algorithm: 'sum' })).toStrictEqual([-1, 1]);
    expect(norm([-1, 3], { algorithm: 'sum' })).toStrictEqual([-0.5, 1.5]);
    expect(norm([1, 3], { algorithm: 'sum' })).toStrictEqual([0.25, 0.75]);
  });

  it('should return the norm algorithm=sum sumValue=5', () => {
    expect(norm([0], { algorithm: 'sum', sumValue: 5 })).toStrictEqual([0]);
    expect(norm([0, 0], { algorithm: 'sum', sumValue: 5 })).toStrictEqual([
      0, 0,
    ]);
    expect(norm([-1, 1], { algorithm: 'sum', sumValue: 5 })).toStrictEqual([
      -1, 1,
    ]);
    expect(norm([-1, 3], { algorithm: 'sum', sumValue: 5 })).toStrictEqual([
      -2.5, 7.5,
    ]);
    expect(norm([1, 3], { algorithm: 'sum', sumValue: 5 })).toStrictEqual([
      1.25, 3.75,
    ]);
  });

  it('should throw on invalid value', () => {
    // @ts-expect-error ensure implementation catch missing input
    expect(() => norm()).toThrow(/input must be an array/);
    expect(() => norm([])).toThrow(/input must not be empty/);
  });
});
