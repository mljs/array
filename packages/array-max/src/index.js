import isArray from 'is-any-array';

/**
 * Computes the maximum of the given values
 * @param {Array<number>} input
 * @param {number} [options.fromIndex] - Start index (inclusive) for the slice within which we look for the maximum
 * @param {number} [options.toIndex] - End index (exclusive) for the slice within which we look for the maximum
 * @return {number}
 */
export default function max(input, options = {}) {
  if (!isArray(input)) {
    throw new TypeError('input must be an array');
  }

  if (input.length === 0) {
    throw new TypeError('input must not be empty');
  }

  const { fromIndex = 0, toIndex = input.length } = options;

  if (
    fromIndex < 0 ||
    fromIndex >= input.length ||
    !Number.isInteger(fromIndex)
  ) {
    throw new Error('fromIndex must be a positive integer smaller than length');
  }

  if (
    toIndex <= fromIndex ||
    toIndex > input.length ||
    !Number.isInteger(toIndex)
  ) {
    throw new Error(
      'toIndex must be an integer greater than fromIndex and at most equal to length',
    );
  }

  let maxValue = input[fromIndex];
  for (let i = fromIndex + 1; i < toIndex; i++) {
    if (input[i] > maxValue) maxValue = input[i];
  }
  return maxValue;
}
