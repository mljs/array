import variance from 'ml-array-variance';

/**
 * Computes the standard deviation of the given values
 * @param {Array} values
 * @param {boolean} [unbiased = true] - if true, divide by (n-1); if false, divide by n.
 * @return {number}
 */
export default function standardDeviation(values, unbiased) {
    return Math.sqrt(variance(values, unbiased));
}
