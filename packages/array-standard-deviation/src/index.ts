import variance from 'ml-array-variance';

export interface ArrayStandardDeviationOptions {
  /**
   * If true, divide by (n-1). If false, divide by n.
   * @default true
   */
  unbiased?: boolean;
  /**
   * Precalculated mean.
   */
  mean?: number;
}

/**
 * Computes the standard deviation of the given values.
 */
export default function standardDeviation(
  array: ArrayLike<number>,
  options: ArrayStandardDeviationOptions = {},
) {
  return Math.sqrt(variance(array, options));
}
