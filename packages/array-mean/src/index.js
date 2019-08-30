import sum from 'ml-array-sum';

/**
 * Computes the mean of the given values
 * @param {Array<number>} input
 * @return {number}
 */
export default function mean(input) {
  return sum(input) / input.length;
}
