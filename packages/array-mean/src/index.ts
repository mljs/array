import sum from 'ml-array-sum';

/**
 * Computes the mean of the given values.
 */
export default function mean(array: ArrayLike<number>): number {
  return sum(array) / array.length;
}
