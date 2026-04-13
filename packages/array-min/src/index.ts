import { isAnyArray } from 'is-any-array';

export interface ArrayMinOptions {
  /**
   * Start index (inclusive) for the slice within which we look for the minimum.
   */
  fromIndex?: number;
  /**
   * End index (exclusive) for the slice within which we look for the minimum
   */
  toIndex?: number;
}

/**
 * Computes the minimum of the given values.
 */
export default function min(
  input: ArrayLike<number>,
  options: ArrayMinOptions = {},
): number {
  if (!isAnyArray(input)) {
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

  let minValue = input[fromIndex];
  for (let i = fromIndex + 1; i < toIndex; i++) {
    if (input[i] < minValue) minValue = input[i];
  }
  return minValue;
}
