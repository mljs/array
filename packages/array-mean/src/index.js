import isArray from 'is-any-array';

/**
 * Computes the mean of the given values
 * @param {Array<number>} input
 * @return {number}
 */
export default function mean(input) {
  if (!isArray(input)) {
    throw new TypeError('input must be an array');
  }

  if (input.length === 0) {
    throw new TypeError('input must not be empty');
  }

  var sum = 0;
  for (var i = 0; i < input.length; i++) {
    sum += input[i];
  }
  return sum / input.length;
}
