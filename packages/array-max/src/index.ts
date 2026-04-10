import { isAnyArray } from 'is-any-array';

export interface MlArrayMaxOptions {
  /**
   * Start index (inclusive) for the slice within which we look for the maximum.
   * @default 0
   */
  fromIndex?: number;

  /**
   * End index (exclusive) for the slice within which we look for the maximum.
   * @default input.length
   */
  toIndex?: number;
}

/**
 * Computes the maximum of the given values.
 *
 * @param input
 * @param options
 */
export default function mlArrayMax(
  input: ArrayLike<number>,
  options: MlArrayMaxOptions = {},
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

  let maxValue = input[fromIndex];
  for (let i = fromIndex + 1; i < toIndex; i++) {
    if (input[i] > maxValue) maxValue = input[i];
  }
  return maxValue;
}
