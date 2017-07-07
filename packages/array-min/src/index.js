/**
 * Computes the minimum of the given values
 * @param {Array<number>} input
 * @return {number}
 */
export default function min(input) {
    if (!Array.isArray(input)) {
        throw new Error('input must be an array');
    }

    if (input.length === 0) {
        throw new Error('Array should not be empty!');
    }

    return input.reduce(function (a, b) {
        return Math.min(a, b);
    });
}
