import arrayMean from 'ml-array-mean';

/**
 * Computes the variance of the given values
 * @param {Array} values
 * @param {object} [options]
 * @param {boolean} [options.unbiased = true] - if true, divide by (n-1); if false, divide by n.
 * @param {number} [options.mean = arrayMean] - precalculated mean, if any.
 * @return {number}
 */
export default function (values, options = {}) {
    const {
        unbiased = true,
        mean = arrayMean(values)
    } = options;
    var sqrError = 0;

    for (var i = 0; i < values.length; i++) {
        var x = values[i] - mean;
        sqrError += x * x;
    }

    if (unbiased) {
        return sqrError / (values.length - 1);
    } else {
        return sqrError / values.length;
    }
}
