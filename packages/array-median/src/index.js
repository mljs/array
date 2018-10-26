import quickSelectMedian from 'median-quickselect';
import isArray from 'is-any-array';

/**
 * Computes the median of the given values
 * @param {Array<number>} input
 * @return {number}
 */
export default function median(input) {
  if (!isArray(input)) {
    throw new TypeError('input must be an array');
  }

  if (input.length === 0) {
    throw new TypeError('input must not be empty');
  }

  return quickSelectMedian(input.slice());
}
