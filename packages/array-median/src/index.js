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

    if (input.length === 0) {
        throw new Error('input must not be empty');
    }

    return quickSelectMedian(input.slice());
}
