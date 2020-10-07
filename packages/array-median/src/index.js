import isArray from 'is-any-array';
import quickSelectMedian from 'median-quickselect';

export default function median(input) {
  if (!isArray(input)) {
    throw new TypeError('input must be an array');
  }

  if (input.length === 0) {
    throw new TypeError('input must not be empty');
  }

  return quickSelectMedian(input.slice());
}
