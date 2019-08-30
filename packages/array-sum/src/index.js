import isArray from 'is-any-array';

/**
 * Computes the mean of the given values
 * @param {Array<number>} input
 * @return {number}
 */
export default function sum(input) {
  if (!isArray(input)) {
    throw new TypeError('input must be an array');
  }

  if (input.length === 0) {
    throw new TypeError('input must not be empty');
  }

  let sumValue = 0;
  for (let i = 0; i < input.length; i++) {
    sumValue += input[i];
  }
  return sumValue;
}
