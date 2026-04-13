import { isAnyArray } from 'is-any-array';
import arrayMean from 'ml-array-mean';

export interface ArrayVarianceOptions {
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

export default function variance(
  values: ArrayLike<number>,
  options: ArrayVarianceOptions = {},
) {
  if (!isAnyArray(values)) {
    throw new TypeError('input must be an array');
  }

  const { unbiased = true, mean = arrayMean(values) } = options;
  let sqrError = 0;

  for (const value of values) {
    const x = value - mean;
    sqrError += x * x;
  }

  if (unbiased) {
    return sqrError / (values.length - 1);
  } else {
    return sqrError / values.length;
  }
}
