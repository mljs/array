import max from 'ml-array-max';
import sum from 'ml-array-sum';

/**
 * Computes the norm of the given values
 * @param {Array<number>} input
 * @param {object} [options={}]
 * @param {string} [options.algorithm='absolute'] absolute, sum or max
 * @return {number}
 */
export default function norm(input, options = {}) {
  const { algorithm = 'absolute' } = options;
  if (!Array.isArray(input)) {
    throw new Error('input must be an array');
  }

  if (input.length === 0) {
    throw new Error('input must not be empty');
  }

  switch (algorithm.toLowerCase()) {
    case 'absolute': {
      let absoluteSumValue = absoluteSum(input);
      if (absoluteSumValue === 0) return input.slice(0);
      return input.map((element) => element / absoluteSumValue);
    }
    case 'max': {
      let maxValue = max(input);
      if (maxValue === 0) return input.slice(0);
      return input.map((element) => element / maxValue);
    }
    case 'sum': {
      let sumValue = sum(input);
      if (sumValue === 0) return input.slice(0);
      return input.map((element) => element / sumValue);
    }

    default:
      throw new Error(`norm: unknown algorithm: ${algorithm}`);
  }
}

function absoluteSum(input) {
  let sum = 0;
  for (var i = 0; i < input.length; i++) {
    sum += Math.abs(input[i]);
  }
  return sum;
}
