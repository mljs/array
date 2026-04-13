import { isAnyArray } from 'is-any-array';

/**
 * Computes the sum of the given values.
 */
export default function sum(input: ArrayLike<number>) {
  if (!isAnyArray(input)) {
    throw new TypeError('input must be an array');
  }

  if (input.length === 0) {
    throw new TypeError('input must not be empty');
  }

  let sumValue = 0;
  for (const value of input) {
    sumValue += value;
  }
  return sumValue;
}
