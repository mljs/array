import { expect, test } from 'vitest';

import standardDeviation from '../index.ts';

const data = [15, 13, 17, 7];

const typedArray = new Uint16Array(4);
typedArray[0] = 15;
typedArray[1] = 13;
typedArray[2] = 17;
typedArray[3] = 7;

test('standard deviation', () => {
  const s = standardDeviation(data);

  expect(s).toBeCloseTo(Math.sqrt(18.667), 3);
  expect(standardDeviation(data, { unbiased: true })).toBe(s);
  expect(standardDeviation(data, { unbiased: false })).toBe(Math.sqrt(14));
});

test('standard deviation of typed array', () => {
  const s = standardDeviation(typedArray);

  expect(s).toBeCloseTo(Math.sqrt(18.667), 3);
  expect(standardDeviation(data, { unbiased: true })).toBe(s);
  expect(standardDeviation(data, { unbiased: false })).toBe(Math.sqrt(14));
});
