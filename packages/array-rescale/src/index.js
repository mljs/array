import isArray from 'is-any-array';
import max from 'ml-array-max';
import min from 'ml-array-min';

/**
 *
 * @param {Array} input
 * @param {object} [options={}]
 * @param {number} [options.min=Math.min(...input)]
 * @param {number} [options.max=Math.max(...input)]
 * @param {number} [options.autoMinMax] if min or max is undefined take the min or max from array
 * @param {Array} [options.output=[]] specify the output array, can be the input array for in place modification
 */
export default function rescale(input, options = {}) {
  if (!isArray(input)) {
    throw new TypeError('input must be an array');
  } else if (input.length === 0) {
    throw new TypeError('input must not be empty');
  }

  let output;
  if (options.output !== undefined) {
    if (!isArray(options.output)) {
      throw new TypeError('output option must be an array if specified');
    }
    output = options.output;
  } else {
    output = new Array(input.length);
  }

  const currentMin = min(input);
  const currentMax = max(input);

  if (currentMin === currentMax) {
    throw new RangeError(
      'minimum and maximum input values are equal. Cannot rescale a constant array',
    );
  }

  const {
    min: minValue = options.autoMinMax ? currentMin : 0,
    max: maxValue = options.autoMinMax ? currentMax : 1,
  } = options;

  if (minValue >= maxValue) {
    throw new RangeError('min option must be smaller than max option');
  }

  const factor = (maxValue - minValue) / (currentMax - currentMin);
  for (let i = 0; i < input.length; i++) {
    output[i] = (input[i] - currentMin) * factor + minValue;
  }

  return output;
}
