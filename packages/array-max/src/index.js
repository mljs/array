import isArray from 'is-any-array';

/**
 * Computes the maximum of the given values
 * @param {Array<number>} input
 * @return {number}
 */
export default function max(input) {
  if (!isArray(input)) {
    throw new TypeError('input must be an array');
  }

  if (input.length === 0) {
    throw new TypeError('input must not be empty');
  }

  var max = input[0];
  for (var i = 1; i < input.length; i++) {
    if (input[i] > max) max = input[i];
  }
  return max;
}
