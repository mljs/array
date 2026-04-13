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
  const counts: Record<number, number> = {};

  for (const element of input) {
    count = counts[element];
    if (count) {
      counts[element]++;
      count++;
    } else {
      count = 1;
      counts[element] = count;
    }

    if (count > maxCount) {
      maxCount = count;
      maxValue = element;
    }
  }

  return maxValue;
}
