/**
 * Computes the norm of the given values
 * @param {Array<number>} input
 * @param {object} [options={}]
 * @param {string} [algorithm='absolute']
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
    case 'absolute':
      var sum = absoluteSum(input);
      if (sum === 0) return input.slice(0);
      return input.map((element) => element / sum);
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
