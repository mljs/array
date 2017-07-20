import variance from 'ml-array-variance';

/**
 * Computes the standard deviation of the given values
 * @param {Array} values
 * @param {object} [options]
 * @param {boolean} [options.unbiased = true] - if true, divide by (n-1); if false, divide by n.
 * @param {number} [options.mean = arrayMean] - precalculated mean, if any.
 * @return {number}
 */
export default function standardDeviation(values, options = {}) {
    return Math.sqrt(variance(values, options));
}
