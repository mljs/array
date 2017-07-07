import quickSelectMedian from 'median-quickselect';

/**
 * Computes the median of the given values
 * @param {Array<number>} input
 * @return {number}
 */
export default function median(input) {
    if (!Array.isArray(input)) {
        throw new Error('input must be an array');
    }

    var l = input.length;
    if (l === 0) {
        throw new Error('Array should not be empty!');
    }

    var copy = new Array(l);
    for (var i = 0; i < l; ++i) {
        copy[i] = input[i];
    }

    return quickSelectMedian(copy);
}
