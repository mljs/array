import mean from 'ml-array-mean';

/**
 * Computes the variance of the given values
 * @param {Array} values
 * @param {boolean} [unbiased = true] - if true, divide by (n-1); if false, divide by n.
 * @return {number}
 */
export default function (values, unbiased = true) {
    var theMean = mean(values);
    var theVariance = 0;

    for (var i = 0; i < values.length; i++) {
        var x = values[i] - theMean;
        theVariance += x * x;
    }

    if (unbiased) {
        return theVariance / (values.length - 1);
    } else {
        return theVariance / values.length;
    }
}
