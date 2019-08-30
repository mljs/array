import arrayMean from 'ml-array-mean';
import isArray from 'is-any-array';

/**
 * Computes the variance of the given values
 * @param {Array} values
 * @param {object} [options]
 * @param {boolean} [options.unbiased = true] - if true, divide by (n-1); if false, divide by n.
 * @param {number} [options.mean = arrayMean] - precalculated mean, if any.
 * @return {number}
 */
export default function variance(values, options = {}) {
  if (!isArray(values)) {
    throw new TypeError('input must be an array');
  }

  const { unbiased = true, mean = arrayMean(values) } = options;
  let sqrError = 0;

  for (let i = 0; i < values.length; i++) {
    let x = values[i] - mean;
    sqrError += x * x;
  }

  if (unbiased) {
    return sqrError / (values.length - 1);
  } else {
    return sqrError / values.length;
  }
}
