import isArray from 'is-any-array';

/**
 * Computes the index of the minimum of the given values
 * @param {Array<number>} input
 * @return {number}
 */
export default function argmin(input) {
  if (!isArray(input)) {
    throw new TypeError('input must be an array');
  }

  if (input.length === 0) {
    throw new TypeError('input must not be empty');
  }

  let minIndex = 0;
  for (let i = 1; i < input.length; i++) {
    if (input[i] < input[minIndex]) {
      minIndex = i;
    }
  }
  return minIndex;
}
