import { isAnyArray } from 'is-any-array';

/**
 * Computes the mode of the given values.
 */
export default function mode(input: ArrayLike<number>): number {
  if (!isAnyArray(input)) {
    throw new TypeError('input must be an array');
  }
  if (input.length === 0) {
    throw new TypeError('input must not be empty');
  }

  let maxValue = 0;
  let maxCount = 0;
  let count = 0;
  let counts: Record<number, number> = {};

  for (let i = 0; i < input.length; ++i) {
    let element = input[i];
    count = counts[element];
    if (count) {
      counts[element]++;
      count++;
    } else {
      counts[element] = count = 1;
    }

    if (count > maxCount) {
      maxCount = count;
      maxValue = input[i];
    }
  }

  return maxValue;
}
