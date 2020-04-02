import max from 'ml-array-max';
import sum from 'ml-array-sum';
import isArray from 'is-any-array';
/**
 * Computes the norm of the given values
 * @param {Array<number>} input
 * @param {object} [options={}]
 * @param {string} [options.algorithm='absolute'] absolute, sum or max
 * @param {number} [options.maxValue=1] new max value for algo max
 * @param {Array} [options.output=[]] specify the output array, can be the input array for in place modification
 * @return {number}
 */
export default function norm(input, options = {}) {
  const { algorithm = 'absolute', maxValue = 1 } = options;
  if (!isArray(input)) {
    throw new Error('input must be an array');
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

  if (input.length === 0) {
    throw new Error('input must not be empty');
  }

  switch (algorithm.toLowerCase()) {
    case 'absolute': {
      let absoluteSumValue = absoluteSum(input);
      if (absoluteSumValue === 0) return input.slice(0);
      for (let i = 0; i < input.length; i++) {
        output[i] = input[i] / absoluteSumValue;
      }
      return output;
    }
    case 'max': {
      let currentMaxValue = max(input);
      if (currentMaxValue === 0) return input.slice(0);
      const factor = maxValue / currentMaxValue;
      for (let i = 0; i < input.length; i++) {
        output[i] = input[i] * factor;
      }
      return output;
    }
    case 'sum': {
      let sumValue = sum(input);
      if (sumValue === 0) return input.slice(0);
      for (let i = 0; i < input.length; i++) {
        output[i] = input[i] / sumValue;
      }
      return output;
    }
    default:
      throw new Error(`norm: unknown algorithm: ${algorithm}`);
  }
}

function absoluteSum(input) {
  let sumValue = 0;
  for (let i = 0; i < input.length; i++) {
    sumValue += Math.abs(input[i]);
  }
  return sumValue;
}
